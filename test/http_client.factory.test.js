(function(module, inject, angular) {

  var expect = chai.expect;

  describe("Service - $httpClientFactory", function() {
    var $httpClientFactory, $httpBackend, client, server;

    beforeEach(module("AP.adapter"));

    beforeEach(inject(function($injector) {
      $httpBackend = $injector.get("$httpBackend");
      $httpClientFactory = $injector.get("$httpClientFactory");
      client = $httpClientFactory.create({
        url: "http://www.example.com",
        params: { foo: "bar" },
        headers: { "Foo": "Bar" },
        data: { key: "value" },
        withCredentials: true
      });
    }));

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it("should be defined", function() {
      expect($httpClientFactory).to.exist;
    });

    it("should return a promise from ajax requests", function() {
      $httpBackend.when("GET", "http://www.example.com/foo?foo=bar&one=one").respond({id: 1});
      var response = client.ajax({
        method: "GET",
        url: "/foo",
        params: { one: "one" }
      });
      expect(response.then).to.be.an.instanceof(Function);
      $httpBackend.flush();
    });

    it("should execute get requests", function() {
      $httpBackend.when("GET", "http://www.example.com/foo?foo=bar&one=one").respond({id: 1});

      var response = client.get({
        url: "/foo",
        params: { one: "one" }
      });

      response.then(function(response) {
        expect(response.data).to.deep.equal({id: 1});
      });
      $httpBackend.flush();
    });

    it("should execute post requests", function() {
      $httpBackend.when("POST", "http://www.example.com/foo?foo=bar&one=one").respond({id: 1, one: "one"});

      var response = client.post({
        url: "/foo",
        params: { one: "one" }
      });

      response.then(function(response) {
        expect(response.data).to.deep.equal({id: 1, one: "one"});
      });
      $httpBackend.flush();
    });

    it("should execute put requests", function() {
      $httpBackend.when("PUT", "http://www.example.com/foo?foo=bar&one=one").respond({id: 1, one: "one"});

      var response = client.put({
        url: "/foo",
        params: { one: "one" }
      });

      response.then(function(response) {
        expect(response.data).to.deep.equal({id: 1, one: "one"});
      });
      $httpBackend.flush();
    });

    it("should execute patch requests", function() {
      $httpBackend.when("PATCH", "http://www.example.com/foo?foo=bar&one=one").respond({id: 1, one: "one"});

      var response = client.patch({
        url: "/foo",
        params: { one: "one" }
      });

      response.then(function(response) {
        expect(response.data).to.deep.equal({id: 1, one: "one"});
      });
      $httpBackend.flush();
    });

    it("should execute delete requests", function() {
      $httpBackend.when("DELETE", "http://www.example.com/foo?foo=bar&one=one").respond();

      var response = client.delete({
        url: "/foo",
        params: { one: "one" }
      });

      response.then(function(response) {
        expect(response.data).to.be.undefined;
      });
      $httpBackend.flush();
    });

    it("should run request transformations before sending an ajax request", function() {
      $httpBackend.when("POST", "http://www.example.com/foo?foo=bar&one=one", {two: "two"}).respond("Success!");

      var response = client.post({
        url: "/foo",
        params: { one: "one" },
        requestTransformations: [function(data) {
          return {two: "two"};
        }]
      });

      response.then(function(response) {
        expect(response.data).to.equal("Success!");
      });
      $httpBackend.flush();
    });

    it("should run response transformations before sending an ajax request", function() {
      $httpBackend.when("POST", "http://www.example.com/foo?foo=bar&one=one").respond("Success!");

      var response = client.post({
        url: "/foo",
        params: { one: "one" },
        responseTransformations: [function(response) {
          return response + "!!!"
        }]
      });

      response.then(function(response) {
        expect(response.data).to.equal("Success!!!!");
      });
      $httpBackend.flush();
    });

    it("should use caching when offline cache is enabled", function() {
      // We only expect one get request
      $httpBackend.when("GET", "http://www.example.com/foo?foo=bar&one=one").respond({id: 1});
      client.useOfflineCache = true;
      var response = client.get({
        url: "/foo",
        params: { one: "one" }
      });

      response.then(function(response) {
        expect(response.data).to.deep.equal({id: 1});
      });

      $httpBackend.flush();

      response = client.get({
        url: "/foo",
        params: { one: "one" }
      });

      response.then(function(response) {
        expect(response.data).to.deep.equal({id: 1});
      });

      $httpBackend.flush();
    });

  });

})(window.module, window.inject, angular);
