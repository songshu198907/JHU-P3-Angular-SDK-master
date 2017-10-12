(function(angular) {

  /**
  @module VaccineSurveySdk
  @submodule adapters
  */
  var sdk = angular.module("VaccineSurveySdk.adapters", ["AP"]);

  sdk.run(["$injector", function($injector) {

    var httpAdapters = [];
    
    
    

    if(httpAdapters.length) {
      angular.forEach(httpAdapters, function(adapter) {
        $injector.get(adapter);
      });
    }

  }]);

})(angular);
