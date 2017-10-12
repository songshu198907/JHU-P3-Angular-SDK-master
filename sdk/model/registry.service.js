(function(angular) {

  var models = {};

  /****************************************************
                    HELPER METHODS
  ****************************************************/
  /**
  @method isEmptyString
  @param {String} str the string to check if it's empty or not.
  @returns {Boolean} true if str is both a string and empty, false otherwise
  */
  function isEmptyString(str) {
    return angular.isString(str) && str === "";
  }

  /**
  The ModelRegistry is merely a store where Model services difined in one or more SDKs are kept.
  This is used for relationships between Models, so any model can access another without needing to inject
  it as a dependecy when the service is defined. Since the registry is global (it is not specific to any SDK)
  registered Models are grouped by SDK name.
  @module AP
  @submodule model
  @class ModelRegistry
  @param {Object} $injector the angular service used to do dependency injection
  */
  function ModelRegistry($injector) {
    this.$injector = $injector;
  }

  angular.extend(ModelRegistry.prototype, {

    /**
    Checks that the SDK name and Model name passed are Strings and are not empty Strings
    @method validateSdkAndModelNames
    @param {String} sdk the name of an SDK
    @param {String} modelName the name of a Model
    @returns {Boolean} true if they both check out, false if they don't
    */
    validateSdkAndModelNames: function(sdk, modelName) {
      return angular.isString(sdk) && !isEmptyString(sdk) && angular.isString(modelName) && !isEmptyString(modelName);
    },

    /**
    Stores a Model service, within the space of its container SDk with the name passed
    @method register
    @param {String} sdk the name of the SDK where the Model is defined
    @param {String} modelName the name of the Model, which will be used as the key to store the service
    @param {Model} modelFactory the Model service
    @returns {Void}
    */
    register: function(sdk, modelName, modelFactory) {
      if(this.validateSdkAndModelNames(sdk, modelName)) {
        if(!models[sdk] || !angular.isObject(models[sdk])) {
          models[sdk] = {};
        }

        if(!models[sdk][modelName]) {
          models[sdk][modelName] = modelFactory;
        }
      }
    },

    /**
    Gets a Model based on the SDk name and Model name passed from the store. If a Model requested isn't
    found within the store, the registry will attempt to inject it using angular's $injector service. This is
    because angular doesn't initialize services until they are needed so there might be a case when a Model
    hasn't been registered simply because nobody has used it yet. If a Model gets injected using $injector the
    resulting Model will be registered for later use.
    @method get
    @param {String} sdk the name of the SDK where the Model is registered
    @param {String} modelName the name of the Model to get
    @returns {Model} the requested Model service
    */
    get: function(sdk, modelName) {
      var factory = undefined;
      if(this.validateSdkAndModelNames(sdk, modelName)) {
        if(models[sdk]) {
          if(models[sdk][modelName]) {
            factory = models[sdk][modelName];
          }
        } else {
          factory = this.$injector.get(modelName);
          this.register(sdk, modelName, factory);
        }
      }
      return factory;
    }

  });

  angular.module("AP.model")
    .service("$registry", ["$injector", ModelRegistry]);

})(angular);
