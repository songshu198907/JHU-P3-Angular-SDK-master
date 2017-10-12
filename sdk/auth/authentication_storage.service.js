(function(angular) {

  /**
   * Handles storing, retrieving and deleting authentication info using the localStorage API. Also handles expiration of stored data.
   * @module AP
   * @submodule authentication
   * @class $authenticationStorageService
   */
  angular.module("AP.authentication")
    .service("$authenticationStorageService", ['$localStorage', '$timestamps', function($localStorage, $timestamps) {

      // Initialize the "auth" section of the local storage if non existent
      if(!$localStorage["auth"]) {
        $localStorage["auth"] = {};
      }

      /**
       * Object in localStorage dedicated to authentication data
       * @property store
       * @type Object
       */
      this.store = $localStorage["auth"];

      /**
       * Gets the localStorage key used to store the authentication data.
       * @method key
       * @param {String} The base url for the SDK
       * @returns {String} string key composed from the base url
       */
      this.key = function(url) {
        return (typeof url === "string" && url !== "") ? 'session-' + url.replace(/[^a-zA-Z\-0-9]/g, '') : undefined;
      };

      /**
       * @method isValidSession
       * @param {Object} the response data returned by the api after authenticating
       * @returns {Boolean} whether the session is valid
       */
      this.isValidSession = function(session) {
        if(typeof session === "object" && session.timestamp && session.data) {
          return $timestamps.isValid($timestamps.fromISOString(session.timestamp));
        }
        return false;
      }

      /**
       * Saves the session into localStorage
       * @method saveSession
       * @param {String} the base url for the SDK
       * @param {Object} the response data returned by the api after authenticating
       * @returns {Boolean} true if success, false otherwise
       */
      this.saveSession = function(url, session) {
        var key = this.key(url);
        if(key) {
          this.store[key] = JSON.stringify({
            data: session,
            timestamp: $timestamps.timestamp()
          });
          return true;
        }
        return false;
      };

      /**
       * Gets the session from localStorage
       * @method getSession
       * @param {String} the base url for the SDK
       * @returns {Object} the stored session
       */
      this.getSession = function(url) {
        var key = this.key(url), session = undefined;
        if(key) {
          session = this.store[key];
          if(session) {
            session = JSON.parse(session);
            if(this.isValidSession(session)) {
              return session.data;
            } else {
              this.deleteSession(url);
            }
          }
        }
        return undefined;
      };

      /**
       * Deletes the session in localStorage
       * @method deleteSession
       * @param {String} the base url for the SDK
       */
      this.deleteSession = function(url) {
        var key = this.key(url);
        if(key) {
          delete this.store[key];
        }
      }

    }]);

})(angular);
