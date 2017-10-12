(function(module, inject, angular) {

  var expect = chai.expect;

  describe("Service - $dispatcherFactory", function() {
    var $dispatcherFactory, $adapterFactory, defaultAdapter, serviceAdapter, dispatcher;

    beforeEach(module("AP.adapter"));

    beforeEach(inject(function($injector) {
      $adapterFactory = $injector.get("$adapterFactory");
      $dispatcherFactory = $injector.get("$dispatcherFactory");

      defaultAdapter = $adapterFactory.create({ url: "https://www.example.com" });
      serviceAdapter = $adapterFactory.create({ url: "http://www.google.com" });
      dispatcher = $dispatcherFactory.create({
        default: defaultAdapter
      });
      dispatcher.addAdapter("Google", serviceAdapter);
    }));

    it("should be defined", function() {
      expect($dispatcherFactory).to.exist;
    });

    it("should return and adapter by name", function() {
      var adapter = dispatcher.adapter("Google");
      expect(adapter).to.deep.equal(serviceAdapter);
    });

    it("should return the default one when it can't find the given name", function() {
      var adapter = dispatcher.adapter("Facebook");
      expect(adapter).to.equal(defaultAdapter);
      adapter = dispatcher.adapter();
      expect(adapter).to.equal(defaultAdapter);
    });

  });

})(window.module, window.inject, angular);
