(function(angular) {

  /**
  Model service for Survey
  @module VaccineSurveySdk
  @submodule models
  @class $survey
  */
  angular.module("VaccineSurveySdk.models")
    .factory("$survey", ["$vaccineSurveySdkDispatcher", "$modelFactory", function($vaccineSurveySdkDispatcher, $modelFactory) {

      var Survey = $modelFactory.create(
        $vaccineSurveySdkDispatcher,
        {
          url: "/api/v2/surveys",

          name: "survey",

          mapping: "surveys",

          ownerSdk: "VaccineSurveySdk",

          service: "$survey",

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
              name: "intervention_group",
              label: "intervention_group",
              
              
              type: "string",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "is_active",
              label: "is_active",
              
              
              type: "boolean",
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
              name: "patient_type",
              label: "patient_type",
              
              
              type: "integer",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "survey_type",
              label: "survey_type",
              
              
              type: "string",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "total_questions",
              label: "total_questions",
              
              
              type: "integer",
              required: true,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "version",
              label: "version",
              
              
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
              name: "create_copy",
              type: "ObjectQueryScope",
              
            },
            
            {
              name: "active_surveys_by_type_patient",
              type: "ObjectQueryScope",
              
            },
            
            {
              name: "get_sorted_surveys",
              type: "ObjectQueryScope",
              
            },
            
            {
              name: "delete_survey",
              type: "ObjectQueryScope",
              
            },
            
            {
              name: "generate_csv_results",
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
              fk: "survey_id",
              pk: "id"
            },
            
            {
              name: "usersurveys",
              service: "$userSurvey",
              opposite_object: "UserSurvey",
              fk: "survey_id",
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

      return Survey;

    }]);

})(angular);
