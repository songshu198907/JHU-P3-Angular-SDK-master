(function(angular) {

  /**
  Model service for Setting
  @module VaccineSurveySdk
  @submodule models
  @class $setting
  */
  angular.module("VaccineSurveySdk.models")
    .factory("$setting", ["$vaccineSurveySdkDispatcher", "$modelFactory", function($vaccineSurveySdkDispatcher, $modelFactory) {

      var Setting = $modelFactory.create(
        $vaccineSurveySdkDispatcher,
        {
          url: "/api/v2/settings",

          name: "setting",

          mapping: "settings",

          ownerSdk: "VaccineSurveySdk",

          service: "$setting",

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
              name: "aws_healthcare_content_bucket_name",
              label: "aws_healthcare_content_bucket_name",
              
              
              type: "string",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "aws_video_bucket_name",
              label: "aws_video_bucket_name",
              
              
              type: "string",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "contact_user_registration_email_text",
              label: "contact_user_registration_email_text",
              
              
              type: "string",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "contact_user_registration_subject",
              label: "contact_user_registration_subject",
              
              
              type: "string",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "forgot_password_email_text",
              label: "forgot_password_email_text",
              
              
              type: "string",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "forgot_password_subject",
              label: "forgot_password_subject",
              
              
              type: "string",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "from_email",
              label: "from_email",
              
              
              type: "string",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "sms_phone_number",
              label: "sms_phone_number",
              
              
              type: "string",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "survey_completion_email_subject",
              label: "survey_completion_email_subject",
              
              
              type: "string",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "survey_completion_email_text",
              label: "survey_completion_email_text",
              
              
              type: "string",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "survey_notification_email_text",
              label: "survey_notification_email_text",
              
              
              type: "string",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "survey_notification_final_sms_text",
              label: "survey_notification_final_sms_text",
              
              
              type: "string",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "survey_notification_first_reminder_email_text",
              label: "survey_notification_first_reminder_email_text",
              
              
              type: "string",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "survey_notification_first_reminder_subject",
              label: "survey_notification_first_reminder_subject",
              
              
              type: "string",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "survey_notification_subject",
              label: "survey_notification_subject",
              
              
              type: "string",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "terms_and_conditions",
              label: "terms_and_conditions",
              
              
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

      return Setting;

    }]);

})(angular);
