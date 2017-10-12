(function(angular) {

  /**
   * Manages multiple authentication strategies and the common tasks among all strategies.
   * @module AP
   * @submodule authentication
   * @class $authenticationManagerFactory
   */
  angular.module("AP.authentication")
    .factory("$authenticationManagerFactory", ['$rootScope', '$authenticationStorageService', '$authenticationFactory', function($rootScope, $authenticationStorageService, $authenticationFactory)  {

      /**
       * AuthenticationManager constructor
       * @class AuthenticationManager
       * @constructor
       * @param {Dispatcher} dispatcher the dispatcher used by the SDK
       */
      function AuthenticationManager(dispatcher) {
        this.$dispatcher = dispatcher;
      }

      /**
       * Returns the base url
       * @method url
       * @returns {String} the base url string for the SDK
       */
      AuthenticationManager.prototype.url = function() {
        return this.$dispatcher.adapter().$restClient.url;
      };

      /**
       * Convenience method to get a strategy by name
       * @method strategy
       * @param {String} the name of the strategy to get
       * @returns {Authentication} the authentication strategy
       */
      AuthenticationManager.prototype.strategy = function(name) {
        return this[name];
      };

      /**
       * Adds a new strategy to be handled by the manager
       * @method addStrategy
       * @param {Object} options to construct the strategy
       */
      AuthenticationManager.prototype.addStrategy = function(options) {
        this[options.strategyName] = $authenticationFactory.create(this, options);
      };

      /**
       * Sets the X-Session-Id header in the default HttpClient
       * @method setSessionAsHeader
       * @param {Object} the session returned as response from authenticating
       */
      AuthenticationManager.prototype.setSessionAsHeader = function(session) {
        this.$dispatcher.adapter().$restClient.headers['X-Session-Id'] = session.xSessionId;
      };

      /**
       * Removes the X-Session-Id header in the default HttpClient
       * @method removeSessionAsHeader
       */
      AuthenticationManager.prototype.removeSessionAsHeader = function() {
        delete this.$dispatcher.adapter().$restClient.headers['X-Session-Id'];
      };

      /**
       * Called by the different strategies after getting the response from authenticating.
       * @method setSession
       * @param {Object} the session returned as response from authenticating
       */
      AuthenticationManager.prototype.setSession = function(session) {
        $authenticationStorageService.saveSession(this.url(), session);
        this.setSessionAsHeader(session);
        this.$dispatcher.adapter().$restClient.user = session.username;
        /**
        @event 'auth:authenticated'
        An authenticated event is emitted after a successful login.
        */
        $rootScope.$emit('auth:authenticated');
      };

      /**
       * Called by the different strategies after deauthenticating
       * @method destroySession
       */
      AuthenticationManager.prototype.destroySession = function() {
        $authenticationStorageService.deleteSession(this.url());
        this.removeSessionAsHeader();
        this.$dispatcher.adapter().$restClient.user = undefined;
        /**
        @event auth:deauthenticated
        A deauthenticated event is emitted after the session is destroyed.
        */
        $rootScope.$emit('auth:deauthenticated');
      };

      /**
       * Convenience method for users to retrieve session data
       * @method getSession
       * @returns {Object} the session object stored by authentication storage
       */
      AuthenticationManager.prototype.getSession = function() {
        return $authenticationStorageService.getSession(this.url());
      };

      /**
       * Restores a session from authentication storage. This is used when changing the base url for the SDK, as authentication data might be already
       * stored for the new url
       * @method restoreSession
       */
      AuthenticationManager.prototype.restoreSession = function() {
        var session = $authenticationStorageService.getSession(this.url());
        if(session) {
          this.setSessionAsHeader(session);
          this.$dispatcher.adapter().$restClient.user = session.username;
        }
      };

      /**
       * Returns whether the user is authenticated
       * @method isAuthenticated
       * @returns {Boolean}
       */
      AuthenticationManager.prototype.isAuthenticated = function() {
        return !!$authenticationStorageService.getSession(this.url());
      };

      return {
        create: function(dispatcher) {
          return new AuthenticationManager(dispatcher);
        }
      };


    }]);

})(angular);
