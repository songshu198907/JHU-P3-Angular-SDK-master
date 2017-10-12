(function(angular) {

  /**
  This factory creates {Adapter} objects. An Adapter represents a connection to an API, and it is meant to handle how to configure an HttpClient
  in order to connect to its API. By default, an Adapter does nothing more than pass on the options for requests down to an HttpClient, but its
  methods can easily be overrided to achieve custom behaviour.
  Also, an Adapter instance can choose whether to send requests through its HttpClient or through its MockServer instance, in such funcionality
  has been enabled.

  @module AP
  @submodule adapter
  @class $adapterFactory
  */
  angular.module("AP.adapter")
    .factory("$adapterFactory", ["$httpClientFactory", "$mockServerFactory", "$cache", "$q", "$helpers", "$http", function($httpClientFactory, $mockServerFactory, $cache, $q, $helpers, $http) {

      /**
      Adapter Constructor
      @class Adapter
      @constructor
      @param {Object} options configuration options for Adapter constructor
      */
      function Adapter(options) {
        /**
        @property useMockServer
        @type {Boolean}
        */
        this.useMockServer = false;

        var opts = options || {};

        /**
        @property $restClient
        @type {HttpClient}
        */
        this.$restClient = $httpClientFactory.create(opts);
        /**
        @property $mockServer
        @type {MockServer}
        */
        this.$mockServer = $mockServerFactory.create();
      }

      /**
      Returns a request transformation depending on whether the model has fields that are of type file or not. When files are
      present, the transformation returned will give back FormData with the data, else the data will just be returned as is.
      @method encodeDataTransformation
      @param {Object} the data to transform
      @param {Array} an array containing the name of all the file fields in the model (empty if none present)
      @returns {Function} request transformation to apply to the request
      */
      Adapter.encodeDataTransformation = function(data, fileFieldNames) {
        var $data = angular.extend({}, data), fileFields = {};
        if(fileFieldNames && fileFieldNames.length) {
          var formData = new FormData();
          angular.forEach(fileFieldNames, function(name) {
            fileFields[name] = $data[name];
            delete $data[name];
          });
          angular.forEach($data, function(value, name) {
            formData.append(name, String(value));
          });
          angular.forEach(fileFields, function(file, name) {
            formData.append(name, file);
          });
          return function() {
            return formData;
          };
        }
        return function(data) {
          return data;
        };
      };

      /**
      Setting the base url for an adapter will change the base url in the Adapter's HttpClient, so all requests will be directed
      to the new url.
      @method setBaseUrl
      @param {String} url the new url to use as base of the API
      @returns {Void}
      */
      Adapter.prototype.setBaseUrl = function(url) {
        if(url && typeof url === "string") {
          this.$restClient.url = url;
        }
      };

      /**
      Returns an array containing the names of all the fields in the given model that are of type file,
      or an empty array if none are present.
      @method getModelFileFields
      @param {Object} the model to which the fields belong
      @returns {Array} the array of field names
      */
      Adapter.prototype.getModelFileFields = function(model) {
        var fileFields = [];
        angular.forEach(model.fields, function(field) {
          if(field.type === "file") {
            fileFields.push(field.name);
          }
        });
        return fileFields;
      };

      /**
      Given an array of transformations to apply to a request, it will return a new array containing Angular's default request transformations
      with the passed transformations appended to its tail.
      @method appendToDefaultRequestTransformations
      @param {Array} array of transformations to add to the default ones
      @returns {Array} the concatenation of both default transformations and passed transformations
      */
      Adapter.prototype.appendToDefaultRequestTransformations = function(transformations) {
        var defaults = $http.defaults.transformRequest;
        if(transformations && transformations.length) {
          return defaults.concat(transformations);
        }
        return defaults;
      };

      /**
      Given an array of transformations to apply to a response, it will return a new array containing Angular's default resṕonse transformations
      with the passed transformations appended to its tail.
      @method appendToDefaultRequestTransformations
      @param {Array} array of transformations to add to the default ones
      @returns {Array} the concatenation of both default transformations and passed transformations
      */
      Adapter.prototype.appendToDefaultResponseTransformations = function(transformations) {
        var defaults = $http.defaults.transformResponse;
        if(transformations && transformations.length) {
          return defaults.concat(transformations);
        }
        return defaults;
      };

      /**
      Sends an ajax request for a Model instance. Here the Adapter routes the request to the HttpClient or the MockServer.
      @method ajax
      @param {String} method HTTP verb (GET, POST, PUT, PATCH or DELETE)
      @param {Model} model a Model executing the request, for example $person or $employee (this is not a specific resource but the Model service)
      @param {Object} options request options
      @returns {Promise} the promise obtained from either HttpClient or MockServer doing an AJAX request
      */
      Adapter.prototype.ajax = function(method, model, options) {
        var promise = undefined;
        if(this.useMockServer) {
          promise = this.$mockServer[method](model, options);
        } else {
          promise = this.$restClient[method](options);
        }
        return $q(function(resolve, reject) {
          promise
          .then(function(response) {
            resolve(response.data);
          })
          .catch(function(err) {
            reject(err);
          });
        });
      };

      /**
      Handles the create action on a Model

      @method create
      @param {Model} the model service to get the url from and to send to the ajax method of the adapter
      @param {Object} the data to send in the request for creation
      @returns {Promise} the promise object returned by the ajax method
      */
      Adapter.prototype.create = function(model, data) {
        var attributes = angular.extend({}, data);
        var fileFields = this.getModelFileFields(model);
        var headers = (fileFields.length) ? {'Content-Type': undefined} : {};
        return this.ajax("post", model, {
          url: model.url,
          data: attributes,
          headers: headers,
          requestTransformations: [Adapter.encodeDataTransformation(attributes, fileFields)],
          responseTransformations: this.appendToDefaultResponseTransformations([
              function(response) {
                if(response instanceof Object) {
                  angular.extend(data, response);
                }
                return response;
              }
            ]
          )
        });
      };

      /**
      Handles the update action on a Model

      @method update
      @param {Model} the model service to get the url from and to send to the ajax method of the adapter
      @param {Object} the data to update in the server
      @returns {Promise} the promise object returned by the ajax method
      */
      Adapter.prototype.update = function(model, data) {
        var attributes = angular.extend({}, data);
        var fileFields = this.getModelFileFields(model);
        var headers = (fileFields.length) ? {'Content-Type': undefined} : {};
        return this.ajax("put", model, {
          url: model.url + "/" + attributes.id,
          data: attributes,
          headers: headers,
          requestTransformations: [Adapter.encodeDataTransformation(attributes, fileFields)],
          responseTransformations: this.appendToDefaultResponseTransformations([
              function(response) {
                if(response instanceof Object) {
                  angular.extend(data, response);
                }
                return response;
              }
            ]
          )
        });
      };

      /**
      Handles the read action on a Model

      @method read
      @param {Model} the model service to get the url from and to send to the ajax method of the adapter
      @param {Object} options object containing the id of the instance being read from the server
      @returns {Promise} the promise object returned by the ajax method
      */
      Adapter.prototype.read = function(model, options) {
        return this.ajax("get", model, {
          url: model.url + "/" + options.id,
          responseTransformations: this.appendToDefaultResponseTransformations([angular.bind(model, model.createResource)])
        });
      };

      /**
      Handles the delete action on a Model

      @method delete
      @param {Model} the model service to get the url from and to send to the ajax method of the adapter
      @param {Object} the data containing the id of the instance to delete
      @returns {Promise} the promise object returned by the ajax method
      */
      Adapter.prototype.delete = function(model, data) {
        return this.ajax("delete", model, {
          url: model.url + "/" + data.id
        });
      };

      /**
      Handles query scope requests on a Model

      @method query
      @param {Model} the model service to get the url from and to send to the ajax method of the adapter
      @param {String} the name of the query scope to execute
      @param {Object} the configuration of the query to send as query scope params
      @param {Function} callback to be executed if the request is successful
      @param {Function} callback to be executed in the event of an error
      @returns {Array}/{Object} an empty array or an object with an empty value field (an array for object query scopes, and an object for aggregate query scope)
                  that will be populated when the data comes back from the server
      */
      Adapter.prototype.query = function(model, scope, query, success, error) {
        var resource = undefined;
        var scopeDefinition = $helpers.find(model.scopes, function(definition) {
          return definition.name == scope;
        });
        if(scopeDefinition) {
          var type = scopeDefinition.type,
              queryData = this.buildParams(scope, query || {}),
              transformations = [];

          if(type === "ObjectQueryScope") {
            resource = [];
            transformations = [
              angular.bind(model, model.createCollection),
              function(data) {
                if(angular.isArray(data)) {
                  Array.prototype.push.apply(resource, data);
                }
                return data;
              }
            ];
          } else if(type === "AggregateQueryScope") {
            var aggregateField = scopeDefinition.aggregateField;
            resource = {value: undefined};
            transformations = [
              function(data) {
                if(data && angular.isArray(data) && data.length > 0 && aggregateField) {
                  data = data[0][aggregateField];
                }
                return data;
              },
              function(data) {
                resource.value = data;
                return resource;
              }
            ];
          }

          this.ajax("get", model, {
            url: model.url,
            params: queryData,
            success: success,
            error: error,
            responseTransformations: this.appendToDefaultResponseTransformations(transformations)
          });
        }
        return resource;
      };

      /**
      Formats the query attributes like so:
      {
        query: {
          name: "John",
          age: 30
        }
      }
      >>>> INTO >>>>
      {
        "query[name]": "John",
        "query[age]": 30
      }

      To accomodate to the query string params expected by AP backend services

      @method mapQueryParams
      @param {Object} the query configuration for a query scope
      @returns {Object} the changed version of the configuration object
      */
      Adapter.prototype.mapQueryParams = function(data) {
        var key, query, value;
        query = {};
        for (key in data) {
          value = data[key];
          if (value) {
            query["query[" + key + "]"] = value;
          }
        }
        return query;
      };

      /**
      Formats an Object to send as request parameters of a query scope
      @method buildParams
      @param {String} the name of the scope
      @param {Object} the attributes for the query
      @returns {Object} key/value pairs for query string parameters name/values
      */
      Adapter.prototype.buildParams = function(scopeName, data) {
        var query = { scope: scopeName };
        if(angular.isObject(data)) {
          angular.extend(query, this.mapQueryParams(data.query));
          query.limit = data.limit;
          query.offset = data.offset;
        }
        return query;
      };

      return {
        /**
        Creates an Adapter instance
        @method create
        @param {Object} options configuration options for the request instance
        @returns {Adapter}
        */
        create: function(options) {
          return new Adapter(options);
        }
      }

    }]);

})(angular);
