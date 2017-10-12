(function(angular) {

  function Timestamps() {
    /**
    This is used to help calculate the difference in days between cache record timestamps
    @property millisecondsInOneDay
    @type {Number}
    */
    this.millisecondsInOneDay = 24 * 60 * 60 * 1000;

    /**
    The amount of days before a timestamp should be considered expired
    @property expiration
    @type {Number}
    */
    this.expiration = 7;
  }

  angular.extend(Timestamps.prototype, {

    /**
    Creates a timestamp from an ISO formatted string
    @method fromISOString
    @param {String} the ISO string to convert to a timestamp
    @returns {Date}
    */
    fromISOString: function(str) {
      return new Date(str);
    },

    /**
    Checks if a {Date} is within the expiration range configured for the cache.
    @method isValid
    @param {Date} date the date to check
    @returns {Boolean}
    */
    isValid: function(date) {
      if(angular.isDate(date)) {
        var diff = (new Date()).valueOf() - date.valueOf();
        return !(Math.ceil(diff/this.millisecondsInOneDay) > this.getExpirationRange());
      }
      return false;
    },

    /**
    Gets the amount of days that are set as limit for expiration of stored values.
    @method getExpirationRange
    @returns {Number}
    */
    getExpirationRange: function() {
      return (this.expiration) ? this.expiration : 7;
    },

    /**
    Sets the amount of days to use as expiration range
    @method setExpirationRange
    @param {Number} days the number of days
    @returns {Void}
    */
    setExpirationRange: function(days) {
      if(typeof days === "number") {
        this.expiration = days;
      }
    },

    /**
    Returns a timestamp
    @method timestamp
    @returns {Date}
    */
    timestamp: function() {
      return new Date();
    }
  });

  angular.module("AP.utility")
    .service("$timestamps", [Timestamps]);

})(angular);
