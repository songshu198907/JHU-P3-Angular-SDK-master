(function(module, inject, angular) {

  var expect = chai.expect;

  describe("Service - $cache", function() {
    var $cache;

    beforeEach(module("AP.utility"));

    beforeEach(inject(function($injector) {
      $cache = $injector.get("$cache");
      $cache.flush();
    }));

    it("should exist", function() {
      expect($cache).to.exist;
    });

    it("should save a key-value pair", function() {
      var key = ["foo", 2, true, { bar: 100 }];
      $cache.store(key, "Some value");
      var serializedKey = JSON.stringify(key);
      expect($cache.$storage["cache"][serializedKey].value).to.equal("Some value");
    });

    it("should add a timestamp to every set value", function() {
      var key = ["foo", 2, true, { bar: 100 }];
      $cache.store(key, "Some value");
      var serializedKey = JSON.stringify(key);
      var storedObject = $cache.$storage["cache"][serializedKey];
      expect(storedObject.timestamp).to.exist;
    });

    it("should retrieve a value given a key", function() {
      var key = ["foo", 2, true, { bar: 100 }];
      $cache.store(key, "Some value");
      var value = $cache.store(key);
      expect(value).to.equal("Some value");
    });

    it("should use a default expiration date of 7 days", function() {
      expect($cache.$timestamps.getExpirationRange()).to.equal(7);
    });

    it("should give a Date timestamp", function() {
      expect($cache.$timestamps.timestamp()).to.be.an.instanceof(Date);
    });

    it("should recognize timestamps that have expired", function() {
      var oldTimestamp = new Date(2015, 5, 5);
      var now = new Date();
      expect($cache.$timestamps.getExpirationRange()).to.equal(7);
      expect($cache.$timestamps.isValid(oldTimestamp)).to.be.false;
      expect($cache.$timestamps.isValid(now)).to.be.true;
    });

  });

})(window.module, window.inject, angular);
