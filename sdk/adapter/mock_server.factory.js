(function(angular) {

  /**
  Factory that creates MockServer instances. A MockServer simulates the AJAX calls usually sent to a backend server
  by a Model instance, returning fake data in order to allow offline development.
  @module AP
  @submodule adapter
  @class $mockServerFactory
  */
  angular.module("AP.adapter")
    .factory("$mockServerFactory", ["$q", "$helpers", function($q, $helpers) {

      /**
      MockServer Constructor
      @class MockServer
      @constructor
      */
      function MockServer() {}

      angular.extend(MockServer.prototype, {

        /**
        Extract the id value from a url, for example given "http://localhost/api/v1/people/1u987s"
        the result would be "1u987s"
        @method getInstanceIdFromUrl
        @param {String} url the url to extract the id from
        @returns {String} url the id
        */
        getInstanceIdFromUrl: function(url) {
          var id = "";
          if(url) {
            var lastSlashIndex = url.lastIndexOf("/");
            var queryStringStartIndex = url.indexOf("?");
            queryStringStartIndex = (queryStringStartIndex == -1) ? url.length : queryStringStartIndex;
            var start = lastSlashIndex + 1;
            var length = queryStringStartIndex - start;
            id = url.substr(start, length);
          }
          return id;
        },

        /**
        Given a Model and an id, it creates a complete instance of a that Model, as to simulate
        a GET request for a single element, where sending ```GET { id: 1 }```, would usually return something like ```{ id: 1, name: "John", age: 30 }```.
        The reason it takes an id is to keep consistency, so the returned instance has the same id that was searched.
        @method getInstance
        @param {Model} model the model to create an instance of
        @param {String} id the id for the instance calling GET
        @returns {Object} representation of a JSON response contaning a single instance
        */
        getInstance: function(model, id) {
          var instance = this.generateDataForInstance(model);
          var keyField = $helpers.find(model.fields, function(field) {
            return field.key;
          });
          if(keyField && keyField.name) {
            var name = keyField.name;
            instance[name] = id;
          }
          return instance;
        },

        /**
        Given an Object containing the data sent by a POST request, it completes that data with every field that
        is defined as auto as those values would usually be filled in by the backend.
        @method completeAutoFieldsForInstance
        @param {Model} model the model service that holds the fields descriptions for the instance
        @param {Object} instance the request data sent in a POST
        @returns {Object} the same data with auto fields filled in
        */
        completeAutoFieldsForInstance: function(model, instance) {
          var autoFields = {};
          if(angular.isObject(model) && angular.isObject(instance)) {
            angular.forEach(model.fields, function(field) {
              if(field.auto) {
                autoFields[field.name] = this.randomDataForField(field);
              }
            }, this);
            angular.extend(instance, autoFields);
          }
          return instance;
        },

        /**
        Generates random data for an instance of a given Model based of its defined fields
        @method generateDataForInstance
        @param {Model} model the Model for which the data is generated
        @returns {Object} the data for the instance
        */
        generateDataForInstance: function(model) {
          model = model || {};
          var fields = model.fields,
              data = {};
          if(angular.isArray(fields)) {
            angular.forEach(fields, function(field) {
              data[field.name] = this.randomDataForField(field);
            }, this);
          }
          return data;
        },

        /**
        Generates a response for an Object Query Scope, basically an Array of a specified length with fake instances of that Model.
        If no length is passed then it will create 3 instances in the Array
        @method generateDataForObjectQueryScope
        @param {Model} model the model to which the query scope belongs to
        @param {Number} length the amount of instances wanted in the response
        @returns {Object[]}
        */
        generateDataForObjectQueryScope: function(model, length) {
          var model = model || {}, len = length || 3, data = [];
          for(var i=0 ; i < len ; i++) {
            var instanceData = this.generateDataForInstance(model);
            data.push(instanceData);
          }
          return data;
        },

        /**
        Generates a response for an Aggregate Query Scope, that is, an Array with a single Object that contains the
        with the aggregate field for that query scope and a generated value for that aggregate field
        @method generateDataForAggregateQueryScope
        @param {Model} model the Model service to which the aggregate query scope belongs to
        @param {String} aggregateField the name of the aggregate field for this Aggregate Query Scope
        @returns {Object[]}
        */
        generateDataForAggregateQueryScope: function(aggregateField) {
          var aggregateField = aggregateField || "id", data = [{}];
          data[0][aggregateField] = this.randomDataForField({ type: "integer" });
          return data;
        },

        /**
        Given a field definition for a Model, it generates a random value for that field
        @method randomDataForField
        @param {Object} field field definition
        @returns {Number}/{String} depending on the field type
        */
        randomDataForField: function(field) {
          field = field || {};
          var type = field.type;
          switch(type) {
            case "string":
              return $helpers.uniqueId(name + "_");
            case "integer":
              return $helpers.randomNumber();
            case "boolean":
              return (Math.random() * 100) < 50;
            case "float":
              return (Math.random() * 1000000000);
            case "date":
            case "time":
              return (new Date()).toISOString();
            case "array":
              return [$helpers.randomNumber(), $helpers.randomNumber(), $helpers.randomNumber()];
            case "hash":
              return {
                "field1": $helpers.uniqueId("field1"),
                "field2": $helpers.uniqueId("field2"),
                "field3": $helpers.uniqueId("field3")
              }
          }
        },

        /**
        Handles what response to generate for a request, depending on the verb (GET, POST, etc.) and
        on whether the request is for an instance or if its a query scope
        @method mockDataForRequest
        @param {String} method the HTTP verb of the request
        @param {Model} model the Model instance that triggered the request
        @param {Object} options request options
        @returns {Object[]}/{Object} the fake resonse for the request
        */
        mockDataForRequest: function(method, model, options) {
          if(!angular.isObject(model)) {
            // Here we will fake authentication
            return null;
          }

          var data = options.data;
          var params = options.params;
          var scope = (params) ? params.scope : undefined;

          if(!scope) {
            if(method === "post") {
              return this.completeAutoFieldsForInstance(model, data);
            }
            if(method === "put" || method === "patch") {
              return data;
            }
            if(method === "get") {
              var id = this.getInstanceIdFromUrl(options.url);
              return this.getInstance(model, id);
            }
          }

          if(scope) {
            var scopeDefinition = $helpers.find(model.scopes, function(query_scope) {
              return query_scope.name == scope;
            });
            if(scopeDefinition.type === "ObjectQueryScope") {
              return this.generateDataForObjectQueryScope(model);
            } else if(scopeDefinition.type === "AggregateQueryScope") {
              return this.generateDataForAggregateQueryScope(scopeDefinition.aggregateField);
            }
          }
        },

        /**
        Applies transformations to the fake response, simulating what the HttpClient would do.
        @method transformResponse
        @param {Object[]}/{Object} response the fake response generated by the MockServer
        @param {Function[]} transformations list of transfomations to apply to the response
        @returns transformed data (could be of any type depending on what the transformations do)
        */
        transformResponse: function(response, transformations) {
          var returnValue = response;
          if(angular.isObject(response) && angular.isArray(transformations)) {
            angular.forEach(transformations, function(transformation) {
              returnValue = transformation(returnValue);
            });
          }
          return returnValue;
        },

        /**
        Handles all responses for the MockServer. It decides if data should be mocked for a request, applies transformations,
        and creates a Promise to return as a result of the fake AJAX call. This promised is resolved immediately, so error callbacks
        added to the Promise will not be called.
        @method respondTo
        @param {String} method the HTTP verb for the request
        @param {Model} model the Model service being synced with the server
        @param {Object} options request options
        @returns {Promise}
        */
        respondTo: function(method, model, options) {
          var responseData, transformedResponse, promise;
          if(method !== "delete") {
            responseData = this.mockDataForRequest(method, model, options);
          }
          transformedResponse = this.transformResponse(responseData, options.responseTransformations);
          promise = $q(function(resolve, reject) {
            resolve({
              status: 200,
              data: transformedResponse,
              headers: options.headers,
              config: options,
              statusText: "OK"
            });
          });
          // we add a success method because Promises in angular don't have it and yet the ones returned
          // by $http add a success method as a convenience
          promise.success = function(fn) {
            promise.then(function(response) {
              fn(response.data, response.status, response.headers, response.config);
            });
            return promise;
          };
          // we add an error method because Promises in angular don't have it and yet the ones returned
          // by $http add an error method as a convenience
          promise.error = function(fn) {
            promise.catch(function(response) {
                fn(response.data, response.status, response.headers, response.config);
            });
            return promise;
          };

          return promise;
        },

        /**
        @method get
        @param {Model} model the Model service being synced with the server
        @param {Object} options request options
        @returns {Promise}
        */
        get: function(model, options) {
          return this.respondTo("get", model, options);
        },

        /**
        @method post
        @param {Model} model the Model service being synced with the server
        @param {Object} options request options
        @returns {Promise}
        */
        post: function(model, options) {
          return this.respondTo("post", model, options);
        },

        /**
        @method put
        @param {Model} model the Model service being synced with the server
        @param {Object} options request options
        @returns {Promise}
        */
        put: function(model, options) {
          return this.respondTo("put", model, options);
        },

        /**
        @method patch
        @param {Model} model the Model service being synced with the server
        @param {Object} options request options
        @returns {Promise}
        */
        patch: function(model, options) {
          return this.respondTo("patch", model, options);
        },

        /**
        @method delete
        @param {Model} model the Model service being synced with the server
        @param {Object} options request options
        @returns {Promise}
        */
        delete: function(model, options) {
          return this.respondTo("delete", model, options);
        }

      });


      return {
        /**
        Creates a MockServer instance
        @method create
        @returns {MockServer}
        */
        create: function() {
          return new MockServer();
        }
      }

    }]);

})(angular);
