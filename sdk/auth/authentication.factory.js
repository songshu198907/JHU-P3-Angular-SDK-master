(function(angular)  {

  /**
   * Provides methods for user authentication and deauthentication.
   *
   * To login:
   * ```
   * ApplicationDefinitionNameSdk.login({
   *   username: "johndoe",
   *   password: "doe123"
   * });
   *
   * ApplicationDefinitionNameSdk.isAuthenticated();
   * // true
   * ```
   *
   * To logout:
   * ```
   * ApplicationDefinitionNameSdk.logout();
   *
   * ApplicationDefinitionNameSdk.isAuthenticated();
   * // false
   * ```
   *
   * @module AP
   * @submodule authentication
   * @class $authenticationFactory
   */

  angular.module("AP.authentication")
    .factory("$authenticationFactory", ['$rootScope', '$q', function($rootScope, $q)  {

      /**
      Authentication Constructor
      @class Authentication
      @constructor
      @param {AuthenticationManager} authentication strategies coordinator and manager
      */
      function Authentication(manager, options) {


        this.manager = manager;

        /**
        Stores details about authentication and authorization.
        @property settings
        @type Object
       */
        this.settings = {

          /**
          The type of the authentication strategy
          @property settings.strategyType
          @type String
          */
          strategyType: options.strategyType,

          /**
          The name of the authentication strategy
          @property settings.strategyName
          @type String
          */
          strategyName: options.strategyName,

          /**
          The name of the field to match for authentication.  Only one value is used
          at this time:  `password`.
          @property settings.matchField
          @type String
           */
          matchField: options.matchField || "password",

          /**
          The name of the field used to find a user.  For example:  `username`.
          @property settings.lookupField
          @type String
          */
          lookupField: options.lookupField || "username",

          /**
          The name of the field on the object returned after authenticating that
          stores user roles.  The role field is used by `AP.auth.Authorization`.
          @property settings.roleField
          @type String
          */
          roleField: options.roleField || "role",

          /**
          The URL of the API endpoint to authenticate
          @property settings.authentication_url
          @type String
          */
          authentication_url: "/auth/" + options.strategyName + "/callback",

          /**
          URL of logout API endpoint.  Logout requests must be made to this URL.
          @property settings.deauthentication_url
          @type String
          */
          deauthentication_url: "/auth/signout"

        };
      }

      /**
      Gets the Adapter for the API to which this Auth Object belongs to
      NOTE: For now all Auth Objects belong to an AP backend
      @method client
      @returns {Adapter}
      */
      Authentication.prototype.client = function()  {
        return this.manager.$dispatcher.adapter().$restClient;
      };

      /**
      Executes login request with passed `credentials`.
      @method login
      @static
      @param {Object} credentials the credentials for the user attempting to login
      @returns {Promise}
       */
      Authentication.prototype.login = function(credentials)  {
        if (!this.isAuthenticated())  {
          return this.authenticate(credentials);
        } else {
          return $q.resolve(undefined);
        }
      };

      /**
      Executes logout request.
      @method logout
      @static
      @returns {Promise}
       */
      Authentication.prototype.logout = function() {
        if (this.isAuthenticated()) {
          return this.deauthenticate();
        } else {
          return $q.resolve(undefined);
        }
      };

      /**
      @method isAuthenticated
      @static
      @return {Boolean} `true` if a user is logged-in
      */
      Authentication.prototype.isAuthenticated = function() {
        return !!(this.manager.isAuthenticated());
      };

      /**
      Performs authentication request with HTTP basic auth.  Upon a successful
      login the user object returned by the API is stored for later use.
      @method authenticate
      @static
      @param {Object} credentials user credentials object, for example:
      ```{"username": "johndoe", "password": "doe123"}```.
      */
      Authentication.prototype.authenticate = function(credentials) {
        return this.client().post({
          url: this.settings.authentication_url,
          data:  credentials
        }).then(angular.bind(this, function(response)  {
          if(response) {
            this.manager.setSession(JSON.parse(response.data));
          } else {
            /**
            @event 'auth:error'
            An auth error event is emitted if a login or logout fails for
            any reason.
            */
            $rootScope.$emit('auth:error');
          }
        }))
        .catch(function(response) {
          /**
          @event 'auth:error'
          An auth error event is emitted if a login or logout fails for
          any reason.
          */
          $rootScope.$emit('auth:error');
        });

      };

      /**
      Performs deauthentication request.  Upon a successful logout, stored user data
      is removed.
      @method deauthenticate
      @static
      */
      Authentication.prototype.deauthenticate = function() {
        return this.client().post({
          url: this.settings.deauthentication_url
        }).then(angular.bind(this, function(response)  {
          this.manager.destroySession();
        }));
      };

      /**
      Returns the lookup field value (username) of the currently logged-in user.
      @method getUsername
      @static
      @return {Object/null} the authenticated user's lookup field value (username)
      */
      Authentication.prototype.getUsername = function() {
        var credentials = this.manager.getSession();
        return (typeof credentials === "object" && this.settings.lookupField) ? credentials[this.settings.lookupField] : undefined;
      };

      /**
      Returns the role(s) of the currently logged-in user.
      @method getUserRole
      @static
      @return {Object/null} the authenticated user's role(s)
      */
      Authentication.prototype.getUserRole = function() {
        var credentials = this.manager.getSession();
        return (typeof credentials === "object" && this.settings.lookupField) ? credentials[this.settings.roleField] : undefined;
      };



      return {
        create: function(manager, options) {
          return new Authentication(manager, options);
        }
      };

    }]);

})(angular);
