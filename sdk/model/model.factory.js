(function(angular) {

  /**
  Factory that creates Model instances. A Model instance is a basically a service that exposes methods for CRUD operations and
  Query Scopes. In order to create an instance, a dispatcher and a model definition must be passed as arguments. The dispatcher
  is needed so that the Model instance will know how to connect to the backend when its methods are called.

  @module AP
  @submodule model
  @class $modelFactory
  */
  angular.module("AP.model")
    .factory("$modelFactory", ["$registry", function($registry) {

      /**
      Constructor for Model instances
      Model Constructor
      @class Model
      @constructor
      @param {Dispatcher} dispatcher the dispatcher used by the SDK
      @param {Object} definition configuration data describing the model
      */
      function Model(dispatcher, definition) {

        /**
        @property
        @type {String} incremental path for the model
        */
        this.url = definition.url || "";

        /**
        @property
        @type {String} the name of the model
        */
        this.name = definition.name;

        /**
        @property
        @type {String} the name of the angular factory for the model (i.e. Person -> $person)
        */
        this.service = definition.service || "";

        /**
        @property
        @type {String} the name of the SDK to which the model belongs
        */
        this.ownerSdk = definition.ownerSdk || "";

        /**
        @property
        @type {Array} an array of field definitions of each field for that model where each field definition is an object of that field's properties
        */
        this.fields = definition.fields || [];

        /**
        @property
        @type {Array} an array of query scope definitions for that model where each definition is an object of properties that define that query scope
        */
        this.scopes = definition.scopes || [];

        /**
        @property
        @type {Array} an array of belongs_to relationship definitions for that model where each definition is an object of that belongs_to relationship's properties
        */
        this.belongsTo = definition.belongsTo || [];

        /**
        @property
        @type {Array} an array of hasOne relationship definitions for that model where each definition is an object of that hasOne relationship's properties
        */
        this.hasOne = definition.hasOne || [];

        /**
        @property
        @type {Array} an array of hasMany relationship definitions for that model where each definition is an object of that hasMany relationship's properties
        */
        this.hasMany = definition.hasMany || [];

        /**
        @property
        @type {Dispatcher} the dispatcher used by the SDK
        */
        this.$dispatcher = dispatcher;

        /**
        @property
        @type {String} the name of the data source for the model
        */
        this.interface = definition.interface;

        /**
        @property
        @type {Object} the definitions of direct to source configurations for the model and all its actions and query scopes
        */
        this.adapterConfigurations = definition.adapterConfigurations || {};

        // Add the new model to the AP model registry..
        $registry.register(this.ownerSdk, this.service, this);
      }

      /**
      Gets the Adapter for the API to which this Model belongs to
      NOTE: For now all Model instances belong to an AP backend
      @method client
      @returns {Adapter}
      */
      Model.prototype.client = function() {
        return this.$dispatcher.adapter(this.interface);
      };

      /**
      Saves an instance passed as an argument to the server. If the instance has an "id" property then it assumes
      the operation is for updating instead of creating
      @method save
      @param {Object} data the instance data to save
      @param {Object} interpolation context to use (only valid for direct to source models)
      @returns {Promise}
      */
      Model.prototype.save = function(data, context) {
        if(data.id) {
          return this.client().update(this, data, context);
        }
        return this.client().create(this, data, context);
      };

      /**
      Creates a Resource instance for this Model
      @method create
      @param {Object} data the data with which the Resource is created
      @returns {Resource}
      */
      Model.prototype.create = function(data) {
        return this.createResource(data);
      };

      /**
      Reads an instance from the server
      @method get
      @param {Object} with the query for the instance ( usually just { id: ... } )
      @returns {Promise}
      */
      Model.prototype.get = function(data) {
        return this.client().read(this, data);
      };

      /**
      Deletes an instance from the server
      @method delete
      @param {Object} with the id of the instance to delete
      @returns {Promise}
      */
      Model.prototype.delete = function(data) {
        return this.client().delete(this, data);
      };

      /**
      Creates an instance of Resource. If an Object is passed as an argument then the attributes of that
      Object will be added to the resulting Resource
      @method createResource
      @param {Object} obj attributes for the Resource
      @returns {Resource}
      */
      Model.prototype.createResource = function(obj) {
        var _this = this, resource;

        /**
        A Resource is nothing more than an object with a $save method. This class is defined dynamically so that
        whenever a Model creates a Resource, the resources's $save method will have access to the "save" method of the specific Model that created it
        @class Resource
        */
        function Resource() {}

        /**
        Copies the Resources attributes and calls the save method from the Model that created the instance
        @method $save
        @param {Object} interpolation context to use when saving
        @returns {Promise}
        */
        Resource.prototype.$save = function(context) {
          return _this.save(this, context);
        };

        // Add a $related object to hold the relationships
        if(this.belongsTo.length || this.hasOne.length || this.hasMany.length) {
          Resource.prototype.$related = {};
        }

        var resource = new Resource();
        if(obj && angular.isObject(obj)) {
          angular.extend(resource, obj);
        }

        this.addRelationshipsToResource(resource);

        return resource;
      };

      /**
      Adds methods to a Resource than represent each of the relationships defined for this Model.
      All relationship methods are stored inside a $related Object in the Model service.
      @method addRelationshipsToResource
      @param {Resource} res the Resource instance to add the methods to
      @returns {Resource} the same Resource passed
      */
      Model.prototype.addRelationshipsToResource = function(res) {

        if(res) {
          var _this = this;
          // Add 'belongsTo' relationships
          if(this.belongsTo.length) {
            angular.forEach(this.belongsTo, function(belongs) {
              res.$related[belongs.name] = angular.bind(res, function(success, error) {
                var $model = $registry.get(_this.ownerSdk, belongs.service);
                if($model) {
                  var query = {};
                  query[belongs.pk] = this[belongs.fk];
                  return $model.exact_match({
                    query: query,
                    limit: 1,
                    offset: 0
                  }, success, error);
                }
                return null;
              });
            });
          }

          if(this.hasOne.length) {
            angular.forEach(this.hasOne, function(hasOne) {
              res.$related[hasOne.name] = angular.bind(res, function(success, error) {
                var $model = $registry.get(_this.ownerSdk, hasOne.service);
                if($model) {
                  var query = {};
                  query[hasOne.fk] = this[hasOne.pk];
                  return $model.exact_match({
                    query: query,
                    limit: 1,
                    offset: 0
                  }, success, error);
                }
                return null;
              });
            });
          }

          if(this.hasMany.length) {
            angular.forEach(this.hasMany, function(hasMany) {
              res.$related[hasMany.name] = angular.bind(res, function(success, error) {
                var $model = $registry.get(_this.ownerSdk, hasMany.service);
                if($model) {
                  var query = {};
                  query[hasMany.fk] = this[hasMany.pk];
                  return $model.exact_match({ query: query }, success, error);
                }
                return null;
              });
            });
          }
        }

        return res;
      };

      /**
      Given an Array of Objects representing a collection, it transforms every Object in the Array into a Resource
      @method createCollection
      @param {Object[]} data the collection data
      @returns {Resource[]}
      */
      Model.prototype.createCollection = function(data) {
        var collection = [];
        if(angular.isArray(data)) {
          angular.forEach(data, function(element) {
            var model = this.create(element);
            collection.push(model);
          }, this);
          data = collection;
        }
        return data;
      };


      /********************************************************
      * Helper Functions
      ********************************************************/
      /**
      Adds all the scopes defined for the Model to the instance
      @method addScopes
      @param {Model} model the model instance to add the scopes too
      @param {Object[]} scopes the scopes' definitions
      @returns {Void}
      */
      function addScopes(model) {
        angular.forEach(model.scopes, function(scopeDefinition) {
          var name = scopeDefinition.name;
          model[name] = angular.bind(model, function(options, success, error) {
            return this.client().query(this, name, options, success, error);
          });
        });
      }

      /**
      Creates a Model instance
      @method createModel
      @param {Dispatcher} dispatcher the dispatcher used by the SDK for the Model to connect to the backend
      @param {Object} definition configuration data describing the model
      @returns {Model}
      */
      function createModel(dispatcher, definition) {
        var model = new Model(dispatcher, definition);
        addScopes(model);
        return model;
      }

      return {
        create: createModel
      }


    }]);

})(angular);
