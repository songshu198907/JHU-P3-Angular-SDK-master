(function(angular) {

  /**
  Model service for VaccinationReminder
  @module VaccineSurveySdk
  @submodule models
  @class $vaccinationReminder
  */
  angular.module("VaccineSurveySdk.models")
    .factory("$vaccinationReminder", ["$vaccineSurveySdkDispatcher", "$modelFactory", function($vaccineSurveySdkDispatcher, $modelFactory) {

      var VaccinationReminder = $modelFactory.create(
        $vaccineSurveySdkDispatcher,
        {
          url: "/api/v2/vaccination_reminders",

          name: "vaccinationreminder",

          mapping: "vaccination_reminders",

          ownerSdk: "VaccineSurveySdk",

          service: "$vaccinationReminder",

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
            
            {
              name: "message_text",
              label: "message_text",
              
              
              type: "string",
              required: true,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "trigger_days_from_dob",
              label: "trigger_days_from_dob",
              
              
              type: "integer",
              required: true,
              auto: false,
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
            
            {
              name: "sorted_by_trigger_days",
              type: "ObjectQueryScope",
              
            },
            
            {
              name: "send_vaccination_reminders",
              type: "ObjectQueryScope",
              
            },
            
          ],

          belongsTo: [
            
          ],

          hasOne: [
            
          ],

          hasMany: [
            
          ],
          
          interface: "Encrypted Mysql",
          
          isDirectToSource: false,
          
          
          adapterConfigurations: {
            
            
            
            
            scopes: {
              
              
              
              
              
              
              
              
              
              
              
              
              
            }
          }
        }
      );

      return VaccinationReminder;

    }]);

})(angular);
