(function(angular) {

  /**
  Model service for QuestionCategory
  @module VaccineSurveySdk
  @submodule models
  @class $questionCategory
  */
  angular.module("VaccineSurveySdk.models")
    .factory("$questionCategory", ["$vaccineSurveySdkDispatcher", "$modelFactory", function($vaccineSurveySdkDispatcher, $modelFactory) {

      var QuestionCategory = $modelFactory.create(
        $vaccineSurveySdkDispatcher,
        {
          url: "/api/v2/question_categories",

          name: "questioncategory",

          mapping: "question_categories",

          ownerSdk: "VaccineSurveySdk",

          service: "$questionCategory",

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
              fk: "question_category_id",
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

      return QuestionCategory;

    }]);

})(angular);
