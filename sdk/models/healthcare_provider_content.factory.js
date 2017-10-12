(function(angular) {

  /**
  Model service for HealthcareProviderContent
  @module VaccineSurveySdk
  @submodule models
  @class $healthcareProviderContent
  */
  angular.module("VaccineSurveySdk.models")
    .factory("$healthcareProviderContent", ["$vaccineSurveySdkDispatcher", "$modelFactory", function($vaccineSurveySdkDispatcher, $modelFactory) {

      var HealthcareProviderContent = $modelFactory.create(
        $vaccineSurveySdkDispatcher,
        {
          url: "/api/v2/healthcare_provider_contents",

          name: "healthcareprovidercontent",

          mapping: "healthcare_provider_contents",

          ownerSdk: "VaccineSurveySdk",

          service: "$healthcareProviderContent",

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
              name: "category_group",
              label: "category_group",
              
              
              type: "string",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "desc",
              label: "desc",
              
              
              type: "string",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "external_link",
              label: "external_link",
              
              
              type: "string",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "keywords",
              label: "keywords",
              
              
              type: "string",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "title",
              label: "title",
              
              
              type: "string",
              required: true,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "topic_id",
              label: "topic_id",
              
              
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
              name: "search_content",
              type: "ObjectQueryScope",
              
            },
            
            {
              name: "sorted_by_name",
              type: "ObjectQueryScope",
              
            },
            
            {
              name: "filter_by_category_group",
              type: "ObjectQueryScope",
              
            },
            
          ],

          belongsTo: [
            
            {
              name: "topic",
              service: "$topic",
              opposite_object: "Topic",
              fk: "topic_id",
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

      return HealthcareProviderContent;

    }]);

})(angular);
