(function(angular) {

  /**
  Factory that creates http clients. This clients act as wrappers for angular's $http service.
  This allows configurations to be set for http calls but within a closed environment,
  thus not polluting the global http connection with defaults.

  @module AP
  @submodule adapter
  @class $httpClientFactory
  */
  angular.module("AP.adapter")
    .factory("$httpClientFactory", ["$http", "$q", "$cache", "$helpers", function($http, $q, $cache, $helpers) {

      /**
      Constructor for HttpClient instances
      @class HttpClient
      @constructor
      @param {Object} options configuration options for HttpClient constructor
      */
      function HttpClient(options) {
        var url = options.url || "",
            params = options.params || {},
            headers = angular.extend({}, options.headers),
            data = (typeof options.data == "object") ? angular.extend({}, options.data) : options.data,
            success = options.success || [],
            error = options.error || [],
            withCredentials = !!options.withCredentials,
            requestTransformations = options.requestTransformations,
            responseTransformations = options.responseTransformations,
            interceptors = options.interceptors || [];

        /**
        @property useOfflineCache
        @type {Boolean}
        */
        this.useOfflineCache = false;
        /**
        @property user
        @type {String} the username of the currently logged in user (if there is a user logged in)
        */
        this.user = "";
        /**
        @property url
        @type {String} url route
        */
        this.url = url;
        /**
        @property headers
        @type {Object} key-value pairs where "key" is the header name and "value" is the header value
        */
        this.headers = headers;
        /**
        @property params
        @type {Object} key-value pairs for query string parameters
        */
        this.params = params;
        /**
        @property data
        @type {Object} key-value pairs for data to send inside the request body (not applicable when executing GET requests)
        */
        this.data = data;
        /**
        @property onSuccess
        @type {Function} callback to apply when a request returns successfully from the server
        */
        this.onSuccess = success;
        /**
        @property onError
        @type {Function} callback function to apply when there is an error after sending a request to the server
        */
        this.onError = error;
        /**
        @property withCredentials
        @type {Boolean} specifies whether the request to send is a cross-domain kind of request
        */
        this.withCredentials = withCredentials;
        /**
        Request transformations are executed after the request is built and before it is sent to the server
        This array contains Function objects which execute in order and the return value of each function is passed
        to the next one in the Array. The first transformation recieves the request data. If a Function returns a value then this
        value is passed to the next in the chain, if no value is returned then the object being passed along the chain passed to the next
        Function as it was recieved by the former. Query string params can't be altered by this transformations, only payload data.
        @property requestTransformations
        @type {Function[]} array of transformations to apply to the request data before sending it to the server
        */
        this.requestTransformations = requestTransformations;
        /**
        Response transformations are executed after the response comes back from the server and before the success or error
        callbacks are executed. This array contains Functions that execute in order and the return value of each one of these is passed
        on to the next in the chain. The first Function on the array recieves the response from the server. If a Function returns
        no value then the object being passed is not altered, and it is passed to the next Function as an argument.
        @property responseTransformations
        @type {Function[]} array of transformations to apply to the response data after it comes back from the server and before the success or error callbacks are executed
        */
        this.responseTransformations = responseTransformations;
        /**
        Request interceptor chain to modify a request object before sending it to the server
        @property requestInterceptors
        @type Array
        */
        this.requestInterceptors = interceptors;
      }

      /**
      Creates the Object that is passed to angular's $http service. This resulting Object will contain the default $http configuration,
      overriden by the HttpClient's configuration properties, and then also overriden by any additional configuration passed as arguments to
      this Function.

      For example:

      If
      ```
      $http.defaults.headers = { "Foo": "Bar" }
      ```
      And
      ```
      this.headers = { "Foo2": "Bar2" }
      ```
      And
      ```
      headers (Function argument) =
      {
        "Foo": "NotBar",
        "Foo3": "Bar3"
      }
      ```
      The resulting Object will contain
      ```
      {
        headers: {
          "Foo": "NotBar",
          "Foo2": "Bar2",
          "Foo3": "Bar3"
        }
      }
      ```

      Also the request and response transformations will each be the union of the default transformations,
      the HttpClient's transformations and any transformations passed as arguments.
      The urls will also be concatenated using the same hierarchy.

      @method buildRequest
      @param {String} method http verb to use
      @param {String} url url to append to the HttpClient's url
      @param {Object} params query string parameters to send with this request
      @param {Object} headers headers to send with this request
      @param {Object} data payload data to send with this request (not used for GET requests)
      @param {Function} success success callback to execute after this request comes back from the server
      @param {Function} error error callback to execute after this request comes back from the server
      @param {Boolean} withCredentials whether the request should be cross-domain or not
      @param {Function[]} requestTransformations array of transformations to apply to this request
      @param {Function[]} responseTransformations array of transformations to apply to the response of this request
      @returns {Object} the request to pass to angular's $http service
      */
      HttpClient.prototype.buildRequest = function(method, url, params, headers, data, success, error, withCredentials, requestTransformations, responseTransformations) {
        var finalMethod = method || "GET",
            fullUrl = this.url + url,
            allParams = angular.extend({}, this.params, params),
            allHeaders = angular.extend({}, this.headers, headers),
            allData = angular.extend({}, this.data, data),
            allSuccess = [],
            allError = [],
            finalWithCredentials = (withCredentials != undefined) ? withCredentials : this.withCredentials,
            allRequestTransformations = [],
            allResponseTransformations = [],
            allRequestInterceptors = [];

        if(typeof data == "string") {
          allData = data;
        } else if(typeof this.data == "string"){
          allData = this.data;
        }

        Array.prototype.push.apply(allSuccess, this.success);
        Array.prototype.push.apply(allError, this.error);

        if(angular.isArray(success)) {
          Array.prototype.push.apply(allSuccess, success);
        } else if(angular.isFunction(success)) {
          allSuccess.push(success);
        }

        if(angular.isArray(error)) {
          Array.prototype.push.apply(allError, error);
        } else if(angular.isFunction(error)) {
          allError.push(error);
        }

        Array.prototype.push.apply(allRequestTransformations, this.requestTransformations);
        Array.prototype.push.apply(allResponseTransformations, this.responseTransformations);

        if(angular.isArray(requestTransformations)) {
          Array.prototype.push.apply(allRequestTransformations, requestTransformations);
        }
        if(angular.isArray(responseTransformations)) {
          Array.prototype.push.apply(allResponseTransformations, responseTransformations);
        }

        return {
          method: finalMethod,
          url: fullUrl,
          params: allParams,
          headers: allHeaders,
          data: JSON.stringify(allData),
          success: allSuccess,
          error: allError,
          withCredentials: finalWithCredentials,
          transformRequest: allRequestTransformations,
          transformResponse: allResponseTransformations
        }
      };

      /**
      Applies success and error callbacks to a promise returned by angular's $http service
      @method applyCallbacks
      @param {Promise} promise promise Object obtained as a result of calling $http
      @param {Function[]} successCallbacks Array of success callbacks to apply in order to promise
      @param {Function[]} errorCallbacks Array of error callbacks to apply in order to promise
      @returns {Promise} the same promise passed as an argument but with all callbacks subscribed
      */
      HttpClient.prototype.applyCallbacks = function(promise, successCallbacks, errorCallbacks) {
        if(successCallbacks && angular.isArray(successCallbacks) && promise && promise.then) {
          angular.forEach(successCallbacks, function(success) {
            if(success && angular.isFunction(success)) {
              promise.then(function(response) {
                if(response) {
                  (response.data) ? success(response.data) : success(response);
                }
              });
            }
          });
        }
        if(errorCallbacks && angular.isArray(errorCallbacks) && promise && promise.catch) {
          angular.forEach(errorCallbacks, function(error) {
            if(error && angular.isFunction(error)) {
              promise.catch(error);
            }
          });
        }
        return promise;
      };

      /**
      Execute the HTTP request by calling angular's $http service. If offline caching is enabled it will "fake" a response from the
      $http service and return the data from the cache (if there is data available for that request). If the data hasn't been cached
      then it will make the request to the server and cache the response for later
      @method send
      @param {Object} req Object representing the configuration of the request to make
      @returns {Promise} returns the same promise returned by $http but with all success and error callbacks subscribed to it
      */
      HttpClient.prototype.send = function(req) {
        var _req = req || {}, request, dataKey = [this.user, req.url, $helpers.getQueryString(req.params)], data = undefined;
        if(this.useOfflineCache) {
          data = $cache.store(dataKey);
        }

        if(data) {
          if(req.transformResponse && angular.isArray(req.transformResponse)) {
            angular.forEach(req.transformResponse, function(transform) {
              data = transform(data);
            });
          }
          request = $q(function(resolve, reject) {
            resolve(data);
          });
        } else {
          //Setup a response transformation to cache the response
          request = $http(_req);
          if(_req.method === "GET") {
            request.then(function(response) {
              $cache.store(dataKey, data);
            });
          }
        }

        return this.applyCallbacks(request, _req.success, _req.error);
      };


      /**
      Runs a chain of {Function} sending them the request object as an argument so they can mutate it, where every
      function in the chain gets the result of the previous function.
      @method interceptRequest
      @param {Object} the request configuration object, which is passed to the first function in the chain
      @param {Array} chain of {Function} objects to execute
      @returns {Object} the result of running the entire chain
      */
      HttpClient.prototype.interceptRequest = function(request, requestInterceptors) {
        var _request = request;
        angular.forEach(requestInterceptors, function(interceptor) {
          _request = interceptor(_request);
        });
        return _request;
      };

      /**
      Sends an AJAX request. Builds the request, sends it and returns a promise.
      @method ajax
      @param {Object} options configuration Object similar to what is passed to the $http service
      @returns {Promise}
      */
      HttpClient.prototype.ajax = function(options) {
        var opts = options || {},
            method = opts.method,
            url = opts.url,
            params = opts.params,
            headers = opts.headers,
            data = opts.data,
            success = opts.success,
            error = opts.error,
            before = opts.before,
            withCredentials = opts.withCredentials,
            requestTransformations = opts.requestTransformations,
            responseTransformations = opts.responseTransformations,
            requestInterceptors = opts.requestInterceptors;

        var request = this.buildRequest(method, url, params, headers, data, success, error, withCredentials, requestTransformations, responseTransformations);
        request = this.interceptRequest(request, requestInterceptors);

        return this.send(request);
      };

      /**
      Execute a GET request
      @method get
      @param {Object} options options to configure the request to make
      @returns {Promise}
      */
      HttpClient.prototype.get = function(options) {
        var opts = angular.extend({}, options, { method: "GET" });
        return this.ajax(opts);
      };

      /**
      Execute a POST request
      @method post
      @param {Object} options options to configure the request to make
      @returns {Promise}
      */
      HttpClient.prototype.post = function(options) {
        var opts = angular.extend({}, options, { method: "POST" });
        return this.ajax(opts);
      };

      /**
      Execute a PUT request
      @method put
      @param {Object} options options to configure the request to make
      @returns {Promise}
      */
      HttpClient.prototype.put = function(options) {
        var opts = angular.extend({}, options, { method: "PUT" });
        return this.ajax(opts);
      };

      /**
      Execute a PATCH request
      @method patch
      @param {Object} options options to configure the request to make
      @returns {Promise}
      */
      HttpClient.prototype.patch = function(options) {
        var opts = angular.extend({}, options, { method: "PATCH" });
        return this.ajax(opts);
      };

      /**
      Execute a DELETE request
      @method delete
      @param {Object} options options to configure the request to make
      @returns {Promise}
      */
      HttpClient.prototype.delete = function(options) {
        var opts = angular.extend({}, options, { method: "DELETE" });
        return this.ajax(opts);
      };

      return {
        /**
        Creates an instance of {HttpClient} given a configuration Object
        @method create
        @param {Object} options configuration options for creating a new HttpClient
        @returns {HttpClient}
        */
        create: function(options) {
          return new HttpClient(options);
        }
      }

    }]);

})(angular);
