(function(angular) {

  /**
  Model service for JobAuditLogging
  @module VaccineSurveySdk
  @submodule models
  @class $jobAuditLogging
  */
  angular.module("VaccineSurveySdk.models")
    .factory("$jobAuditLogging", ["$vaccineSurveySdkDispatcher", "$modelFactory", function($vaccineSurveySdkDispatcher, $modelFactory) {

      var JobAuditLogging = $modelFactory.create(
        $vaccineSurveySdkDispatcher,
        {
          url: "/api/v2/job_audit_loggings",

          name: "jobauditlogging",

          mapping: "job_audit_logging",

          ownerSdk: "VaccineSurveySdk",

          service: "$jobAuditLogging",

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
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "name",
              label: "name",
              
              
              type: "string",
              required: true,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "rows_effected",
              label: "rows_effected",
              
              
              type: "string",
              required: false,
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

      return JobAuditLogging;

    }]);

})(angular);
