(function(module, inject, angular) {

  var expect = chai.expect;

  describe("Service - $vaccineSurveySdkDefaultAdapter", function() {
    var defaultAdapter;

    beforeEach(module("VaccineSurveySdk.adapters"));

    beforeEach(inject(function($injector) {
      defaultAdapter = $injector.get("$vaccineSurveySdkDefaultAdapter");
    }));

    it("should exist", function() {
      expect(defaultAdapter).to.exist;
    });

    it("should have create, update, read, delete and query methods", function() {
      expect(defaultAdapter).to.respondTo("create");
      expect(defaultAdapter).to.respondTo("update");
      expect(defaultAdapter).to.respondTo("read");
      expect(defaultAdapter).to.respondTo("delete");
      expect(defaultAdapter).to.respondTo("query");
    });

    it("should have a setBaseUrl method", function() {
      expect(defaultAdapter).to.respondTo("setBaseUrl");
    });
  });

})(window.module, window.inject, angular);
