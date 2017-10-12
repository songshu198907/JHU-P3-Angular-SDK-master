(function(angular) {

  /**
  Model service for SendGrid
  @module VaccineSurveySdk
  @submodule models
  @class $sendGrid
  */
  angular.module("VaccineSurveySdk.models")
    .factory("$sendGrid", ["$vaccineSurveySdkDispatcher", "$modelFactory", function($vaccineSurveySdkDispatcher, $modelFactory) {

      var SendGrid = $modelFactory.create(
        $vaccineSurveySdkDispatcher,
        {
          url: "/api/v2/send_grids",

          name: "sendgrid",

          mapping: "SendGrid",

          ownerSdk: "VaccineSurveySdk",

          service: "$sendGrid",

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
          
          interface: "SendGrid",
          
          isDirectToSource: false,
          
          
          adapterConfigurations: {
            
            
            
            
            scopes: {
              
              
              
              
              
              
              
              
              
            }
          }
        }
      );

      return SendGrid;

    }]);

})(angular);
