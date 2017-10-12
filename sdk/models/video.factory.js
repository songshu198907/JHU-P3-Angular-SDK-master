(function(angular) {

  /**
  Model service for Video
  @module VaccineSurveySdk
  @submodule models
  @class $video
  */
  angular.module("VaccineSurveySdk.models")
    .factory("$video", ["$vaccineSurveySdkDispatcher", "$modelFactory", function($vaccineSurveySdkDispatcher, $modelFactory) {

      var Video = $modelFactory.create(
        $vaccineSurveySdkDispatcher,
        {
          url: "/api/v2/videos",

          name: "video",

          mapping: "videos",

          ownerSdk: "VaccineSurveySdk",

          service: "$video",

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
              name: "desc",
              label: "desc",
              
              
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
              name: "keywords",
              label: "keywords",
              
              
              type: "string",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "length",
              label: "length",
              
              
              type: "float",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "question_group",
              label: "question_group",
              
              
              type: "string",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "sort_order",
              label: "sort_order",
              
              
              type: "integer",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "source_version",
              label: "source_version",
              
              
              type: "string",
              required: false,
              auto: false,
              file_url: false,
              file_type: "Image"
            },
            
            {
              name: "target_number",
              label: "target_number",
              
              
              type: "integer",
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
            
            {
              name: "video_url",
              label: "video_url",
              
              
              type: "string",
              required: false,
              auto: false,
              file_url: true,
              file_type: "Video"
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
              name: "search_video_scoped_by_race_edu",
              type: "ObjectQueryScope",
              
            },
            
            {
              name: "search_video_by_keyword",
              type: "ObjectQueryScope",
              
            },
            
            {
              name: "sorted_by_name",
              type: "ObjectQueryScope",
              
            },
            
            {
              name: "video_gallery",
              type: "ObjectQueryScope",
              
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

      return Video;

    }]);

})(angular);
