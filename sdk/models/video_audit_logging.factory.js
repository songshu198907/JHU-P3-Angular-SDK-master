(function(angular) {

  /**
  Model service for VideoAuditLogging
  @module VaccineSurveySdk
  @submodule models
  @class $videoAuditLogging
  */
  angular.module("VaccineSurveySdk.models")
    .factory("$videoAuditLogging", ["$vaccineSurveySdkDispatcher", "$modelFactory", function($vaccineSurveySdkDispatcher, $modelFactory) {

      var VideoAuditLogging = $modelFactory.create(
        $vaccineSurveySdkDispatcher,
        {
          url: "/api/v2/video_audit_loggings",

          name: "videoauditlogging",

          mapping: "video_audit_logging",

          ownerSdk: "VaccineSurveySdk",

          service: "$videoAuditLogging",

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
              name: "duration",
              label: "duration",
              
              
              type: "float",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "user_id",
              label: "user_id",
              
              
              type: "integer",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "video_id",
              label: "video_id",
              
              
              type: "integer",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "watched_entire_video",
              label: "watched_entire_video",
              
              
              type: "boolean",
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
            
            {
              name: "export_video_log",
              type: "ObjectQueryScope",
              
            },
            
            {
              name: "by_video_and_user_id",
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

      return VideoAuditLogging;

    }]);

})(angular);
