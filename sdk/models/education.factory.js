(function(angular) {

  /**
  Model service for Education
  @module VaccineSurveySdk
  @submodule models
  @class $education
  */
  angular.module("VaccineSurveySdk.models")
    .factory("$education", ["$vaccineSurveySdkDispatcher", "$modelFactory", function($vaccineSurveySdkDispatcher, $modelFactory) {

      var Education = $modelFactory.create(
        $vaccineSurveySdkDispatcher,
        {
          url: "/api/v2/educations",

          name: "education",

          mapping: "educations",

          ownerSdk: "VaccineSurveySdk",

          service: "$education",

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
              name: "users",
              service: "$user",
              opposite_object: "User",
              fk: "education_id",
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

      return Education;

    }]);

})(angular);
