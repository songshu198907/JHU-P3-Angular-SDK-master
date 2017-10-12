(function(angular) {

  /**
  Model service for UserSurvey
  @module VaccineSurveySdk
  @submodule models
  @class $userSurvey
  */
  angular.module("VaccineSurveySdk.models")
    .factory("$userSurvey", ["$vaccineSurveySdkDispatcher", "$modelFactory", function($vaccineSurveySdkDispatcher, $modelFactory) {

      var UserSurvey = $modelFactory.create(
        $vaccineSurveySdkDispatcher,
        {
          url: "/api/v2/user_surveys",

          name: "usersurvey",

          mapping: "user_surveys",

          ownerSdk: "VaccineSurveySdk",

          service: "$userSurvey",

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
              name: "completed_at",
              label: "completed_at",
              
              
              type: "string",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "completition",
              label: "completition",
              
              
              type: "integer",
              required: false,
              auto: false,
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
              name: "currentuseranswers",
              label: "currentuseranswers",
              
              
              type: "array",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "first_question",
              label: "first_question",
              
              
              type: "hash",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "first_question_id",
              label: "first_question_id",
              
              
              type: "integer",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "first_reminder",
              label: "first_reminder",
              
              
              type: "boolean",
              required: false,
              auto: false,
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
              name: "matched_videos",
              label: "matched_videos",
              
              
              type: "array",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "maternal_video_complete",
              label: "maternal_video_complete",
              
              
              type: "boolean",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "maternal_video_number",
              label: "maternal_video_number",
              
              
              type: "string",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "maternal_video_position",
              label: "maternal_video_position",
              
              
              type: "float",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "pediatric_video_complete",
              label: "pediatric_video_complete",
              
              
              type: "boolean",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "pediatric_video_number",
              label: "pediatric_video_number",
              
              
              type: "string",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "pediatric_video_position",
              label: "pediatric_video_position",
              
              
              type: "float",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "question_count",
              label: "question_count",
              
              
              type: "integer",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "second_reminder",
              label: "second_reminder",
              
              
              type: "boolean",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "survey_id",
              label: "survey_id",
              
              
              type: "integer",
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
            
            {
              name: "video_source_version",
              label: "video_source_version",
              
              
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
              name: "get_patients_survey",
              type: "ObjectQueryScope",
              
            },
            
            {
              name: "getfirstquestion",
              type: "ObjectQueryScope",
              
            },
            
            {
              name: "compelete_survey",
              type: "ObjectQueryScope",
              
            },
            
            {
              name: "get_video_survey",
              type: "ObjectQueryScope",
              
            },
            
            {
              name: "check_survey_exists",
              type: "AggregateQueryScope",
              
              aggregateField: "id"
              
            },
            
            {
              name: "check_survey_count",
              type: "ObjectQueryScope",
              
            },
            
            {
              name: "generate_csv_results",
              type: "ObjectQueryScope",
              
            },
            
          ],

          belongsTo: [
            
            {
              name: "survey",
              service: "$survey",
              opposite_object: "Survey",
              fk: "survey_id",
              pk: "id"
            },
            
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

      return UserSurvey;

    }]);

})(angular);
