(function(angular) {

  /**
  Model service for Topic
  @module VaccineSurveySdk
  @submodule models
  @class $topic
  */
  angular.module("VaccineSurveySdk.models")
    .factory("$topic", ["$vaccineSurveySdkDispatcher", "$modelFactory", function($vaccineSurveySdkDispatcher, $modelFactory) {

      var Topic = $modelFactory.create(
        $vaccineSurveySdkDispatcher,
        {
          url: "/api/v2/topics",

          name: "topic",

          mapping: "topics",

          ownerSdk: "VaccineSurveySdk",

          service: "$topic",

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
              name: "healthcareprovidercontents",
              service: "$healthcareProviderContent",
              opposite_object: "HealthcareProviderContent",
              fk: "topic_id",
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

      return Topic;

    }]);

})(angular);
