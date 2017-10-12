(function(module, inject, angular) {

  var expect = chai.expect;

  describe("Service - $httpAdapterFactory", function() {
    var $httpAdapterFactory, $httpBackend, httpAdapter;

    beforeEach(module("AP.adapter"));

    beforeEach(inject(function($injector) {
      $httpBackend = $injector.get("$httpBackend");
      $httpAdapterFactory = $injector.get("$httpAdapterFactory");
      httpAdapter = $httpAdapterFactory.create({
        url: "http://www.example.com/{{version}}",
        format: "json",
        headers: {
          "My-Header-One": "My-Value-One",
          "My-Header-Two": "My-Value-Two"
        },
        params: {
          "fooOne": "barOne",
          "fooTwo": "barTwo"
        }
      });
    }));

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it("should exist", function() {
      expect($httpAdapterFactory).to.exist;
    });

    it("should return a promise from ajax requests", function() {
      $httpBackend.when("GET", "http://www.example.com/foo?one=one").respond({id: 1});
      var response = httpAdapter.ajax("get", null, {
        method: "GET",
        url: "http://www.example.com/foo",
        params: { one: "one" }
      });
      expect(response.then).to.be.an.instanceof(Function);
      $httpBackend.flush();
    });

    it("should interpolate values with a context using the {{}} placeholder", function() {
      var result = httpAdapter.interpolate("<div>The {{dessert}} is {{is}}</div>", {
        dessert: "cake",
        is: "a lie"
      });
      expect(result).to.equal("<div>The cake is a lie</div>");
    });

    it("should get the appropiate configuration for actions", function() {
      var modelDummy = {
        adapterConfigurations: {
          create: "create config",
          read: "read config",
          scopes: {
            all: "all config",
            exact_match: "exact_match config"
          }
        }
      };

      var config = httpAdapter.getConfiguration(modelDummy, "create");
      expect(config).to.equal("create config");
      config = httpAdapter.getConfiguration(modelDummy, "exact_match");
      expect(config).to.equal("exact_match config");
    });

    it("should parse a json template into a javascript object", function() {
      var template = "{ id: 1, name: 'Jerry' }";
      var result = httpAdapter.parseObject(template);
      expect(result).to.deep.equal({id: 1, name: 'Jerry'});
    });

    it("should build request headers", function() {
      var config = {
        headers: {
          "My-Header-Two": "Some-Other-Value",
          "My-Second-Header": "Hello-{{something}}"
        }
      };

      var headers = httpAdapter.buildHeaders(config, { something: "World" });
      expect(headers).to.deep.equal({
        "My-Header-One": "My-Value-One",
        "My-Header-Two": "Some-Other-Value",
        "My-Second-Header": "Hello-World"
      });
    });

    it("should build query string parameters", function() {
      var config = {
        params: {
          "fooTwo": "someOtherValue",
          "fooThree": "{{something}}"
        }
      };

      var params = httpAdapter.buildParams(config, { something: "World" });
      expect(params).to.deep.equal({
        "fooOne": "barOne",
        "fooTwo": "someOtherValue",
        "fooThree": "World"
      });
    });

    it("should build the full url for a request", function() {
      var config = {
        incrementalPath: "/foo/bar/{{id}}"
      };

      var url = httpAdapter.buildUrl(config, { version: "v1", id: 24 });
      expect(url).to.equal("http://www.example.com/v1/foo/bar/24");
    });

    it("should build request field mappings", function() {
      var config = {
        requestFieldLevelMappings: {
          "id": "myId",
          "name": "{{theKeyForTheNameField}}"
        }
      };

      var mappings = httpAdapter.buildRequestMappings(config, { id: 400, name: "John", theKeyForTheNameField: "myName" });
      expect(mappings).to.deep.equal({
        myId: 400,
        myName: "John"
      });
    });

    it("should build a body payload template", function() {
      var config = {
        format: "json",
        bodyPayload: "{ foo: {{id}}, bar: 'bar-{{name}}' }"
      };

      var payload = httpAdapter.buildBodyPayload(config, {
        id: 10,
        name: "john"
      });
      expect(payload).to.deep.equal({
        foo: 10,
        bar: 'bar-john'
      });
    });

    it("should build a request", function() {
      var config = {
        incrementalPath: "/foo",
        format: "json",
        headers: { "Hello": "World" },
        params: { "param1": "{{name}}" },
        requestFieldLevelMappings: {
          "id": "hello",
          "name": "world"
        },
        responseFieldLevelMappings: {
          "id": "hello",
          "name": "world"
        },
        httpVerb: "PATCH"
      };

      var request = httpAdapter.buildRequest(config, { id: 200, name: "jim", version: "v8" });
      expect(request).to.deep.equal({
        method: "PATCH",
        url: "http://www.example.com/v8/foo",
        headers: {
          "Content-Type": "application/json",
          "My-Header-One": "My-Value-One",
          "My-Header-Two": "My-Value-Two",
          "Hello": "World"
        },
        params: {
          "fooOne": "barOne",
          "fooTwo": "barTwo",
          "param1": "jim"
        },
        data: {
          hello: 200,
          world: "jim"
        }
      });
    });

    it("should send a json request", function() {
      $httpBackend.when("POST", "http://www.example.com/v10/foo?fooOne=barOne&fooTwo=barTwo&param1=jim",
        function(data) {
          var expected = JSON.stringify({"hello": 200, "world": "jim"});
          return data == expected;
        },
        function(headers) {
          var isValid=true, expected = {
            "Content-Type": "application/json",
            "Hello": "World",
            "My-Header-One": "My-Value-One",
            "My-Header-Two": "My-Value-Two"
          };
          angular.forEach(expected, function(value, header) {
            if(!(header in headers) || ((header in headers) && (expected[header] !== headers[header]))) {
              isValid = false;
            }
          });
          return isValid;
        }).respond({hello: 10, world: "harry"});

      var config = {
        incrementalPath: "/foo",
        format: "json",
        headers: { "Hello": "World" },
        params: { "param1": "{{name}}" },
        requestFieldLevelMappings: {
          "id": "hello",
          "name": "world"
        },
        responseFieldLevelMappings: {
          "id": "hello",
          "name": "world"
        },
        httpVerb: "POST"
      };

      var request = httpAdapter.buildRequest(config, { id: 200, name: "jim", version: "v10" });
      var response = httpAdapter.ajax("post", null, request);

      $httpBackend.flush();
    });

    it("should send an xml request", function() {
      $httpBackend.when("POST", "http://www.example.com/v8/foo?fooOne=barOne&fooTwo=barTwo&param1=jim",
        function(data) {
          var expected = JSON.stringify('<foo><hello>200</hello><world>jim</world></foo>');
          return data == expected;
        },
        function(headers) {
          var isValid=true, expected = {
            "Content-Type": "application/xml",
            "Hello": "World",
            "My-Header-One": "My-Value-One",
            "My-Header-Two": "My-Value-Two"
          };
          angular.forEach(expected, function(value, header) {
            if(!(header in headers) || ((header in headers) && (expected[header] !== headers[header]))) {
              isValid = false;
            }
          });
          return isValid;
        })
      .respond("<foo><hello>10</hello><world>harry</world></foo>");

      var config = {
        incrementalPath: "/foo",
        format: "xml",
        headers: { "Hello": "World" },
        params: { "param1": "{{name}}" },
        requestFieldLevelMappings: {
          "id": "hello",
          "name": "world"
        },
        responseFieldLevelMappings: {
          "id": "hello",
          "name": "world"
        },
        httpVerb: "POST",
        objectNameMapping: "foo"
      };

      var request = httpAdapter.buildRequest(config, { id: 200, name: "jim", version: "v8" });
      var response = httpAdapter.ajax("post", null, request);

      $httpBackend.flush();
    });

    it("should map fields from a json response", function() {
      $httpBackend.when("POST", "http://www.example.com/v8/foo?fooOne=barOne&fooTwo=barTwo").respond({hello: 10, world: "Helen"});
      var config = {
        incrementalPath: "/foo",
        format: "json",
        pathSelector: "",
        responseFieldLevelMappings: {
          "id": "hello",
          "name": "world"
        }
      };
      var request = httpAdapter.buildRequest(config, {version: "v8"});
      var response = httpAdapter.ajax("post", null, request);
      response.then(function(resp) {
        var mappedResponse = httpAdapter.handleResponse(resp, config);
        expect(mappedResponse).to.deep.equal({
          id: 10,
          name: "Helen"
        });
      });
      $httpBackend.flush();
    });

    it("should map fields from an xml response", function() {
      $httpBackend.when("POST", "http://www.example.com/v8/foo?fooOne=barOne&fooTwo=barTwo").respond('<foo><hello>10</hello><world>Helen</world></foo>');
      var config = {
        incrementalPath: "/foo",
        format: "xml",
        pathSelector: "/",
        responseFieldLevelMappings: {
          "id": "/foo/hello/text()",
          "name": "/foo/world/text()"
        }
      };
      var request = httpAdapter.buildRequest(config, {version: "v8"});
      var response = httpAdapter.ajax("post", null, request);
      response.then(function(resp) {
        var mappedResponse = httpAdapter.handleResponse(resp, config);
        expect(mappedResponse).to.deep.equal({
          id: "10",
          name: "Helen"
        });
      });
      $httpBackend.flush();
    });
  });

})(window.module, window.inject, angular);
