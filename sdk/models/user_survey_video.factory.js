(function(angular) {

  /**
  Model service for UserSurveyVideo
  @module VaccineSurveySdk
  @submodule models
  @class $userSurveyVideo
  */
  angular.module("VaccineSurveySdk.models")
    .factory("$userSurveyVideo", ["$vaccineSurveySdkDispatcher", "$modelFactory", function($vaccineSurveySdkDispatcher, $modelFactory) {

      var UserSurveyVideo = $modelFactory.create(
        $vaccineSurveySdkDispatcher,
        {
          url: "/api/v2/user_survey_videos",

          name: "usersurveyvideo",

          mapping: "user_survey_videos",

          ownerSdk: "VaccineSurveySdk",

          service: "$userSurveyVideo",

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
              name: "is_complete",
              label: "is_complete",
              
              
              type: "boolean",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "sort_order",
              label: "sort_order",
              
              
              type: "integer",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "user_survey_id",
              label: "user_survey_id",
              
              
              type: "integer",
              required: true,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "video_number",
              label: "video_number",
              
              
              type: "integer",
              required: true,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "video_position",
              label: "video_position",
              
              
              type: "float",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "video_source_version",
              label: "video_source_version",
              
              
              type: "string",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "video_type",
              label: "video_type",
              
              
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
            
            {
              name: "get_videos_for_user_survey_id",
              type: "ObjectQueryScope",
              
            },
            
            {
              name: "get_video_by_id",
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

      return UserSurveyVideo;

    }]);

})(angular);
