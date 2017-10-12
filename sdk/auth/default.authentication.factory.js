(function(angular) {

  angular.module("VaccineSurveySdk.authentication")
    .factory("$vaccineSurveySdkAuthentication",
      [
        "$authenticationManagerFactory",
        "$vaccineSurveySdkDispatcher",
        function($authenticationManagerFactory, $vaccineSurveySdkDispatcher) {

          var authentication = {};

          var manager = $authenticationManagerFactory.create($vaccineSurveySdkDispatcher);

          

          manager.addStrategy({
            
            matchField: "password",
            lookupField: "email",
            roleField: "role",
            
            strategyName: "password",
            strategyType: "Password"
          });

          

          return manager;
        }
      ]);

})(angular);
