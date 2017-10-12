(function(module, inject, angular) {

  var expect = chai.expect;

  describe("Service - $modelFactory", function() {
    var $modelFactory, $httpBackend, $adapterFactory, $dispatcherFactory, dispatcher, adapter, model, relatedModel;

    beforeEach(module("AP.model"));
    beforeEach(module("AP.adapter"));

    beforeEach(inject(function($injector) {
      $httpBackend = $injector.get("$httpBackend");
      $modelFactory = $injector.get("$modelFactory");
      $adapterFactory = $injector.get("$adapterFactory");
      $dispatcherFactory = $injector.get("$dispatcherFactory");

      adapter = $adapterFactory.create({ url: "http://www.example.com/api/v1" });
      dispatcher = $dispatcherFactory.create({ default: adapter });
      model = $modelFactory.create(dispatcher, {
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
        ],
        hasOne: [
          {
            name: "related",
            service: "$relatedModel",
            opposite_object: "Related",
            fk: "test_id",
            pk: "id"
          }
        ]
      });

      relatedModel = $modelFactory.create(dispatcher, {
        url: "/related",
        name: "related",
        mapping: "Related",
        ownerSdk: "NoSdk",
        service: "$relatedModel",
        fields: [
          { name: "id", type: "string", key: true, auto: true, required: true },
          { name: "test_id", type: "string" }
        ],
        scopes: [
          { name: "all", type: "ObjectQueryScope" },
          { name: "exact_match", type: "ObjectQueryScope" },
          { name: "count", type: "AggregateQueryScope" },
          { name: "count_exact_match", type: "AggregateQueryScope" },
          { name: "some_query", type: "ObjectQueryScope" }
        ],
        belongsTo: [
          {
            name: "test",
            service: "$testModel",
            opposite_object: "Test",
            fk: "test_id",
            pk: "id"
          }
        ]
      });
    }));

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it("should be defined", function() {
      expect($modelFactory).to.exist;
    });

    it("should create a model service that has a create method", function() {
      expect(model).to.respondTo("create");
    });

    it("should create a model service that has a delete method", function() {
      expect(model).to.respondTo("delete");
    });

    it("should create a model service that has all query scopes", function() {
      expect(model).to.respondTo("all");
      expect(model).to.respondTo("exact_match");
      expect(model).to.respondTo("count");
      expect(model).to.respondTo("count_exact_match");
      expect(model).to.respondTo("some_query");
    });

    it("should return a resource when creating a new model instance", function() {
      var instance = model.create({ name: "John" });
      expect(instance).to.respondTo("$save");
    });

    it("should send GET requests when executing a query scope", function() {
      $httpBackend.when("GET", "http://www.example.com/api/v1/test?scope=all").respond([{id: 1}]);
      model.all();
      $httpBackend.flush();
    });

    it("should send a POST request when saving an instance", function() {
      $httpBackend.when("POST", "http://www.example.com/api/v1/test", function(postData) {
        var jsData = JSON.parse(postData);
        return jsData.name == "John";
      }).respond({id: 1, name: "John"});

      var instance = model.create({ name: "John" });
      instance.$save();
      $httpBackend.flush();
    });

    it("should send a DELETE request when deleting an instance", function() {
      $httpBackend.when("DELETE", "http://www.example.com/api/v1/test/1").respond("");
      model.delete({ id: 1 });
      $httpBackend.flush();
    });

    it("should fetch related models", function() {
      var response = [{id: 2, test_id: 1}];
      $httpBackend.when("GET", "http://www.example.com/api/v1/related?scope=exact_match&query[test_id]=1&limit=1&offset=0").respond(response);
      var instance = model.create({id: 1, name: "John"});
      instance.$related.related(function(relatedInstance) {
        expect(relatedInstance).to.deep.equal(response);
        $httpBackend.flush();
      });
    });

  });

})(window.module, window.inject, angular);
