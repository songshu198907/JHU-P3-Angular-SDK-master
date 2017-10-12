(function(angular) {

  /**
  Factory that creates Dispatcher instances. A Dispatcher contains the Adapter instances for a specific SDK.
  There is always one Adapter which is the default one, so when someone asks for an Adapter instance that doesn't
  exist, the Dispatcher will just return the default one.

  @module AP
  @submodule adapter
  @class $dispatcherFactory
  */
  angular.module("AP.adapter")
    .factory("$dispatcherFactory", ["$helpers", function($helpers) {

      /**
      Dispatcher Constructor
      @class Dispatcher
      @constructor
      @param {Object} options configuration options for Dispatcher constructor
      */
      function Dispatcher(options) {
        /**
        The default Adapter instance
        @property default
        @type {Adapter}
        */
        this.default = options.default;
        /**
        List of registered Adapters
        @property adapters
        @type {Object[]}
        */
        this.adapters = [];
      }

      /**
      Registers an adapter by name within the Dispatcher
      @method addAdapter
      @param {String} name the name by which this Adapter will be known and located
      @param {Adapter} adapter the Adapter instance to add
      @returns {Void}
      */
      Dispatcher.prototype.addAdapter = function(name, adapter) {
        if(name && adapter && typeof name === "string") {
            this.adapters.push({ name: name, instance: adapter});
        }
      };

      /**
      Gets a registered Adapter given a name. If no Adapter is found with that name the default one will be returned
      @method adapter
      @param {String} name the name of the wanted Adapter
      @returns {Adapter}
      */
      Dispatcher.prototype.adapter = function(name) {
        var client = null;
        client = $helpers.find(this.adapters, function(adapter) {
          return adapter.name == name;
        });

        if(!client) {
          client = this.default;
        } else {
          client = client.instance;
        }

        return client;
      };


      return {
        /**
        Creates a Dispatcher instance
        @method create
        @param {Object} options configuration options for creating a new Dispatcher
        @returns {Dispatcher}
        */
        create: function(options) {
          var dispatcher = null;
          if(options) {
            dispatcher = new Dispatcher(options);
          }
          return dispatcher;
        }
      }

    }]);

})(angular);
