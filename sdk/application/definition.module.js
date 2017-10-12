(function(angular) {

  /**
  @module VaccineSurveySdk
  */
  angular.module("VaccineSurveySdk", [
    "VaccineSurveySdk.adapters",
    "VaccineSurveySdk.config",
    "VaccineSurveySdk.authentication",
    "VaccineSurveySdk.models"
  ])

  .run([function() {
    // Enable document.evaluate() function to evaluate XPath expressions
    // This requires wicked-good-xpath library
    if(typeof wgxpath !== "undefined" && wgxpath.install && wgxpath.install instanceof Function) {
      wgxpath.install();
    }

  }]);

})(angular);
