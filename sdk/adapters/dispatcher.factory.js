(function(angular) {

  /**
  Dispatcher for VaccineSurveySdk
  @module VaccineSurveySdk
  @submodule adapters
  @class $vaccineSurveySdkDispatcher
  */
  angular.module("VaccineSurveySdk.adapters")
    .factory("$vaccineSurveySdkDispatcher",
      [
        "$dispatcherFactory",
        "$vaccineSurveySdkDefaultAdapter",
        function($dispatcherFactory, $vaccineSurveySdkDefaultAdapter) {

          var dispatcher = $dispatcherFactory.create({
            default: $vaccineSurveySdkDefaultAdapter
          });

          return dispatcher;

        }
      ]);

})(angular);
