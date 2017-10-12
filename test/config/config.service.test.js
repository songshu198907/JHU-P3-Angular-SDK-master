(function(module, inject, angular) {

  var expect = chai.expect;

  describe("Service - $vaccineSurveySdkConfig", function() {
    var config;

    beforeEach(module("VaccineSurveySdk.config"));

    beforeEach(inject(function($injector) {
      config = $injector.get("$vaccineSurveySdkConfig");
    }));

    it("should exist", function() {
      expect(config).to.exist;
    });

    it("should expose get and set the base url", function() {
      expect(config.baseUrl).to.exist;
      expect(config.baseUrl).to.respondTo("get");
      expect(config.baseUrl).to.respondTo("set");
    });

    it("should expose methods to enable and disable the usage of a mock server", function() {
      expect(config.mockServer).to.exist;
      expect(config.mockServer).to.respondTo("enable");
      expect(config.mockServer).to.respondTo("disable");
    });
  });

})(window.module, window.inject, angular);
