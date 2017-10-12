(function(angular) {

  /**
  @module AP
  @submodule utility
  @class $helpers
  */
  angular.module("AP.utility")
    .service("$helpers", [function() {

      var _id = 1;

      /**
      Generates a unique String id
      @method uniqueId
      @param {String} prefix optional prefix to prepend to the id
      @param {String} suffix optional suffix to append to the id
      @returns {String}
      */
      this.uniqueId = function uniqueId(prefix, suffix) {
        var pref = prefix || "", suff = suffix || "";
        var id = "" + _id;
        _id++;
        return pref + id + suff;
      };

      /**
      Generates a random Number within a range. If no start and no end for the range is specified the default
      range will be 1-100000
      @method randomNumber
      @param {Number} start start of range
      @param {Number} end end of range
      @returns {Number}
      */
      this.randomNumber = function randomNumber(start, end) {
        start = start || 1;
        end = end || 100000
        return Math.floor(Math.random() * end) + start;
      };

      /**
      Finds an element within an Array, given a comparison Function passed as an argument
      @method find
      @param {Array} arr the array to search
      @param {Function} fn a compare Function that recieves an element as an argument and should return true/false if its the one its looking for
      @returns the element (any type) or null if no element met satisfied the comparison Function
      */
      this.find = function find(arr, fn) {
        if(angular.isArray(arr)) {
          var len = arr.length, i, element, found=false;
          for(i=0; i<len; i++) {
            element = arr[i];
            found = fn(element);
            if(found) {
              return element;
            }
          }
        }
        return null;
      };

      /**
      Create a query string from an object of parameters where the object's keys are the parameter names and their associated values are the parameter values
      @method getQueryString
      @param {Object} params an object of parameters where the object's keys are the parameter names and their associated values are the parameter values
      @returns {String}
      */
      this.getQueryString = function(params) {
        var result = "", paramArray = [];
        for(var param in params) {
          if(params.hasOwnProperty(param)) {
            paramArray.push({
              name: param,
              value: params[param]
            });
          }
        }
        if(paramArray.length) {
          result += "?";
        }
        for(var i = 0 ; i<paramArray.length ; i++) {
          var auxParam = paramArray[i];
          result += (i != 0) ? "&" : "";
          result += auxParam.name + "=" + JSON.stringify(auxParam.value);
        }

        return result;
      };

    }]);

})(angular);
