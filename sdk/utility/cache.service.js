(function(angular) {

  /**
  Local cache class, uses ngStorage internally to persist data across sessions in the browser
  @module AP
  @submodule utility
  @class {Cache}
  @param {Object} $localStorage Web Storage instance for persisting session data.
  */
  function Cache($localStorage, $timestamps) {
    this.$storage = $localStorage;
    this.$timestamps = $timestamps;
  }

  angular.extend(Cache.prototype, {

    /**
    Single function for getting or setting data in the Cache. If only a key is provided then it will get that key, if a key and value are
    provided then it will set the value of that key in the cache. If nothing is passed or if you try to get a value that doesn't exist
    it will return undefined.
    @method store
    @param {Object} key the key to get or set, it can be a value type or reference type
    @param {Object} value the value to store, if no value then it will act as a getter
    @returns {Object} if acting as a getter
    */
    store: function(key, value) {
      var $store = this.$storage["cache"], serializedKey, ts, data;
      // Checks to see if the cache exists within ngStorage and if doesn't then it recreates it
      // this is because the cache might have been flushed so it might not exist.
      if(!$store) {
        this.$storage["cache"] = {};
        $store = this.$storage["cache"];
      }
      if(key) {
        serializedKey = this.serializeKey(key);
        if(value) { // Set the value in the cache
          ts = this.$timestamps.timestamp();
          $store[serializedKey] = {
            value: value,
            timestamp: ts
          };
          return value;
        } else { // Get the value for key from the cache
          data = $store[serializedKey];
          if(data) {
            var timestamp = this.$timestamps.fromISOString(data.timestamp);
            if(!this.$timestamps.isValid(timestamp)) {
              delete $store[serializedKey];
              data = undefined;
            } else {
              data = data.value;
            }
          }
          return data;
        }
      }
    },

    /**
    Return a string version of a key. This allows to use reference types as keys
    @method serializeKey
    @param {Object} key the key to serialize
    @returns {String} serialized key
    */
    serializeKey: function(key) {
      return JSON.stringify(key);
    },

    /**
    Wipe the cache clean
    @method flush
    @returns {Void}
    */
    flush: function() {
      if(this.$storage) {
        delete this.$storage["cache"];
      }
    }

  });

  angular.module("AP.utility").service("$cache", ["$localStorage", "$timestamps", Cache]);

})(angular);
