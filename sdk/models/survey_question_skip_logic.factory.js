(function(angular) {

  /**
  Model service for SurveyQuestionSkipLogic
  @module VaccineSurveySdk
  @submodule models
  @class $surveyQuestionSkipLogic
  */
  angular.module("VaccineSurveySdk.models")
    .factory("$surveyQuestionSkipLogic", ["$vaccineSurveySdkDispatcher", "$modelFactory", function($vaccineSurveySdkDispatcher, $modelFactory) {

      var SurveyQuestionSkipLogic = $modelFactory.create(
        $vaccineSurveySdkDispatcher,
        {
          url: "/api/v2/survey_question_skip_logics",

          name: "surveyquestionskiplogic",

          mapping: "survey_question_skip_logic",

          ownerSdk: "VaccineSurveySdk",

          service: "$surveyQuestionSkipLogic",

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
              name: "skip_question_codes",
              label: "skip_question_codes",
              
              
              type: "string",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "survey_answer_id",
              label: "survey_answer_id",
              
              
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
              name: "get_skip_logic_by_answers",
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

      return SurveyQuestionSkipLogic;

    }]);

})(angular);
