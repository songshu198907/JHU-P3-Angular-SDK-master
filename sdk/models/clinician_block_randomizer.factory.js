(function(angular) {

  /**
  Model service for ClinicianBlockRandomizer
  @module VaccineSurveySdk
  @submodule models
  @class $clinicianBlockRandomizer
  */
  angular.module("VaccineSurveySdk.models")
    .factory("$clinicianBlockRandomizer", ["$vaccineSurveySdkDispatcher", "$modelFactory", function($vaccineSurveySdkDispatcher, $modelFactory) {

      var ClinicianBlockRandomizer = $modelFactory.create(
        $vaccineSurveySdkDispatcher,
        {
          url: "/api/v2/clinician_block_randomizers",

          name: "clinicianblockrandomizer",

          mapping: "clinic_block_randomizer",

          ownerSdk: "VaccineSurveySdk",

          service: "$clinicianBlockRandomizer",

          fields: [
            
            {
              name: "id",
              label: "id",
              
              
              type: "integer",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "clinician_code_id",
              label: "clinician_code_id",
              
              
              type: "integer",
              required: true,
              auto: false,
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
              name: "patient_type",
              label: "patient_type",
              
              
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
              name: "sorted_by_clinic_id",
              type: "ObjectQueryScope",
              
            },
            
            {
              name: "filter_by_clinic_id",
              type: "ObjectQueryScope",
              
            },
            
          ],

          belongsTo: [
            
            {
              name: "cliniciancode",
              service: "$clinicianCode",
              opposite_object: "ClinicianCode",
              fk: "clinician_code_id",
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

      return ClinicianBlockRandomizer;

    }]);

})(angular);
