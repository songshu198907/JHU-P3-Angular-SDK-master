YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "$adapterFactory",
        "$authenticationFactory",
        "$authenticationManagerFactory",
        "$authenticationStorageService",
        "$clinicianBlockRandomizer",
        "$clinicianCode",
        "$dispatcherFactory",
        "$education",
        "$healthcareProviderContent",
        "$helpers",
        "$httpAdapterFactory",
        "$httpClientFactory",
        "$jobAuditLogging",
        "$mockServerFactory",
        "$modelFactory",
        "$questionCategory",
        "$questionCode",
        "$questionType",
        "$race",
        "$searchAuditLogging",
        "$sendGrid",
        "$setting",
        "$survey",
        "$surveyAnswer",
        "$surveyQuestion",
        "$surveyQuestionSkipLogic",
        "$topic",
        "$twilio",
        "$user",
        "$userAuditLogging",
        "$userSurvey",
        "$userSurveyAnswer",
        "$userSurveyVideo",
        "$vaccinationReminder",
        "$vaccineSurveySdkDefaultAdapter",
        "$vaccineSurveySdkDispatcher",
        "$video",
        "$videoAuditLogging",
        "Adapter",
        "Authentication",
        "AuthenticationManager",
        "Dispatcher",
        "HttpClient",
        "MockServer",
        "Model",
        "ModelRegistry",
        "Resource",
        "{Cache}"
    ],
    "modules": [
        "AP",
        "VaccineSurveySdk",
        "adapter",
        "adapters",
        "authentication",
        "config",
        "model",
        "models",
        "ng",
        "utility"
    ],
    "allModules": [
        {
            "displayName": "adapter",
            "name": "adapter",
            "description": "This factory creates {Adapter} objects. An Adapter represents a connection to an API, and it is meant to handle how to configure an HttpClient\nin order to connect to its API. By default, an Adapter does nothing more than pass on the options for requests down to an HttpClient, but its\nmethods can easily be overrided to achieve custom behaviour.\nAlso, an Adapter instance can choose whether to send requests through its HttpClient or through its MockServer instance, in such funcionality\nhas been enabled."
        },
        {
            "displayName": "adapters",
            "name": "adapters",
            "description": "Default adapter for VaccineSurveySdk"
        },
        {
            "displayName": "AP",
            "name": "AP"
        },
        {
            "displayName": "authentication",
            "name": "authentication",
            "description": "Provides methods for user authentication and deauthentication.\n\nTo login:\n```\nApplicationDefinitionNameSdk.login({\n  username: \"johndoe\",\n  password: \"doe123\"\n});\n\nApplicationDefinitionNameSdk.isAuthenticated();\n// true\n```\n\nTo logout:\n```\nApplicationDefinitionNameSdk.logout();\n\nApplicationDefinitionNameSdk.isAuthenticated();\n// false\n```"
        },
        {
            "displayName": "config",
            "name": "config",
            "description": "Configuration service for VaccineSurveySdk"
        },
        {
            "displayName": "model",
            "name": "model",
            "description": "Factory that creates Model instances. A Model instance is a basically a service that exposes methods for CRUD operations and\nQuery Scopes. In order to create an instance, a dispatcher and a model definition must be passed as arguments. The dispatcher\nis needed so that the Model instance will know how to connect to the backend when its methods are called."
        },
        {
            "displayName": "models",
            "name": "models",
            "description": "Model service for ClinicianBlockRandomizer"
        },
        {
            "displayName": "ng",
            "name": "ng"
        },
        {
            "displayName": "utility",
            "name": "utility",
            "description": "Local cache class, uses ngStorage internally to persist data across sessions in the browser"
        },
        {
            "displayName": "VaccineSurveySdk",
            "name": "VaccineSurveySdk"
        }
    ]
} };
});