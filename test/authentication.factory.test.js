(function(module, inject, angular) {

  var expect = chai.expect;

  // LUKE!

  describe("Service - $authenticationFactory", function() {
    var $authenticationManagerFactory, $authenticationStorageService, $authenticationFactory, $httpBackend, $adapterFactory, $dispatcherFactory, manager, dispatcher, adapter, authentication;

    beforeEach(module("AP.authentication"));
    beforeEach(module("AP.adapter"));

    beforeEach(inject(function($injector) {
      $httpBackend = $injector.get("$httpBackend");
      $authenticationManagerFactory = $injector.get("$authenticationManagerFactory");
      $authenticationStorageService = $injector.get("$authenticationStorageService");
      $authenticationFactory = $injector.get("$authenticationFactory");
      $adapterFactory = $injector.get("$adapterFactory");
      $dispatcherFactory = $injector.get("$dispatcherFactory");

      adapter = $adapterFactory.create({ url: "http://www.example.com" });
      dispatcher = $dispatcherFactory.create({ default: adapter });
      manager = $authenticationManagerFactory.create(dispatcher);
      authentication = $authenticationFactory.create(manager, {
        strategyName: "httpStrategy",
        strategyType: "Http"
      });
    }));

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it("should be defined", function() {
      expect($authenticationFactory).to.exist;
    });

    it("should create an authentication service that has a login method", function() {
      expect(authentication).to.respondTo("login");
    });

    it("should create an authentication service that has a logout method", function() {
      expect(authentication).to.respondTo("logout");
    });

    it("should create an authentication service that has a getUsername method", function() {
      expect(authentication).to.respondTo("getUsername");
    });

    it("should create an authentication service that has a getUserRole method", function() {
      expect(authentication).to.respondTo("getUserRole");
    });

    it("should send a POST request when authenticating", function() {
      $httpBackend.when("POST", "http://www.example.com/auth/httpStrategy/callback", { username: "foo", password: "bar" }).respond(JSON.stringify({ xSessionId: "aosidjaoisjd" }));
      expect(authentication).to.respondTo("login");
      authentication.login({ username: "foo", password: "bar" }).then(function() {
        expect(adapter.$restClient.headers).to.eql( { "X-Session-Id" : "aosidjaoisjd" } );
      });
      $httpBackend.flush();
    });

    it("should send a POST request when deauthenticating", function() {
      $httpBackend.when("POST", "http://www.example.com/auth/httpStrategy/callback", { username: "foo", password: "bar" }).respond(JSON.stringify({ xSessionId: "aosidjaoisjd" }));
      $httpBackend.when("POST", "http://www.example.com/auth/signout").respond("OK");
      expect(authentication).to.respondTo("login");
      expect(authentication).to.respondTo("logout");
      authentication.login({ username: "foo", password: "bar" }).then(function() {
        authentication.logout().then(function() {
          expect($authenticationStorageService.getSession("http://www.example.com")).to.eql(undefined);
        });
      });
      $httpBackend.flush();
    });

    it("should return a logged in user's username ", function()  {
      $httpBackend.when("POST", "http://www.example.com/auth/httpStrategy/callback", { username: "foo", password: "bar" }).respond(JSON.stringify({ xSessionId: "aosidjaoisjd", username: "foo" }));
      expect(authentication).to.respondTo("login");
      authentication.login({ username: "foo", password: "bar" }).then(function() {
        expect(authentication.getUsername()).to.eql( "foo" );
      });
      $httpBackend.flush();
    });

    it("should return a logged in user's role ", function()  {
      $httpBackend.when("POST", "http://www.example.com/auth/httpStrategy/callback", { username: "foo", password: "bar" }).respond(JSON.stringify({ xSessionId: "aosidjaoisjd", role: "manager" }));
      expect(authentication).to.respondTo("login");
      authentication.login({ username: "foo", password: "bar" }).then(function() {
        expect(authentication.getUserRole()).to.eql( "manager" );
      });
      $httpBackend.flush();
    });

  });

})(window.module, window.inject, angular);
