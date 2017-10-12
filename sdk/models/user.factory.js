(function(angular) {

  /**
  Model service for User
  @module VaccineSurveySdk
  @submodule models
  @class $user
  */
  angular.module("VaccineSurveySdk.models")
    .factory("$user", ["$vaccineSurveySdkDispatcher", "$modelFactory", function($vaccineSurveySdkDispatcher, $modelFactory) {

      var User = $modelFactory.create(
        $vaccineSurveySdkDispatcher,
        {
          url: "/api/v2/users",

          name: "user",

          mapping: "users",

          ownerSdk: "VaccineSurveySdk",

          service: "$user",

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
              name: "actual_child_birth",
              label: "actual_child_birth",
              
              
              type: "date",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "address",
              label: "address",
              
              
              type: "string",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "cell_phone",
              label: "cell_phone",
              
              
              type: "string",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "city",
              label: "city",
              
              
              type: "string",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "clinician_code_id",
              label: "clinician_code_id",
              
              
              type: "integer",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "clinic_name",
              label: "clinic_name",
              
              
              type: "string",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "consent_accepted_on",
              label: "consent_accepted_on",
              
              
              type: "time",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "contact_cell_phone",
              label: "contact_cell_phone",
              
              
              type: "string",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "contact_email",
              label: "contact_email",
              
              
              type: "string",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "contact_home_phone",
              label: "contact_home_phone",
              
              
              type: "string",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "contact_name",
              label: "contact_name",
              
              
              type: "string",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "deactivated_on",
              label: "deactivated_on",
              
              
              type: "time",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "education_id",
              label: "education_id",
              
              
              type: "integer",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "email",
              label: "email",
              
              
              type: "string",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "expected_child_birth",
              label: "expected_child_birth",
              
              
              type: "date",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "first_name",
              label: "first_name",
              
              
              type: "string",
              required: true,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "has_contact_users",
              label: "has_contact_users",
              
              
              type: "boolean",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "home_phone",
              label: "home_phone",
              
              
              type: "string",
              required: false,
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
              name: "is_deactive",
              label: "is_deactive",
              
              
              type: "boolean",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "last_name",
              label: "last_name",
              
              
              type: "string",
              required: true,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "parent_relationship_type",
              label: "parent_relationship_type",
              
              
              type: "string",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "parent_user_id",
              label: "parent_user_id",
              
              
              type: "integer",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "password",
              label: "password",
              
              
              type: "string",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "password_confirmation",
              label: "password_confirmation",
              
              
              type: "string",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "password_digest",
              label: "password_digest",
              
              
              type: "string",
              required: false,
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
              name: "postal_code",
              label: "postal_code",
              
              
              type: "string",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "race_id",
              label: "race_id",
              
              
              type: "integer",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "reason_for_deactivation",
              label: "reason_for_deactivation",
              
              
              type: "string",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "reset_password",
              label: "reset_password",
              
              
              type: "boolean",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "role",
              label: "role",
              
              
              type: "string",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "state",
              label: "state",
              
              
              type: "string",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "updated_user_profile",
              label: "updated_user_profile",
              
              
              type: "boolean",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "vaccination_reminders",
              label: "vaccination_reminders",
              
              
              type: "boolean",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "x_session_id",
              label: "x_session_id",
              
              
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
              name: "reset_password",
              type: "ObjectQueryScope",
              
            },
            
            {
              name: "consent_accepted",
              type: "ObjectQueryScope",
              
            },
            
            {
              name: "deactivate",
              type: "ObjectQueryScope",
              
            },
            
            {
              name: "myprofile",
              type: "ObjectQueryScope",
              
            },
            
            {
              name: "get_my_contacts",
              type: "ObjectQueryScope",
              
            },
            
            {
              name: "get_patients_by_clinics",
              type: "ObjectQueryScope",
              
            },
            
            {
              name: "get_healthcare_by_clinic",
              type: "ObjectQueryScope",
              
            },
            
            {
              name: "patient_survey_export",
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
            
            {
              name: "education",
              service: "$education",
              opposite_object: "Education",
              fk: "education_id",
              pk: "id"
            },
            
            {
              name: "race",
              service: "$race",
              opposite_object: "Race",
              fk: "race_id",
              pk: "id"
            },
            
          ],

          hasOne: [
            
          ],

          hasMany: [
            
            {
              name: "userauditloggings",
              service: "$userAuditLogging",
              opposite_object: "UserAuditLogging",
              fk: "user_id",
              pk: "id"
            },
            
            {
              name: "searchauditloggings",
              service: "$searchAuditLogging",
              opposite_object: "SearchAuditLogging",
              fk: "user_id",
              pk: "id"
            },
            
            {
              name: "usersurveys",
              service: "$userSurvey",
              opposite_object: "UserSurvey",
              fk: "user_id",
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

      return User;

    }]);

})(angular);
