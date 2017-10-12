(function(angular) {

  /**
  Model service for UserSurveyAnswer
  @module VaccineSurveySdk
  @submodule models
  @class $userSurveyAnswer
  */
  angular.module("VaccineSurveySdk.models")
    .factory("$userSurveyAnswer", ["$vaccineSurveySdkDispatcher", "$modelFactory", function($vaccineSurveySdkDispatcher, $modelFactory) {

      var UserSurveyAnswer = $modelFactory.create(
        $vaccineSurveySdkDispatcher,
        {
          url: "/api/v2/user_survey_answers",

          name: "usersurveyanswer",

          mapping: "user_survey_answers",

          ownerSdk: "VaccineSurveySdk",

          service: "$userSurveyAnswer",

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
              name: "applied_skip_logic_id",
              label: "applied_skip_logic_id",
              
              
              type: "integer",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "free_form_response",
              label: "free_form_response",
              
              
              type: "string",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "nextquestion",
              label: "nextquestion",
              
              
              type: "hash",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "previousquestion",
              label: "previousquestion",
              
              
              type: "hash",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "question_code_id",
              label: "question_code_id",
              
              
              type: "integer",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "question_group",
              label: "question_group",
              
              
              type: "string",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "question_order",
              label: "question_order",
              
              
              type: "integer",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "skipped",
              label: "skipped",
              
              
              type: "boolean",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "survey_answer_id",
              label: "survey_answer_id",
              
              
              type: "integer",
              required: false,
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
              name: "user_survey_id",
              label: "user_survey_id",
              
              
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
              name: "previousquestion",
              type: "ObjectQueryScope",
              
            },
            
          ],

          belongsTo: [
            
            {
              name: "questioncode",
              service: "$questionCode",
              opposite_object: "QuestionCode",
              fk: "question_code_id",
              pk: "id"
            },
            
            {
              name: "surveyanswer",
              service: "$surveyAnswer",
              opposite_object: "SurveyAnswer",
              fk: "survey_answer_id",
              pk: "id"
            },
            
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
            
          ],
          
          interface: "Encrypted Mysql",
          
          isDirectToSource: false,
          
          
          adapterConfigurations: {
            
            
            
            
            scopes: {
              
              
              
              
              
              
              
              
              
              
              
            }
          }
        }
      );

      return UserSurveyAnswer;

    }]);

})(angular);
