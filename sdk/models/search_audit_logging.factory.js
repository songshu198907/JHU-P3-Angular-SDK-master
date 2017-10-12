(function(angular) {

  /**
  Model service for SearchAuditLogging
  @module VaccineSurveySdk
  @submodule models
  @class $searchAuditLogging
  */
  angular.module("VaccineSurveySdk.models")
    .factory("$searchAuditLogging", ["$vaccineSurveySdkDispatcher", "$modelFactory", function($vaccineSurveySdkDispatcher, $modelFactory) {

      var SearchAuditLogging = $modelFactory.create(
        $vaccineSurveySdkDispatcher,
        {
          url: "/api/v2/search_audit_loggings",

          name: "searchauditlogging",

          mapping: "search_audit_logging",

          ownerSdk: "VaccineSurveySdk",

          service: "$searchAuditLogging",

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
              name: "created_at",
              label: "created_at",
              
              
              type: "time",
              required: true,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "search_term",
              label: "search_term",
              
              
              type: "string",
              required: true,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "user_id",
              label: "user_id",
              
              
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
            
          ],

          belongsTo: [
            
            {
              name: "user",
              service: "$user",
              opposite_object: "User",
              fk: "user_id",
              pk: "id"
            },
            
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

      return SearchAuditLogging;

    }]);

})(angular);
