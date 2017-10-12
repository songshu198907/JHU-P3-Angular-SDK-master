(function(angular) {

  /**
  Model service for QuestionCode
  @module VaccineSurveySdk
  @submodule models
  @class $questionCode
  */
  angular.module("VaccineSurveySdk.models")
    .factory("$questionCode", ["$vaccineSurveySdkDispatcher", "$modelFactory", function($vaccineSurveySdkDispatcher, $modelFactory) {

      var QuestionCode = $modelFactory.create(
        $vaccineSurveySdkDispatcher,
        {
          url: "/api/v2/question_codes",

          name: "questioncode",

          mapping: "question_codes",

          ownerSdk: "VaccineSurveySdk",

          service: "$questionCode",

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
              name: "name",
              label: "name",
              
              
              type: "string",
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
              name: "sorted_by_name",
              type: "ObjectQueryScope",
              
            },
            
          ],

          belongsTo: [
            
          ],

          hasOne: [
            
          ],

          hasMany: [
            
            {
              name: "surveyquestions",
              service: "$surveyQuestion",
              opposite_object: "SurveyQuestion",
              fk: "question_code_id",
              pk: "id"
            },
            
            {
              name: "usersurveyanswers",
              service: "$userSurveyAnswer",
              opposite_object: "UserSurveyAnswer",
              fk: "question_code_id",
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

      return QuestionCode;

    }]);

})(angular);
