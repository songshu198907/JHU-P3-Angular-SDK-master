(function(angular) {

  /**
  Model service for Twilio
  @module VaccineSurveySdk
  @submodule models
  @class $twilio
  */
  angular.module("VaccineSurveySdk.models")
    .factory("$twilio", ["$vaccineSurveySdkDispatcher", "$modelFactory", function($vaccineSurveySdkDispatcher, $modelFactory) {

      var Twilio = $modelFactory.create(
        $vaccineSurveySdkDispatcher,
        {
          url: "/api/v2/twilios",

          name: "twilio",

          mapping: "Twilio",

          ownerSdk: "VaccineSurveySdk",

          service: "$twilio",

          fields: [
            
            {
              name: "id",
              label: "id",
              
              
              type: "integer",
              required: false,
              auto: true,
              file_url: false,
              file_type: "Image"
            },
            
          ],

          scopes: [
            
            {
              name: "all",
              type: "ObjectQueryScope",
              
            },
            
            {
              name: "exact_match",
              type: "ObjectQueryScope",
              
            },
            
            {
              name: "count",
              type: "AggregateQueryScope",
              
              aggregateField: "id"
              
            },
            
            {
              name: "count_exact_match",
              type: "AggregateQueryScope",
              
              aggregateField: "id"
              
            },
            
          ],

          belongsTo: [
            
          ],

          hasOne: [
            
          ],

          hasMany: [
            
          ],
          
          interface: "TwilioAPI",
          
          isDirectToSource: false,
          
          
          adapterConfigurations: {
            
            
            
            
            scopes: {
              
              
              
              
              
              
              
              
              
            }
          }
        }
      );

      return Twilio;

    }]);

})(angular);
