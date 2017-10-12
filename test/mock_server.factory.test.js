(function(module, inject, angular) {

  var expect = chai.expect;

  describe("Service - $mockServerFactory", function() {
    var $httpBackend, $mockServerFactory, $modelFactory, mockServer, model;

    beforeEach(module("AP.adapter"));
    beforeEach(module("AP.model"));

    beforeEach(inject(function($injector) {
      $httpBackend = $injector.get("$httpBackend");
      $mockServerFactory = $injector.get("$mockServerFactory");
      $modelFactory = $injector.get("$modelFactory");

      mockServer = $mockServerFactory.create()
      model = $modelFactory.create(null, {
        url: "/test",
        name: "Test",
        mapping: "Test",
        fields: [
          { name: "id", label: "id", type: "string", required: true, auto: true, key: true },
          { name: "name", label: "name", type: "string", required: false, auto: false },
          { name: "num", label: "num", type: "integer", required: false, auto: false }
        ],
        scopes: [
          { name: "all", type: "ObjectQueryScope" },
          { name: "exact_match", type: "ObjectQueryScope" },
          { name: "count", type: "AggregateQueryScope", aggregateField: "num" },
          { name: "count_exact_match", type: "AggregateQueryScope", aggregateField: "num" },
          { name: "some_random", type: "ObjectQueryScope" },
          { name: "some_random_count", type: "AggregateQueryScope", aggregateField: "num" }
        ]
      });
    }));

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it("should be defined", function() {
      expect($mockServerFactory).to.exist;
    });

    it("should respond to requests with a promise", function() {
      var response = mockServer.get(model, {
        params: {
          scope: "all"
        }
      });
      expect(response.then).to.be.an.instanceof(Function);
      expect(response.success).to.be.an.instanceof(Function);
      expect(response.error).to.be.an.instanceof(Function);
    });

    it("should return fake data when executing object query scopes", function() {
      var response = mockServer.get(model, {
        params: {
          scope: "all"
        }
      });
      response.success(function(data) {
        expect(data).to.be.an.instanceof(Array);
        expect(data.length).to.be.at.least(1);
        var first = data[0];
        expect(first).to.be.an.instanceof(Object);
        expect(typeof first.id).to.equal("string");
        expect(typeof first.name).to.equal("string");
        expect(typeof first.num).to.equal("number");
      });
    });

    it("should return an array with a single element when executing aggregate query scopes", function() {
      var response = mockServer.get(model, {
        params: {
          scope: "count"
        }
      });
      response.success(function(data) {
        expect(data).to.be.an.instanceof(Array);
        expect(data.length).to.equal(1);
        var first = data[0];
        expect(first).to.be.an.instanceof(Object);
        expect(typeof first.num).to.equal("number");
        expect(first.id).to.equal(undefined);
        expect(first.name).to.equal(undefined);
      });
    });

    it("should return the a complete object when creating an instance of an object", function() {
      var response = mockServer.post(model, {
        data: {
          name: "foo"
        }
      });
      response.success(function(data) {
        expect(data).to.be.an.instanceof(Object);
        expect(data.length).to.equal(undefined);
        expect(data.name).to.equal("foo");
        expect(typeof data.id).to.equal("string");
      });
    });

    it("should return a single instance when reading a specific object", function() {
      var response = mockServer.get(model, {
        url: "/test/077sd67ad8s"
      });
      response.success(function(instance) {
        expect(instance.id).to.equal("077sd67ad8s");
        expect(typeof instance.name).to.equal("string");
        expect(typeof instance.num).to.equal("number");
      });
    });

  });

})(window.module, window.inject, angular);
