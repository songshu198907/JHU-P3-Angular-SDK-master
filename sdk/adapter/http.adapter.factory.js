(function(angular) {

  /**
  Factory that creates http adapters. An http adapter works almost the same as a regular adapter, only it allows some extra features like value interpolation.
  Unlike a regular adapter, which delegates configurations like headers, params, etc to an http client instance, an http adapter handles those configurations
  manually. This is because most of the configuration values can have placeholders {{}} for interpolation, so the http adapter will first interpolate all the values,
  build the request object itself (instead of letting the http client do it) and send everything to the http client once its built.

  @module AP
  @submodule adapter
  @class $httpAdapterFactory
  */
  angular.module("AP.adapter")
    .factory("$httpAdapterFactory", ["$adapterFactory", "$convertions", function($adapterFactory, $convertions) {

      function create(options) {
        /**
        The http adapter does not have a class constructor it is quite simply a regular adapter with extra behaviour attached to it
        */
        var httpAdapter = $adapterFactory.create();

        angular.extend(httpAdapter, {

          /**
          @property config
          @type {Object} a configuration object for the http adapter. Its configurable values include things like base url, default headers and query string params, etc.
          */
          config: options,

          /**
          @property interpolationRegexp
          @type {RegExp} regular expression used to find the string "{{}}" within another string. This enables interpolation.
          */
          interpolationRegexp: /{{([^{}]*)}}/g,

          /**
          @method interpolate
          @param {String} the string to interpolate values into
          @param {Object} the interpolation context from which the interpolated values are taken from (i.e. str "{{myId}}" with context {myId: 1})
          @returns {String} a new string copied from "str" but with interpolated values into it
          */
          interpolate: function interpolate(str, context) {
              /**
               * Interpolate strings using {{}} notation
               */
              var resultStr = str.replace(this.interpolationRegexp, function(match, capture) {
                var trimmedCapture = capture.trim();
                var fields = trimmedCapture.split(".");
                var replacementValue = context;
                var field = undefined;
                if(fields && fields.length) {
                    for(var i= 0; i<fields.length; i++) {
                        if(replacementValue === undefined) {
                            break;
                        }
                        field = fields[i];
                        replacementValue = replacementValue[field];
                    }
                    return (replacementValue !== undefined) ? replacementValue : "";
                } else {
                    return "";
                }
              });
              return resultStr;
          },

          /**
          Takes the appropiate adapter configuration from a Model based on the name of an action passed as an argument. For example if we wanted the adapter
          configuration for the action "create" of the Model "Person" it would return that adapter configuration object. In the case of adapter configurations for
          query scopes, the method will first look for an action with the name given and if none is found by that name then it will attempt to find a query scope
          with that name.

          @method getConfiguration
          @param {Model} the model service from which the adapter configuration is taken
          @param {String} the name of the action within the model whose configuration
          @returns {Object} the adapter configuration from model for the given action
          */
          getConfiguration: function(model, action) {
            var config = undefined;
            if(model) {
              config = model.adapterConfigurations[action];
              if(!config) {
                config = model.adapterConfigurations.scopes[action];
              }
            }
            return config;
          },

          /**
          Helper method. It evaluates a string that contains a javascript object, for example the string "{id: 1, name: 'Sarah'}". Evaluating that string
          will basically create that object in memory, so the result of parsing the object above would be an object {id: 1, name: 'Sarah'}.
          This method is used to parse body payload templates in json format

          @method parseObject
          @param {String} the string to parse the object from
          @returns {Object} the result of parsing str
          */
          parseObject: function(str) {
            var result = null, parser = null, xmlDoc = null;
            if(str && typeof str === "string") {
              result = eval('('+str+')');
            }
            return result;
          },

          /**
          Creates an object with key value pairs where keys are the names of the headers to send in a request and values are the values of those headers.
          The resulting headers will be a union of the default headers set for the http adapter itself (those headers are taken from the http adapter's "config" property)
          and the headers in the adapter configuration for a specific model/action pair. Also values from the model's adapter configuration can override headers from
          the http adapter. For example, having an http adapter with this headers

          {
            "Adapter-Header-One": "foo",
            "Adapter-Header-Two": "bar"
          }

          and a model with the following adapter configuration for the "create" action

          {
            adapterConfigurations: {
              create: {
                headers: {
                  "Adpater-Header-Two": "Some-Other-Stuff",
                  "Custom-Header": "Hello"
                }
              }
            }
          }

          the resulting object will be

          {
            "Adapter-Header-One": "foo",
            "Adapter-Header-Two": "Some-Other-Stuff",
            "Custom-Header": "Hello"
          }

          Also, any and all headers, from the http adapter or the model's adapter configuration can have values with the "{{}}" placeholder

          @method buildHeaders
          @param {Object} an adapter configuration for some action on some Model (which adapter configuration in which Model is irrelevant)
          @param {Object} an object to act as interpolation context in the event that some header values require interpolated values
          @returns {Object} key/value pair object where keys are header names and values are the values for those headers
          */
          buildHeaders: function(config, context) {
            var headers = {}, iName, iValue, _this = this;
            if(this.config && this.config.headers) {
              angular.forEach(this.config.headers, function(value, name) {
                if(name && value) {
                  if(context) {
                    name = _this.interpolate(name, context);
                    value = _this.interpolate(value, context);
                  }
                  headers[name] = value;
                }
              });
            }
            if(config) {
              angular.forEach(config.headers, function(value, name) {
                if(name && value) {
                  if(context) {
                    name = _this.interpolate(name, context);
                    value = _this.interpolate(value, context);
                  }
                  headers[name] = value;
                }
              });
            }
            return headers;
          },

          /**
          Creates an Object where keys are query string parameters's name and their corresponding value. Like with headers the resulting Object will inlcude params
          from the http adapter's default params as well as params from the adapter configuration passed as an argument. The adapter configuration's params can override
          the default configuration in the http adapter. (See the example in "buildHeaders" as it works the same way).

          Params can have interpolation placeholders "{{}}" so values will be interpolated in

          @method buildParams
          @param {Object} an adapter configuration for some action on some Model (which adapter configuration in which Model is irrelevant)
          @param {Object} an object to act as interpolation context in the event that some header values require interpolated values
          @returns {Object} key/value pair object where keys are query string parameter names and values are the values for those parameters
          */
          buildParams: function(config, context) {
            var params = {}, iName, iValue, _this = this;
            if(this.config && this.config.params) {
              angular.forEach(this.config.params, function(value, name) {
                if(name && value) {
                  if(context) {
                    name = _this.interpolate(name, context);
                    value = _this.interpolate(value, context);
                  }
                  params[name] = value;
                }
              });
            }
            if(config && config.params) {
              angular.forEach(config.params, function(value, name) {
                if(name && value) {
                  if(context) {
                    name = _this.interpolate(name, context);
                    value = _this.interpolate(value, context);
                  }
                  params[name] = value;
                }
              });
            }
            return params;
          },

          /**
          Creates a full url from the url in the http adapter's config object and the incrementalPath taken from an adapter configuration passed
          as an argument. Also interpolates values into that full url if "{{}}" placeholders are present in the url.

          @method buildUrl
          @param {Object} an adapter configuration for some action on some Model (which adapter configuration in which Model is irrelevant)
          @param {Object} an object to act as interpolation context in the event that some header values require interpolated values
          @returns {String} the full url where the request will be sent to
          */
          buildUrl: function(config, context) {
            var url = "";
            if(this.config && this.config.url) {
              url += this.config.url;
            }
            if(config && config.incrementalPath) {
              url += config.incrementalPath;
            }
            if(context) {
              url = this.interpolate(url, context);
            }
            return url;
          },

          /**
          Creates an object to send as a request's data. The data object is created from the request field mappings defined in the adapter configuration
          passed as an argument. It also supports value interpolation in the mappings.
          This method is used whenever a body payload template is not specified for the adapter configuration argument.
          Request field mappings map the fields from the recieved context to another name.
          For example, given the following request field mappings:
            {
              id: "foo",
              name: "bar",
              age: "{{name}}"
            }
          And a context:
            {
              id: 1,
              name: "Helen",
              age: 30
            }
          It will yield the following data object to send in the request:
            {
              foo: 1,
              bar: "Helen",
              Helen: 30
            }
          If the format of the request is xml then that final object will be converted to an xml string with this structure
          The value if the field "objectNameMapping" is used as a top level node in this case
          Assuming an objectNameMapping = "person"

          <person>
            <foo>1</foo>
            <bar>Helen</bar>
            <Helen>30</Helen>
          </person>

          @method buildRequestMappings
          @param {Object} an adapter configuration for some action on some Model (which adapter configuration in which Model is irrelevant)
          @param {Object} an object to act as interpolation context in the event that some header values require interpolated values
          @returns {Object}/{String} the object to send as data within the request or an xml string version of that same object
          */
          buildRequestMappings: function(config, context) {
            var data = {}, mappedName, _this = this;
            if(config && config.requestFieldLevelMappings) {
              angular.forEach(config.requestFieldLevelMappings, function(mapping, name) {
                if(context) {
                  var interpolationResult = undefined;
                  interpolationResult = _this.interpolate(mapping, context);
                  if(interpolationResult && interpolationResult != "") {
                    mapping = interpolationResult;
                  }
                }
                data[mapping] = context[name];
              });
            }

            if(config.format === "xml") {
              data = $convertions.objectToXml(config.objectNameMapping, data);
            }

            return data;
          },

          /**
          Creates the data to send in a request out of a body payload template in the adapter configuration passed as a parameter.
          Unlike "buildRequestMappings" the structure of the resulting object is defined by the template itself and all that is done
          is interpolating values into that template.
          If the format of the request is json then once values are interpolated in the template string will be parsed into an actual
          object literal to send as data. If its xml then the returned data will be a string.

          @method buildBodyPayload
          @param {Object} an adapter configuration for some action on some Model (which adapter configuration in which Model is irrelevant)
          @param {Object} an object to act as interpolation context in the event that some header values require interpolated values
          @returns {Object}/{String} the object literal to send as data (json) or the xml string to send as data (xml)
          */
          buildBodyPayload: function(config, context) {
            var bodyPayload = null;
            if(config && config.bodyPayload && config.bodyPayload !== "") {
              bodyPayload = config.bodyPayload;
              if(context) {
                bodyPayload = this.interpolate(bodyPayload, context);
              }
              if(config.format === "json") {
                bodyPayload = this.parseObject(bodyPayload);
              }
            }
            return bodyPayload;
          },

          /**
          Creates the entire request configuration to pass to the {HttpClient} to be sent to the server. It builds the request headers, query string parameters,
          url, data and adds the appropiate content type header according to the format of the request. The created request is based on both the http adapter's
          config object and the adapter configuration passed as an argument.

          @method buildRequest
          @param {Object} an adapter configuration for some action on some Model (which adapter configuration in which Model is irrelevant)
          @param {Object} an object to act as interpolation context in the event that some header values require interpolated values
          @returns {Object} a request configuration object to pass to an {HttpClient}
          */
          buildRequest: function(config, context) {
            var request = {}, headers = {}, params = {}, data = {}, url, method;
            headers = this.buildHeaders(config, context);
            params = this.buildParams(config, context);
            url = this.buildUrl(config, context);
            method = config.httpVerb;
            if(method !== "GET") {
              if(config.bodyPayload && config.bodyPayload != "") {
                data = this.buildBodyPayload(config, context);
              } else {
                data = this.buildRequestMappings(config, context);
              }
            }
            switch(config.format) {
              case "xml":
                headers["Content-Type"] = "application/xml";
                break;
              case "form_encoded":
                headers["Content-Type"] = "application/x-www-form-urlencoded; charset=UTF-8";
                break;
              case "json":
              default:
                headers["Content-Type"] = "application/json";
                break;
            }
            request = {
              method: method,
              url: url,
              headers: headers,
              params: params,
              data: data
            }
            return request;
          },

          /**
          Evaluates an XPath or JSONPath expression on a response data object. Whether the path selector is XPath or JSONPath is infered from
          the format of the adapter configuration that is passed along with the response data.
          This feature requires external libraries (both included with the SDK):
            for JSON  -> jsonPath
            for XML   -> wicked-good-xpath

          @method getPathFromSelector
          @param {Object} an object holding some response data from the server
          @param {Object} an adapter configuration for some action on some Model (which adapter configuration in which Model is irrelevant)
          @returns {Array}/{XPathResult} An array of javascript objects which are the result of evaluating the expression (in the case of json) or an
                        {XPathResult} object (in case of xml)
          */
          getPathFromSelector: function(response, config) {
            var selectedPath = undefined, selector=undefined;
            if(response && config) {
              if(config.pathSelector === "") {
                if(config.format == "json") {
                  selector = "$..";
                } else if(config.format == "xml") {
                  selector = "/";
                }
              } else {
                selector = config.pathSelector;
              }
              if(config.format === "xml") {
                //evaluate XPath expression
                //document.evaluate must be available for this kind of expressions (for Internet Explorer you need to use wicked-good-xpath)
                if(document.evaluate) {
                  selectedPath = document.evaluate(selector, response);
                }
              } else if(config.format === "json") {
                //evaluate JSONPath expression
                if(window.jsonPath) {
                  selectedPath = jsonPath(response, selector);
                }
              }
            }
            return selectedPath;
          },

          /**
          Analogous to "buildRequestMappings" but used to map the values recieved from a response into the fields of a context.
          The response mappings do NOT allow interpolation on the mapping name, however you can set an XPath or JSONPath expression
          as a mapping so you can select any fragment of the response to map to a field.
          In the case of an XML response, and response field mappings with XPath expressions, the result of evaluating the XPath expression
          is not a text node, the value of the mapped field will be a string representation of the node structure.
          For example:

            If the response is:

            <person>
              <name>John</name>
              <description>
                <short>A short version of the description</short>
                <large>
                  A much larger description going in depth...
                </large>
              </description>
            </person>

            and the following response mappings:

            {
              name: "/person/name/text()",
              description: "/person/description"
            }

            The resulting object will be:

            {
              name: "John",
              description: "<short>A short version of the description</short><large>A much larger description going in depth...</large>"
            }

            The selected response passed as a first argument is the result of evaluating the pathSelector in the adapter configuration
            on the full response from the server.
            There are two levels of expression evaluation:
              1) The pathSelector, specified in the adapter configuration, is evaluated on the actual response from the server and
                  returns just a fragment/s of the entire response
              2) Out of that fragment/s gotten from the first evaluation, if any response field mappings have expressions as mappings, then that
                  expression is evaluated on the fragment/s of the response not the entire response (unless the fragment is equal to the entire response)


            @method mapResponse
            @param {Object} the selected response after evaluating the "pathSelector" on the entire response
            @param {Object} an adapter configuration for some action on some Model (which adapter configuration in which Model is irrelevant)
            @returns {Object} data to use in a Model instance or {Resource} object
          */
          mapResponse: function(selectedResponse, config) {
            var mapped = {}, _this = this;
            if(selectedResponse && config && config.responseFieldLevelMappings) {
              angular.forEach(config.responseFieldLevelMappings, function(mappingValue, mappingName) {
                var mappedExpression = mappingValue;
                var selectedResponseFirstElement = undefined;
                // IF XML...
                if(config.format === "xml" && document.evaluate) {
                  if(selectedResponse) {
                    mappedExpression = (document.evaluate(mappedExpression, selectedResponse)).iterateNext();
                  }
                  // If the response is an xml node then covert it to a string
                  if(mappedExpression) {
                    mappedExpression = $convertions.xmlToString(mappedExpression);
                  }
                }
                // IF JSON
                else if(config.format === "json" && window.jsonPath) {
                  mappedExpression = jsonPath(selectedResponse, mappedExpression);
                  if(mappedExpression && mappedExpression instanceof Array) {
                    mappedExpression = mappedExpression[0];
                  }
                }
                mapped[mappingName] = mappedExpression;
              });
            }
            return mapped;
          },

          /**
          Handles the response for single element actions (i.e. create, update, etc).
          It evaluates the "pathSelector" from the adapter configuration passed as an argument on the response passed as an argument.
          The result from the evaluation is used as a selected response in "mapResponse".
          It will return the mapped data for that single element.

          @method handleResponse
          @param {Object} the response data coming from the server
          @param {Object} an adapter configuration for some action on some Model (which adapter configuration in which Model is irrelevant)
          @returns {Object} the mapped data for a {Resource} instance
          */
          handleResponse: function(response, config) {
            var selectedPath = undefined, mapped = undefined;
            if(config.format === "xml") {
              response = $convertions.parseXml(response);
              selectedPath = this.getPathFromSelector(response, config);
              if(selectedPath) {
                var element = selectedPath.iterateNext();
                mapped = this.mapResponse(element, config);
              }
            } else {
              selectedPath = this.getPathFromSelector(response, config);
              mapped = this.mapResponse(selectedPath[0], config);
            }
            return mapped;
          },

          /**
          Handles the response for query scopes.
          It evaluates the "pathSelector" from the adapter configuration passed as an argument on the response passed as an argument.
          The result of that evaluation should be a collection. That collection will be iterated over and for each element "mapResponse"
          will be called using that item in the collection as the selected response.
          It will return a collection of mapped data.

          @method handleQueryResponse
          @param {Object} the response data coming from the server
          @param {Object} an adapter configuration for some action on some Model (which adapter configuration in which Model is irrelevant)
          @returns {Array} collection of mapped data
          */
          handleQueryResponse: function(response, config) {
            var selectedPath, mappedCollection = [];
            if(config.format === "xml") {
              response = $convertions.parseXml(response);
              selectedPath = this.getPathFromSelector(response, config);
              if(selectedPath) {
                var _this = this;
                var element = selectedPath.iterateNext();
                while(element) {
                  mappedCollection.push(_this.mapResponse(element, config));
                  element = selectedPath.iterateNext();
                }
              }
            } else {
              selectedPath = this.getPathFromSelector(response, config);
              if(selectedPath) {
                var _this = this;
                angular.forEach(selectedPath, function(element) {
                  mappedCollection.push(_this.mapResponse(element, config));
                });
              }
            }
            return mappedCollection;
          },


          /**
          Handles the create action of a Model

          @method create
          @param {Model} the model from where the adapter configuration for the "create" action will be taken
          @param {Object} the data to send to the server for creation
          @param {Object} the interpolation context to use to build the request
          @returns {Promise} the promise returned by the adapter's ajax method
          */
          create: function(model, data, context) {
            context = context || {};
            var config = this.getConfiguration(model, "create");
            var options = this.buildRequest(config, context);
            angular.extend(options, {
              responseTransformations: [
                angular.bind(this, function(response) {
                  if(response) {
                    return this.handleResponse(response, config, context);
                  }
                }),
                function(response) {
                  if(response instanceof Object) {
                    angular.extend(data, response);
                  }
                }
              ]
            });
            method = options.method.toLowerCase();
            return this.ajax(method, model, options);
          },

          /**
          Handles the update action of a Model

          @method update
          @param {Model} the model from where the adapter configuration for the "update" action will be taken
          @param {Object} the data to send to the server for updating
          @param {Object} the interpolation context to use to build the request
          @returns {Promise} the promise returned by the adapter's ajax method
          */
          update: function(model, data, context) {
            context = context || {};
            var config = this.getConfiguration(model, "update");
            var options = this.buildRequest(config, context);
            angular.extend(options, {
              responseTransformations: [
                angular.bind(this, function(response) {
                  if(response) {
                    return this.handleResponse(response, config, context);
                  }
                }),
                function(response) {
                  if(response instanceof Object) {
                    angular.extend(data, response);
                  }
                }
              ]
            });
            method = options.method.toLowerCase();
            return this.ajax(method, model, options);
          },

          /**
          Handles the read action of a Model

          @method read
          @param {Model} the model from where the adapter configuration for the "read" action will be taken
          @param {Object} the interpolation context to use to build the request
          @returns {Promise} the promise returned by the adapter's ajax method
          */
          read: function(model, context) {
            context = context || {};
            var config = this.getConfiguration(model, "read");
            var options = this.buildRequest(config, context);
            angular.extend(options, {
              responseTransformations: [
                angular.bind(this, function(response) {
                  if(response) {
                    return this.handleResponse(response, config, context);
                  }
                }),
                angular.bind(model, model.createResource)
              ]
            });
            method = options.method.toLowerCase();
            return this.ajax(method, model, options);
          },

          /**
          Handles the delete action of a Model

          @method delete
          @param {Model} the model from where the adapter configuration for the "delete" action will be taken
          @param {Object} the interpolation context to use to build the request
          @returns {Promise} the promise returned by the adapter's ajax method
          */
          delete: function(model, context) {
            context = context || {};
            var config = this.getConfiguration(model, "delete");
            var options = this.buildRequest(config, context);
            angular.extend(options, {
              responseTransformations: [angular.bind(this, function(response) {
                if(response) {
                  return this.handleResponse(response, config, context);
                }
              })]
            });
            method = options.method.toLowerCase();
            return this.ajax(method, model, options);
          },

          /**
          Handles the query scopes for a Model

          @method query
          @param {Model} the model from where the adapter configuration for the appropiate query scope will be taken
          @param {String} the name of the query scope being executed
          @param {Object} the interpolation context to use to build the request
          @param {Function} callback to be run if the request is successful
          @param {Function} callback to be run if there is an error
          @returns {Array} an empty array that will be populated when the response comes from the server
          */
          query: function(model, scope, context, success, error) {
            context = context || {};
            var config = this.getConfiguration(model, scope);
            var options = this.buildRequest(config, context);
            var resource = [];
            angular.extend(options, {
              success: success,
              error: error,
              responseTransformations: [
                angular.bind(this, function(response) {
                  if(response) {
                    return this.handleQueryResponse(response, config);
                  }
                }),
                angular.bind(model, model.createCollection),
                function(data) {
                  if(angular.isArray(data)) {
                    Array.prototype.push.apply(resource, data);
                  }
                  return data;
                }
              ]
            });
            method = options.method.toLowerCase();
            this.ajax(method, model, options);
            return resource;
          },

        });

        return httpAdapter;
      }

      return {
        create: create
      }

    }]);

})(angular);
