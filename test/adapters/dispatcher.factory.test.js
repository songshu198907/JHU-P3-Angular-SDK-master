(function(module, inject, angular) {

  var expect = chai.expect;

  describe("Service - $vaccineSurveySdkDispatcher", function() {
    var dispatcher;

    beforeEach(module("VaccineSurveySdk.adapters"));

    beforeEach(inject(function($injector) {
      dispatcher = $injector.get("$vaccineSurveySdkDispatcher");
    }));

    it("should exist", function() {
      expect(dispatcher).to.exist;
    });

    it("should have a default adapter", function() {
      expect(dispatcher.default).to.be.an.instanceof(Object);
      expect(dispatcher.default).to.respondTo("create");
      expect(dispatcher.default).to.respondTo("update");
      expect(dispatcher.default).to.respondTo("read");
      expect(dispatcher.default).to.respondTo("delete");
      expect(dispatcher.default).to.respondTo("query");
    });

    it("should be able to add adapters to it", function() {
      expect(dispatcher).to.respondTo("addAdapter");
      dispatcher.addAdapter("TestAdapter", {});
      expect(dispatcher.adapters.length).to.be.at.least(1);
      dispatcher.adapters = [];
    });

    it("should return an adapter by name", function() {
      dispatcher.addAdapter("TestAdapter", { foo: "bar" });
      expect(dispatcher.adapter("TestAdapter")).to.deep.equal({ foo: "bar" });
      dispatcher.adapters = [];
    });
  });

})(window.module, window.inject, angular);
