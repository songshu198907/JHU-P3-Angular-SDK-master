(function(angular) {

  /**
  Model service for ClinicianCode
  @module VaccineSurveySdk
  @submodule models
  @class $clinicianCode
  */
  angular.module("VaccineSurveySdk.models")
    .factory("$clinicianCode", ["$vaccineSurveySdkDispatcher", "$modelFactory", function($vaccineSurveySdkDispatcher, $modelFactory) {

      var ClinicianCode = $modelFactory.create(
        $vaccineSurveySdkDispatcher,
        {
          url: "/api/v2/clinician_codes",

          name: "cliniciancode",

          mapping: "clinician_codes",

          ownerSdk: "VaccineSurveySdk",

          service: "$clinicianCode",

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
              name: "code",
              label: "code",
              
              
              type: "string",
              required: true,
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
              name: "clinicianblockrandomizers",
              service: "$clinicianBlockRandomizer",
              opposite_object: "ClinicianBlockRandomizer",
              fk: "clinician_code_id",
              pk: "id"
            },
            
            {
              name: "users",
              service: "$user",
              opposite_object: "User",
              fk: "clinician_code_id",
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

      return ClinicianCode;

    }]);

})(angular);
