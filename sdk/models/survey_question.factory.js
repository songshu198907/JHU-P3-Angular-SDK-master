(function(angular) {

  /**
  Model service for SurveyQuestion
  @module VaccineSurveySdk
  @submodule models
  @class $surveyQuestion
  */
  angular.module("VaccineSurveySdk.models")
    .factory("$surveyQuestion", ["$vaccineSurveySdkDispatcher", "$modelFactory", function($vaccineSurveySdkDispatcher, $modelFactory) {

      var SurveyQuestion = $modelFactory.create(
        $vaccineSurveySdkDispatcher,
        {
          url: "/api/v2/survey_questions",

          name: "surveyquestion",

          mapping: "survey_questions",

          ownerSdk: "VaccineSurveySdk",

          service: "$surveyQuestion",

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
              name: "did_you_know_text",
              label: "did_you_know_text",
              
              
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
              name: "question_category_id",
              label: "question_category_id",
              
              
              type: "integer",
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
              required: true,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "question_text",
              label: "question_text",
              
              
              type: "string",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "question_type_id",
              label: "question_type_id",
              
              
              type: "integer",
              required: true,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "required_answer",
              label: "required_answer",
              
              
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
              required: true,
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
              name: "get_question_by_survey",
              type: "ObjectQueryScope",
              
            },
            
            {
              name: "delete_survey_question",
              type: "ObjectQueryScope",
              
            },
            
            {
              name: "get_question_by_question_code",
              type: "ObjectQueryScope",
              
            },
            
          ],

          belongsTo: [
            
            {
              name: "questioncategory",
              service: "$questionCategory",
              opposite_object: "QuestionCategory",
              fk: "question_category_id",
              pk: "id"
            },
            
            {
              name: "questioncode",
              service: "$questionCode",
              opposite_object: "QuestionCode",
              fk: "question_code_id",
              pk: "id"
            },
            
            {
              name: "questiontype",
              service: "$questionType",
              opposite_object: "QuestionType",
              fk: "question_type_id",
              pk: "id"
            },
            
            {
              name: "survey",
              service: "$survey",
              opposite_object: "Survey",
              fk: "survey_id",
              pk: "id"
            },
            
          ],

          hasOne: [
            
          ],

          hasMany: [
            
            {
              name: "surveyanswers",
              service: "$surveyAnswer",
              opposite_object: "SurveyAnswer",
              fk: "survey_question_id",
              pk: "id"
            },
            
            {
              name: "usersurveyanswers",
              service: "$userSurveyAnswer",
              opposite_object: "UserSurveyAnswer",
              fk: "survey_question_id",
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

      return SurveyQuestion;

    }]);

})(angular);
