(function(module, inject, angular) {

  var expect = chai.expect;

  describe("Service - $adapterFactory", function() {
    var $adapterFactory, $httpBackend, $modelFactory, adapter, model;

    beforeEach(module("AP.model"));
    beforeEach(module("AP.adapter"));

    beforeEach(inject(function($injector) {
      $httpBackend = $injector.get("$httpBackend");
      $adapterFactory = $injector.get("$adapterFactory");
      $modelFactory = $injector.get("$modelFactory");
      adapter = $adapterFactory.create({
        url: "http://www.example.com"
      });
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
        ],
      });
    }));

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it("should be defined", function() {
      expect($adapterFactory).to.exist;
    });

    it("should return a promise from ajax requests", function() {
      $httpBackend.when("GET", "http://www.example.com/foo?one=one").respond({id: 1});
      var response = adapter.ajax("get", null, {
        method: "GET",
        url: "/foo",
        params: { one: "one" }
      });
      expect(response.then).to.be.an.instanceof(Function);
      $httpBackend.flush();
    });

    it("should execute get requests when reading", function() {
      $httpBackend.when("GET", "http://www.example.com/test/123").respond({id: 123});

      var response = adapter.read(model, {id: "123"});
      response.then(function(instance) {
        expect(instance).to.have.property("id", 123);
        expect(instance).to.respondTo("$save");
      });
      $httpBackend.flush();
    });

    it("should execute get requests when querying", function() {
      $httpBackend.when("GET", "http://www.example.com/test?scope=all").respond([{id: 123}, {id: 456}]);

      var collection = adapter.query(model, "all", {}, function() {
        expect(collection).to.be.an.instanceof(Array);
        expect(collection[0]).to.have.property("id", 123);
        expect(collection[0]).to.respondTo("$save");
        expect(collection[1]).to.have.property("id", 456);
        expect(collection[1]).to.respondTo("$save");
      });

      $httpBackend.flush();
    });

    it("should execute post requests when creating", function() {
      $httpBackend.when("POST", "http://www.example.com/test", {name: "John"}).respond({id: 1, name: "John"});

      var john = model.create({name: "John"});
      adapter.create(model, john).then(function() {
        expect(john).to.have.property("id", 1);
        expect(john).to.have.property("name", "John");
      });
      $httpBackend.flush();
    });

    it("should execute put requests on update", function() {
      $httpBackend.when("PUT", "http://www.example.com/test/1", {id: 1, name: "Steve"}).respond({id: 1, name: "Steve"});

      var john = model.create({id: 1, name: "John"});
      john.name = "Steve";

      adapter.update(model, john).then(function() {
        expect(john).to.have.property("id", 1);
        expect(john).to.have.property("name", "Steve");
      });
      $httpBackend.flush();
    });

    it("should execute delete requests", function() {
      $httpBackend.when("DELETE", "http://www.example.com/test/1").respond();

      var john = model.create({id: 1, name: "John"});
      adapter.delete(model, john);
      $httpBackend.flush();
    });

    it("should have a configurable base url", function() {
      $httpBackend.when("GET", "https://localhost:8080/test/1").respond({id: 1, name: "John"});

      adapter.setBaseUrl("https://localhost:8080");

      adapter.read(model, {id: 1}).then(function(john) {
        expect(john).to.have.property("id", 1);
        expect(john).to.have.property("name", "John");
      });

      adapter.setBaseUrl("http://www.example.com");
      $httpBackend.flush();
    });

    it("should use a mock server if enabled", function() {

      var mockServerGetSpy = sinon.spy(function() {
        return {
          then: function() { return this; },
          catch: function() { return this; }
        }
      });
      var httpClientGetSpy = sinon.spy();

      var mockServerOriginalGet = adapter.$mockServer.get;
      var httpClientOriginalGet = adapter.$restClient.get;

      adapter.$mockServer.get = mockServerGetSpy;
      adapter.$restClient.get = httpClientGetSpy;

      adapter.useMockServer = true;
      adapter.read(model, {id: 1});

      expect(mockServerGetSpy.calledOnce).to.be.true;
      expect(httpClientGetSpy.called).to.be.false;

      adapter.$mockServer.get = mockServerOriginalGet;
      adapter.$restClient.get = httpClientOriginalGet;
    });

  });

})(window.module, window.inject, angular);
