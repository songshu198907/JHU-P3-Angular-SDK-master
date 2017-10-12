(function(angular) {

  /**
  Configuration service for VaccineSurveySdk
  @module VaccineSurveySdk
  @submodule config
  */
  angular.module("VaccineSurveySdk.config")
    .service("$vaccineSurveySdkConfig",
      [
        "$vaccineSurveySdkDispatcher",
        "$vaccineSurveySdkAuthentication",
        function($vaccineSurveySdkDispatcher, $vaccineSurveySdkAuthentication) {

          /******************************************************************
          *                     BASE URL SETTINGS
          ******************************************************************/
          function UrlManager() {}
          UrlManager.prototype.set = function(url) {
            $vaccineSurveySdkDispatcher.default.setBaseUrl(url);
            // After the url has been set restore the session data
            $vaccineSurveySdkAuthentication.restoreSession();
            //$vaccineSurveySdkAuthentication.setupSessionData();
            return this;
          };
          UrlManager.prototype.get = function() {
            return $vaccineSurveySdkDispatcher.default.baseUrl;
          };

          /**
          @property baseUrl
          @type {UrlManager}
          */
          this.baseUrl = new UrlManager();



          /****************************************************************
          *                     MOCK SERVER SETTINGS
          ****************************************************************/
          function MockServerManager() {}
          MockServerManager.prototype.enable = function() {
            $vaccineSurveySdkDispatcher.default.useMockServer = true;
            return this;
          };
          MockServerManager.prototype.disable = function() {
            $vaccineSurveySdkDispatcher.default.useMockServer = false;
            return this;
          };

          /**
          @property mockServer
          @type {MockServerManager}
          */
          this.mockServer = new MockServerManager();


          /****************************************************************
          *                     OFFLINE CACHE SETTINGS
          ****************************************************************/
          function OfflineCacheManager() {}
          OfflineCacheManager.prototype.enable = function() {
            $vaccineSurveySdkDispatcher.default.$restClient.useOfflineCache = true;
            return this;
          };
          OfflineCacheManager.prototype.disable = function() {
            $vaccineSurveySdkDispatcher.default.$restClient.useOfflineCache = false;
            return this;
          };

          /**
          @property offlineCache
          @type {OfflineCacheManager}
          */
          this.offlineCache = new OfflineCacheManager();


          /****************************************************************
          *                       AJAX SETTINGS
          ****************************************************************/

          /**
           * @method ajaxSettings
           * @param {object} options - http configuration options
           * @returns {HttpClient}
           */
          this.ajaxSettings = function(options) {
            var httpClient = $vaccineSurveySdkDispatcher.adapter().$restClient;
            if(options && typeof options === "object") {
              var validOptions = {
                headers: true,
                params: true,
                data: true,
                withCredentials: true,
                requestTransformations: true,
                responseTransformations: true
              };
              for(var key in options) {
                if(options.hasOwnProperty(key) && !!validOptons[key]) {
                  httpClient[key] = options[key];
                }
              }
            }

            return httpClient;
          }

        }
      ]);

})(angular);
