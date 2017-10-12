(function(angular) {

  /**
  Model service for UserAuditLogging
  @module VaccineSurveySdk
  @submodule models
  @class $userAuditLogging
  */
  angular.module("VaccineSurveySdk.models")
    .factory("$userAuditLogging", ["$vaccineSurveySdkDispatcher", "$modelFactory", function($vaccineSurveySdkDispatcher, $modelFactory) {

      var UserAuditLogging = $modelFactory.create(
        $vaccineSurveySdkDispatcher,
        {
          url: "/api/v2/user_audit_loggings",

          name: "userauditlogging",

          mapping: "user_audit_logging",

          ownerSdk: "VaccineSurveySdk",

          service: "$userAuditLogging",

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
              name: "ip_address",
              label: "ip_address",
              
              
              type: "string",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "logged_in_at",
              label: "logged_in_at",
              
              
              type: "time",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "logged_out_at",
              label: "logged_out_at",
              
              
              type: "time",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "user_agent",
              label: "user_agent",
              
              
              type: "string",
              required: false,
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
            
            {
              name: "user_audit_export",
              type: "ObjectQueryScope",
              
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

      return UserAuditLogging;

    }]);

})(angular);
