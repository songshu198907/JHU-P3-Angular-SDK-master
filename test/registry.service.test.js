(function(module, inject, angular) {

  var expect = chai.expect;

  describe("Service - $registry", function() {
    var $registry, $modelFactory, model;

    beforeEach(module("AP.model"));

    beforeEach(inject(function($injector) {
      $registry = $injector.get("$registry");
      $modelFactory = $injector.get("$modelFactory");

      model = $modelFactory.create(null, {
        url: "/test",
        name: "test",
        mapping: "Test",
        ownerSdk: "NoSdk",
        service: "$testModel",
        fields: [
          { name: "id", type: "string", key: true, auto: true, required: true },
          { name: "name", type: "string" }
        ],
        scopes: [
          { name: "all", type: "ObjectQueryScope" },
          { name: "exact_match", type: "ObjectQueryScope" },
          { name: "count", type: "AggregateQueryScope" },
          { name: "count_exact_match", type: "AggregateQueryScope" },
          { name: "some_query", type: "ObjectQueryScope" }
        ]
      });
    }));

    it("should exist", function() {
      expect($registry).to.exist;
    });

    it("should have a register method", function() {
      expect($registry).to.respondTo("register");
    });

    it("should have a get method", function() {
      expect($registry).to.respondTo("get");
    });

    it("should register a Model", function() {
      $registry.register("NoSdk", "$testModel", model);
      var retrieved = $registry.get("NoSdk", "$testModel");
      expect(retrieved.name).to.equal(model.name);
      expect(retrieved.ownerSdk).to.equal(model.ownerSdk);
      expect(retrieved.url).to.equal(model.url);
    });

  });

})(window.module, window.inject, angular);
