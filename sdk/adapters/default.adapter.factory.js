(function(angular) {

  /**
  Default adapter for VaccineSurveySdk
  @module VaccineSurveySdk
  @submodule adapters
  @class $vaccineSurveySdkDefaultAdapter
  */
  angular.module("VaccineSurveySdk.adapters")
    .factory("$vaccineSurveySdkDefaultAdapter", ["$adapterFactory", function($adapterFactory) {
      return $adapterFactory.create({
        withCredentials: true
      });
    }]);

})(angular);
