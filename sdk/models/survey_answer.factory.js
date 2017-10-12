(function(angular) {

  /**
  Model service for SurveyAnswer
  @module VaccineSurveySdk
  @submodule models
  @class $surveyAnswer
  */
  angular.module("VaccineSurveySdk.models")
    .factory("$surveyAnswer", ["$vaccineSurveySdkDispatcher", "$modelFactory", function($vaccineSurveySdkDispatcher, $modelFactory) {

      var SurveyAnswer = $modelFactory.create(
        $vaccineSurveySdkDispatcher,
        {
          url: "/api/v2/survey_answers",

          name: "surveyanswer",

          mapping: "survey_answers",

          ownerSdk: "VaccineSurveySdk",

          service: "$surveyAnswer",

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
              name: "allow_free_form",
              label: "allow_free_form",
              
              
              type: "boolean",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "free_form_data_type",
              label: "free_form_data_type",
              
              
              type: "string",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "label",
              label: "label",
              
              
              type: "string",
              required: true,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "sort_order",
              label: "sort_order",
              
              
              type: "integer",
              required: true,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "survey_question_id",
              label: "survey_question_id",
              
              
              type: "integer",
              required: true,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "video_target_number",
              label: "video_target_number",
              
              
              type: "integer",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "weight",
              label: "weight",
              
              
              type: "integer",
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
              name: "get_answers_by_question",
              type: "ObjectQueryScope",
              
            },
            
            {
              name: "delete_question_answer",
              type: "ObjectQueryScope",
              
            },
            
          ],

          belongsTo: [
            
            {
              name: "surveyquestion",
              service: "$surveyQuestion",
              opposite_object: "SurveyQuestion",
              fk: "survey_question_id",
              pk: "id"
            },
            
          ],

          hasOne: [
            
          ],

          hasMany: [
            
            {
              name: "usersurveyanswers",
              service: "$userSurveyAnswer",
              opposite_object: "UserSurveyAnswer",
              fk: "survey_answer_id",
              pk: "id"
            },
            
          ],
          
          interface: "Encrypted Mysql",
          
          isDirectToSource: false,
          
          
          adapterConfigurations: {
            
            
            
            
            scopes: {
              
              
              
              
              
              
              
              
              
              
              
              
              
            }
          }
        }
      );

      return SurveyAnswer;

    }]);

})(angular);
