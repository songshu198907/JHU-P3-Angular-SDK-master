# VaccineSurveySdk

## Description

This should serve as a guide for the Angular SDK for `VaccineSurvey`

## Table of Contents


- [Project Structure](#project-structure)
- [Adding the SDK to your Application](#adding-the-sdk-to-your-application)
    - [Dependencies](#dependencies)
- [Setup and Initialize the SDK](#setup-and-initialize-the-sdk)
- [Local Caching](#local-caching)
- [Ajax Settings](#ajax-settings)
- [Authentication](#authentication)
- [File Uploads](#file-uploads)
- [Models](#models)

	- [ClinicianBlockRandomizer](#clinicianblockrandomizer)
		- [Create](#create-clinicianblockrandomizer)
		- [Read](#read-clinicianblockrandomizer)
    	- [Update](#update-clinicianblockrandomizer)
		- [Delete](#delete-clinicianblockrandomizer)
    	- [Query Scopes](#query-scopes-clinicianblockrandomizer)
		- [Relationships](#relationships-clinicianblockrandomizer)
	
	- [ClinicianCode](#cliniciancode)
		- [Create](#create-cliniciancode)
		- [Read](#read-cliniciancode)
    	- [Update](#update-cliniciancode)
		- [Delete](#delete-cliniciancode)
    	- [Query Scopes](#query-scopes-cliniciancode)
		- [Relationships](#relationships-cliniciancode)
	
	- [Education](#education)
		- [Create](#create-education)
		- [Read](#read-education)
    	- [Update](#update-education)
		- [Delete](#delete-education)
    	- [Query Scopes](#query-scopes-education)
		- [Relationships](#relationships-education)
	
	- [HealthcareProviderContent](#healthcareprovidercontent)
		- [Create](#create-healthcareprovidercontent)
		- [Read](#read-healthcareprovidercontent)
    	- [Update](#update-healthcareprovidercontent)
		- [Delete](#delete-healthcareprovidercontent)
    	- [Query Scopes](#query-scopes-healthcareprovidercontent)
		- [Relationships](#relationships-healthcareprovidercontent)
	
	- [JobAuditLogging](#jobauditlogging)
		- [Create](#create-jobauditlogging)
		- [Read](#read-jobauditlogging)
    	- [Update](#update-jobauditlogging)
		- [Delete](#delete-jobauditlogging)
    	- [Query Scopes](#query-scopes-jobauditlogging)
		
	
	- [QuestionCategory](#questioncategory)
		- [Create](#create-questioncategory)
		- [Read](#read-questioncategory)
    	- [Update](#update-questioncategory)
		- [Delete](#delete-questioncategory)
    	- [Query Scopes](#query-scopes-questioncategory)
		- [Relationships](#relationships-questioncategory)
	
	- [QuestionCode](#questioncode)
		- [Create](#create-questioncode)
		- [Read](#read-questioncode)
    	- [Update](#update-questioncode)
		- [Delete](#delete-questioncode)
    	- [Query Scopes](#query-scopes-questioncode)
		- [Relationships](#relationships-questioncode)
	
	- [QuestionType](#questiontype)
		- [Create](#create-questiontype)
		- [Read](#read-questiontype)
    	- [Update](#update-questiontype)
		- [Delete](#delete-questiontype)
    	- [Query Scopes](#query-scopes-questiontype)
		- [Relationships](#relationships-questiontype)
	
	- [Race](#race)
		- [Create](#create-race)
		- [Read](#read-race)
    	- [Update](#update-race)
		- [Delete](#delete-race)
    	- [Query Scopes](#query-scopes-race)
		- [Relationships](#relationships-race)
	
	- [SearchAuditLogging](#searchauditlogging)
		- [Create](#create-searchauditlogging)
		- [Read](#read-searchauditlogging)
    	- [Update](#update-searchauditlogging)
		- [Delete](#delete-searchauditlogging)
    	- [Query Scopes](#query-scopes-searchauditlogging)
		- [Relationships](#relationships-searchauditlogging)
	
	- [SendGrid](#sendgrid)
		- [Create](#create-sendgrid)
		- [Read](#read-sendgrid)
    	- [Update](#update-sendgrid)
		- [Delete](#delete-sendgrid)
    	- [Query Scopes](#query-scopes-sendgrid)
		
	
	- [Setting](#setting)
		- [Create](#create-setting)
		- [Read](#read-setting)
    	- [Update](#update-setting)
		- [Delete](#delete-setting)
    	- [Query Scopes](#query-scopes-setting)
		
	
	- [Survey](#survey)
		- [Create](#create-survey)
		- [Read](#read-survey)
    	- [Update](#update-survey)
		- [Delete](#delete-survey)
    	- [Query Scopes](#query-scopes-survey)
		- [Relationships](#relationships-survey)
	
	- [SurveyAnswer](#surveyanswer)
		- [Create](#create-surveyanswer)
		- [Read](#read-surveyanswer)
    	- [Update](#update-surveyanswer)
		- [Delete](#delete-surveyanswer)
    	- [Query Scopes](#query-scopes-surveyanswer)
		- [Relationships](#relationships-surveyanswer)
	
	- [SurveyQuestion](#surveyquestion)
		- [Create](#create-surveyquestion)
		- [Read](#read-surveyquestion)
    	- [Update](#update-surveyquestion)
		- [Delete](#delete-surveyquestion)
    	- [Query Scopes](#query-scopes-surveyquestion)
		- [Relationships](#relationships-surveyquestion)
	
	- [SurveyQuestionSkipLogic](#surveyquestionskiplogic)
		- [Create](#create-surveyquestionskiplogic)
		- [Read](#read-surveyquestionskiplogic)
    	- [Update](#update-surveyquestionskiplogic)
		- [Delete](#delete-surveyquestionskiplogic)
    	- [Query Scopes](#query-scopes-surveyquestionskiplogic)
		
	
	- [Topic](#topic)
		- [Create](#create-topic)
		- [Read](#read-topic)
    	- [Update](#update-topic)
		- [Delete](#delete-topic)
    	- [Query Scopes](#query-scopes-topic)
		- [Relationships](#relationships-topic)
	
	- [Twilio](#twilio)
		- [Create](#create-twilio)
		- [Read](#read-twilio)
    	- [Update](#update-twilio)
		- [Delete](#delete-twilio)
    	- [Query Scopes](#query-scopes-twilio)
		
	
	- [User](#user)
		- [Create](#create-user)
		- [Read](#read-user)
    	- [Update](#update-user)
		- [Delete](#delete-user)
    	- [Query Scopes](#query-scopes-user)
		- [Relationships](#relationships-user)
	
	- [UserAuditLogging](#userauditlogging)
		- [Create](#create-userauditlogging)
		- [Read](#read-userauditlogging)
    	- [Update](#update-userauditlogging)
		- [Delete](#delete-userauditlogging)
    	- [Query Scopes](#query-scopes-userauditlogging)
		- [Relationships](#relationships-userauditlogging)
	
	- [UserSurvey](#usersurvey)
		- [Create](#create-usersurvey)
		- [Read](#read-usersurvey)
    	- [Update](#update-usersurvey)
		- [Delete](#delete-usersurvey)
    	- [Query Scopes](#query-scopes-usersurvey)
		- [Relationships](#relationships-usersurvey)
	
	- [UserSurveyAnswer](#usersurveyanswer)
		- [Create](#create-usersurveyanswer)
		- [Read](#read-usersurveyanswer)
    	- [Update](#update-usersurveyanswer)
		- [Delete](#delete-usersurveyanswer)
    	- [Query Scopes](#query-scopes-usersurveyanswer)
		- [Relationships](#relationships-usersurveyanswer)
	
	- [UserSurveyVideo](#usersurveyvideo)
		- [Create](#create-usersurveyvideo)
		- [Read](#read-usersurveyvideo)
    	- [Update](#update-usersurveyvideo)
		- [Delete](#delete-usersurveyvideo)
    	- [Query Scopes](#query-scopes-usersurveyvideo)
		
	
	- [VaccinationReminder](#vaccinationreminder)
		- [Create](#create-vaccinationreminder)
		- [Read](#read-vaccinationreminder)
    	- [Update](#update-vaccinationreminder)
		- [Delete](#delete-vaccinationreminder)
    	- [Query Scopes](#query-scopes-vaccinationreminder)
		
	
	- [Video](#video)
		- [Create](#create-video)
		- [Read](#read-video)
    	- [Update](#update-video)
		- [Delete](#delete-video)
    	- [Query Scopes](#query-scopes-video)
		
	
	- [VideoAuditLogging](#videoauditlogging)
		- [Create](#create-videoauditlogging)
		- [Read](#read-videoauditlogging)
    	- [Update](#update-videoauditlogging)
		- [Delete](#delete-videoauditlogging)
    	- [Query Scopes](#query-scopes-videoauditlogging)
		
	
- [Development](#development)
    - [Developing with Grunt](#developing-with-grunt)
      - [Prerequisites](#prerequisites)
      - [Install NodeJS Modules](#install-nodejs-modules)
      - [Adding code to the SDK](#adding-code-to-the-sdk)
      - [Build for Production](#build-for-production)
      - [Manual Compilation](#manual-compilation)
      - [Automatic Compilation](#automatic-compilation)
- [Testing](#testing)

## <a name="project-structure"></a> Project Structure

General description of the files and folders you will find within this SDK project folder.

* ap_sdk.js - The main SDK file, this contains all the code for this SDK except for third-party dependencies
* **custom** - Convenience folder where you can keep any additional code to add to this SDK
* **docs** - This folder contains all the documentation generated, you will find a web-based guide you can open on your browser
* Gruntfile.js - Grunt configuration and tasks, if you want to add code to this SDK you can use Grunt for development
* LICENSE.txt - The SDK license
* **node_modules** - NPM dependencies for development and testing
* package.json - The library definition manifest containing description, version and dependencies of this SDK
* README.md - This file
* **sdk** - Here you will find all the SDK code
	* **adapter** - AP.adapter module
	* **adapters** - *Generated adapters*
	* **ap** - Anypresence namespace definition
	* **application** - Application class definition
	* **auth** - Authentication module
	* **lib** - Dependencies
	* **model** - Model module
	* **models** - *Generated Models*
	* **utility** - Utility module
* **test** - SDK unit tests for generic modules and classes as well as generated Models

## <a name="adding-the-sdk-to-your-application"></a> Adding the SDK to your Application

In order to include this SDK within your Application simply take the file `ap_sdk.js`, found in the SDK folder at the root level. This file contains the entire SDK code in one file **without** the dependencies like Angular. Take that file and copy it anywhere you want within you Application folder structure and just include it in your `index.html` using a <scripṭ/\> tag.

### <a name="dependencies"></a> Dependencies

All the SDK dependencies can be found in the path *SDK_ROOT/sdk/lib/*, where SDK_ROOT is the folder where this SDK is. You must add this dependencies for the SDK to work properly, however, note that you can download this dependencies yourself if you wish, you don't **have** to use the ones in the lib folder specifically, they are included there as a convenience.

## <a name="setup-and-initialize-the-sdk"></a> Setup and Initialize the SDK

To setup the SDK within your application, first you need to declare

```javascript
angular.module("myApp", ["VaccineSurveySdk"]);
```

That will give you access to your Model services from Controllers, Factories, Services and so on. To use the SDK you must first provide a base URL for your backend server. You can do this by calling `$vaccineSurveySdkConfig.baseUrl.set()`

```javascript
angular.module("myApp")
	.controller("MyController", ["$vaccineSurveySdkConfig", function($vaccineSurveySdkConfig) {

		$vaccineSurveySdkConfig.baseUrl.set("https://www.foo.com");

	}]);
```

## <a name="local-caching"></a> Local Caching

To have local caching on your SDK you just need to enable it. Bear in mind that local caching only caches GET requests.

Local caching is enabled and/or disabled ***globally***.

```javascript
angular.module("myApp")
	.controller("MyController", ["$vaccineSurveySdkConfig", function($vaccineSurveySdkConfig) {

		// Enable local caching
		$vaccineSurveySdkConfig.offlineCache.enable();
		// You can also disable it at any time
		$vaccineSurveySdkConfig.offlineCache.disable();

	}]);
```

## <a name="ajax-settings"></a> Ajax Settings

You can also modify the global ajax settings for your SDK. Here is an example

```javascript
angular.module("myApp")
  .controller("MyController", ["$vaccineSurveySdkConfig", function($vaccineSurveySdkConfig) {
    $vaccineSurveySdkConfig.ajaxSettings({
      headers: { "Foo": "Bar" },
      data: { "hello": "world" },
      withCredentials: true
    });
  }]);
```

The available settings are

* headers -> object
* params -> object
* data -> object
* withCredentials -> boolean
* requestTransformations -> Array of functions
* responseTransformations -> Array of functions

## <a name="authentication"></a> Authentication

Before you can authenticate with the SDK in your application  you must create an Auth Object in the Anypresence Designer and a user in your application's back end.

```javascript
angular.module("myApp")
  .controller("MyController", ["$vaccineSurveySdkAuthentication", function($vaccineSurveySdkAuthentication) {

    // To login
    $vaccineSurveySdkAuthentication.login({
      username: "johndoe",
      password: "doe123"
    });

    $vaccineSurveySdkAuthentication.isAuthenticated();
    // true

    // To logout
    $vaccineSurveySdkAuthentication.logout();

    $vaccineSurveySdkAuthentication.isAuthenticated();
    // false

	}]);
```

## <a name="file-uploads"></a> File Uploads

Models in the SDK may have fields which are files. Uploading files is already baked into the Model class, so just set that field to a file and use the `.$save()` method in the model. If you would like to remove a file, just set that same field to `null` and save it. You may need to use a directive to pull the files from an input type="file". Once a file has been uploaded, the contents of that field will be replaced for a URI string to locate the file itself.

Here's an example of how you can save a Model containing file fields. First we need to obtain the file from an input with type file

HTML

```html
<!-- Modeling a candidate for a job listing  -->
<!-- the first name of the candidate -->
<input type="text" ng-model="name">
<!-- the last name of the candidate -->
<input type="text" ng-model="lastname">
<!-- the candidate's resume -->
<input type="file" file-upload>
```

JS

```javascript
angular.module("myApp")
.directive('fileUpload', function () {
    return {
        scope: true,  //create a new scope
        link: function (scope, el, attrs) {
            el.bind('change', function (event) {
                var files = event.target.files;
                if(files && files.length) {
                  // emit the last file selected with the input
                  scope.$emit("fileSelected", { file: files[i] });
                }
            });
        }
    };
})
.controller("TestController", ["$scope", "$candidate", function($scope, $candidate) {

  $scope.name = undefined;
  $scope.lastname = undefined;
  $scope.resume = undefined;

  //listen for the file selected event
  $scope.$on("fileSelected", function (event, args) {
      $scope.$apply(function () {
          // set the resume as the emitted file
          $scope.resume = args.file;
      });
  });

  $scope.create = function() {
    var attr = { name: $scope.name, lastname: $scope.lastname, resume: $scope.resume };
    var newCandidate = $candidate.create(attr);
    newCandidate
      .$save()
      .then(function() {
        // model got saved correctly
        // now if we inspect the resume field we will see that a url string came back directing to the resource
        console.log(newCandidate.resume);
      })
      .catch(function(err) {
        // there was an error
      });
  };

}]);
```

Now when we get an instance `$candidate.get(...)`, all fields that are of type file will return as a URL to that file. For now the angular sdk does not support pulling the file data unfortunately.

## <a name="models"></a> Models

Available Model objects:

* ClinicianBlockRandomizer
* ClinicianCode
* Education
* HealthcareProviderContent
* JobAuditLogging
* QuestionCategory
* QuestionCode
* QuestionType
* Race
* SearchAuditLogging
* SendGrid
* Setting
* Survey
* SurveyAnswer
* SurveyQuestion
* SurveyQuestionSkipLogic
* Topic
* Twilio
* User
* UserAuditLogging
* UserSurvey
* UserSurveyAnswer
* UserSurveyVideo
* VaccinationReminder
* Video
* VideoAuditLogging

### <a name="clinicianblockrandomizer"></a>`ClinicianBlockRandomizer`

To use this model you have to inject `$clinicianBlockRandomizer`.


#### <a name="create-clinicianblockrandomizer"></a>Create

To create instances of `ClinicianBlockRandomizer` do:

```javascript
// The instance does not get saved to the server when created
var instance = $clinicianBlockRandomizer.create({ name: "John" });
instance.lastName = "Doe";
instance.age = 28;
// To save the instance do
instance.$save().then(function() {
	// The instance got saved
});
```

#### <a name="read-clinicianblockrandomizer"></a>Read

To read a specific instance by id you can do:

```javascript
$clinicianBlockRandomizer.get({ id: "1" }).then(function(response) {
	// The instance with id = "1" got fetched
	// instance data is in response.data
	console.log(response.data);
});
```

#### <a name="update-clinicianblockrandomizer"></a>Update

To update an instance you can call `instance.$save()` at any time. Updating will be triggered if the instance has an `id` field that is not `undefined`.

```javascript
// To update the instance pass an object containing the attributes you want to update to the $save method
instance.$save({
  age: 29
}).then(function() {
	// The instance got updated
});
```

#### <a name="delete-clinicianblockrandomizer"></a>Delete

To delete an instance:

```javascript
$clinicianBlockRandomizer.delete({ id: "1" }).then(function() {
	// The instance with id = "1" got deleted from the server
});
```


#### <a name="query-scopes-clinicianblockrandomizer"></a>Query Scopes


The available query scopes for `ClinicianBlockRandomizer` are:

* all
* exact_match
* count
* count_exact_match
* sorted_by_clinic_id
* filter_by_clinic_id

##### `all`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $clinicianBlockRandomizer.all();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $clinicianBlockRandomizer.all({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `exact_match`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $clinicianBlockRandomizer.exact_match();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $clinicianBlockRandomizer.exact_match({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `count`


To fetch the values of a query scope you can just call the query scope from the model. Aggregate scopes like this one return an Object with a single attribute. This attribute is always called `value` and it gets filled with the result of the query once the request comes back from the backend server.

```javascript
$scope.myScope = $clinicianBlockRandomizer.count();
console.log($scope.myScope.value); // Would print a value like "3000" or undefined if the request hasn't returned yet
```

##### `count_exact_match`


To fetch the values of a query scope you can just call the query scope from the model. Aggregate scopes like this one return an Object with a single attribute. This attribute is always called `value` and it gets filled with the result of the query once the request comes back from the backend server.

```javascript
$scope.myScope = $clinicianBlockRandomizer.count_exact_match();
console.log($scope.myScope.value); // Would print a value like "3000" or undefined if the request hasn't returned yet
```

##### `sorted_by_clinic_id`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $clinicianBlockRandomizer.sorted_by_clinic_id();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $clinicianBlockRandomizer.sorted_by_clinic_id({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `filter_by_clinic_id`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $clinicianBlockRandomizer.filter_by_clinic_id();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $clinicianBlockRandomizer.filter_by_clinic_id({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```




#### <a name="relationships-clinicianblockrandomizer"></a>Relationships

To access relationships within a Model there is an object within __all__ Models called `$related` that holds the defined relationships. Relationships act like query scopes, you can pass success and error callbacks to any of them and they always return an empty Array that will be filled when the request returns from the server.


##### Belongs To


###### `ClinicianCode`

```javascript
$clinicianBlockRandomizer.$related.cliniciancode(function(result) {
	// result will be an Array with the related models
	console.log("Success!!");
}, function() {
	console.log("Error :(");
});
```




### <a name="cliniciancode"></a>`ClinicianCode`

To use this model you have to inject `$clinicianCode`.


#### <a name="create-cliniciancode"></a>Create

To create instances of `ClinicianCode` do:

```javascript
// The instance does not get saved to the server when created
var instance = $clinicianCode.create({ name: "John" });
instance.lastName = "Doe";
instance.age = 28;
// To save the instance do
instance.$save().then(function() {
	// The instance got saved
});
```

#### <a name="read-cliniciancode"></a>Read

To read a specific instance by id you can do:

```javascript
$clinicianCode.get({ id: "1" }).then(function(response) {
	// The instance with id = "1" got fetched
	// instance data is in response.data
	console.log(response.data);
});
```

#### <a name="update-cliniciancode"></a>Update

To update an instance you can call `instance.$save()` at any time. Updating will be triggered if the instance has an `id` field that is not `undefined`.

```javascript
// To update the instance pass an object containing the attributes you want to update to the $save method
instance.$save({
  age: 29
}).then(function() {
	// The instance got updated
});
```

#### <a name="delete-cliniciancode"></a>Delete

To delete an instance:

```javascript
$clinicianCode.delete({ id: "1" }).then(function() {
	// The instance with id = "1" got deleted from the server
});
```


#### <a name="query-scopes-cliniciancode"></a>Query Scopes


The available query scopes for `ClinicianCode` are:

* all
* exact_match
* count
* count_exact_match
* sorted_by_name

##### `all`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $clinicianCode.all();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $clinicianCode.all({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `exact_match`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $clinicianCode.exact_match();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $clinicianCode.exact_match({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `count`


To fetch the values of a query scope you can just call the query scope from the model. Aggregate scopes like this one return an Object with a single attribute. This attribute is always called `value` and it gets filled with the result of the query once the request comes back from the backend server.

```javascript
$scope.myScope = $clinicianCode.count();
console.log($scope.myScope.value); // Would print a value like "3000" or undefined if the request hasn't returned yet
```

##### `count_exact_match`


To fetch the values of a query scope you can just call the query scope from the model. Aggregate scopes like this one return an Object with a single attribute. This attribute is always called `value` and it gets filled with the result of the query once the request comes back from the backend server.

```javascript
$scope.myScope = $clinicianCode.count_exact_match();
console.log($scope.myScope.value); // Would print a value like "3000" or undefined if the request hasn't returned yet
```

##### `sorted_by_name`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $clinicianCode.sorted_by_name();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $clinicianCode.sorted_by_name({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```




#### <a name="relationships-cliniciancode"></a>Relationships

To access relationships within a Model there is an object within __all__ Models called `$related` that holds the defined relationships. Relationships act like query scopes, you can pass success and error callbacks to any of them and they always return an empty Array that will be filled when the request returns from the server.




##### Has Many


###### ClinicianBlockRandomizer

```javascript
$clinicianCode.$related.clinicianblockrandomizers(function(result) {
	// result will be an Array with the related models
	console.log("Success!!");
}, function() {
	console.log("Error :(");
});
```

###### User

```javascript
$clinicianCode.$related.users(function(result) {
	// result will be an Array with the related models
	console.log("Success!!");
}, function() {
	console.log("Error :(");
});
```


### <a name="education"></a>`Education`

To use this model you have to inject `$education`.


#### <a name="create-education"></a>Create

To create instances of `Education` do:

```javascript
// The instance does not get saved to the server when created
var instance = $education.create({ name: "John" });
instance.lastName = "Doe";
instance.age = 28;
// To save the instance do
instance.$save().then(function() {
	// The instance got saved
});
```

#### <a name="read-education"></a>Read

To read a specific instance by id you can do:

```javascript
$education.get({ id: "1" }).then(function(response) {
	// The instance with id = "1" got fetched
	// instance data is in response.data
	console.log(response.data);
});
```

#### <a name="update-education"></a>Update

To update an instance you can call `instance.$save()` at any time. Updating will be triggered if the instance has an `id` field that is not `undefined`.

```javascript
// To update the instance pass an object containing the attributes you want to update to the $save method
instance.$save({
  age: 29
}).then(function() {
	// The instance got updated
});
```

#### <a name="delete-education"></a>Delete

To delete an instance:

```javascript
$education.delete({ id: "1" }).then(function() {
	// The instance with id = "1" got deleted from the server
});
```


#### <a name="query-scopes-education"></a>Query Scopes


The available query scopes for `Education` are:

* all
* exact_match
* count
* count_exact_match
* sorted_by_name

##### `all`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $education.all();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $education.all({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `exact_match`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $education.exact_match();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $education.exact_match({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `count`


To fetch the values of a query scope you can just call the query scope from the model. Aggregate scopes like this one return an Object with a single attribute. This attribute is always called `value` and it gets filled with the result of the query once the request comes back from the backend server.

```javascript
$scope.myScope = $education.count();
console.log($scope.myScope.value); // Would print a value like "3000" or undefined if the request hasn't returned yet
```

##### `count_exact_match`


To fetch the values of a query scope you can just call the query scope from the model. Aggregate scopes like this one return an Object with a single attribute. This attribute is always called `value` and it gets filled with the result of the query once the request comes back from the backend server.

```javascript
$scope.myScope = $education.count_exact_match();
console.log($scope.myScope.value); // Would print a value like "3000" or undefined if the request hasn't returned yet
```

##### `sorted_by_name`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $education.sorted_by_name();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $education.sorted_by_name({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```




#### <a name="relationships-education"></a>Relationships

To access relationships within a Model there is an object within __all__ Models called `$related` that holds the defined relationships. Relationships act like query scopes, you can pass success and error callbacks to any of them and they always return an empty Array that will be filled when the request returns from the server.




##### Has Many


###### User

```javascript
$education.$related.users(function(result) {
	// result will be an Array with the related models
	console.log("Success!!");
}, function() {
	console.log("Error :(");
});
```


### <a name="healthcareprovidercontent"></a>`HealthcareProviderContent`

To use this model you have to inject `$healthcareProviderContent`.


#### <a name="create-healthcareprovidercontent"></a>Create

To create instances of `HealthcareProviderContent` do:

```javascript
// The instance does not get saved to the server when created
var instance = $healthcareProviderContent.create({ name: "John" });
instance.lastName = "Doe";
instance.age = 28;
// To save the instance do
instance.$save().then(function() {
	// The instance got saved
});
```

#### <a name="read-healthcareprovidercontent"></a>Read

To read a specific instance by id you can do:

```javascript
$healthcareProviderContent.get({ id: "1" }).then(function(response) {
	// The instance with id = "1" got fetched
	// instance data is in response.data
	console.log(response.data);
});
```

#### <a name="update-healthcareprovidercontent"></a>Update

To update an instance you can call `instance.$save()` at any time. Updating will be triggered if the instance has an `id` field that is not `undefined`.

```javascript
// To update the instance pass an object containing the attributes you want to update to the $save method
instance.$save({
  age: 29
}).then(function() {
	// The instance got updated
});
```

#### <a name="delete-healthcareprovidercontent"></a>Delete

To delete an instance:

```javascript
$healthcareProviderContent.delete({ id: "1" }).then(function() {
	// The instance with id = "1" got deleted from the server
});
```


#### <a name="query-scopes-healthcareprovidercontent"></a>Query Scopes


The available query scopes for `HealthcareProviderContent` are:

* all
* exact_match
* count
* count_exact_match
* search_content
* sorted_by_name
* filter_by_category_group

##### `all`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $healthcareProviderContent.all();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $healthcareProviderContent.all({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `exact_match`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $healthcareProviderContent.exact_match();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $healthcareProviderContent.exact_match({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `count`


To fetch the values of a query scope you can just call the query scope from the model. Aggregate scopes like this one return an Object with a single attribute. This attribute is always called `value` and it gets filled with the result of the query once the request comes back from the backend server.

```javascript
$scope.myScope = $healthcareProviderContent.count();
console.log($scope.myScope.value); // Would print a value like "3000" or undefined if the request hasn't returned yet
```

##### `count_exact_match`


To fetch the values of a query scope you can just call the query scope from the model. Aggregate scopes like this one return an Object with a single attribute. This attribute is always called `value` and it gets filled with the result of the query once the request comes back from the backend server.

```javascript
$scope.myScope = $healthcareProviderContent.count_exact_match();
console.log($scope.myScope.value); // Would print a value like "3000" or undefined if the request hasn't returned yet
```

##### `search_content`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $healthcareProviderContent.search_content();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $healthcareProviderContent.search_content({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `sorted_by_name`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $healthcareProviderContent.sorted_by_name();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $healthcareProviderContent.sorted_by_name({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `filter_by_category_group`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $healthcareProviderContent.filter_by_category_group();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $healthcareProviderContent.filter_by_category_group({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```




#### <a name="relationships-healthcareprovidercontent"></a>Relationships

To access relationships within a Model there is an object within __all__ Models called `$related` that holds the defined relationships. Relationships act like query scopes, you can pass success and error callbacks to any of them and they always return an empty Array that will be filled when the request returns from the server.


##### Belongs To


###### `Topic`

```javascript
$healthcareProviderContent.$related.topic(function(result) {
	// result will be an Array with the related models
	console.log("Success!!");
}, function() {
	console.log("Error :(");
});
```




### <a name="jobauditlogging"></a>`JobAuditLogging`

To use this model you have to inject `$jobAuditLogging`.


#### <a name="create-jobauditlogging"></a>Create

To create instances of `JobAuditLogging` do:

```javascript
// The instance does not get saved to the server when created
var instance = $jobAuditLogging.create({ name: "John" });
instance.lastName = "Doe";
instance.age = 28;
// To save the instance do
instance.$save().then(function() {
	// The instance got saved
});
```

#### <a name="read-jobauditlogging"></a>Read

To read a specific instance by id you can do:

```javascript
$jobAuditLogging.get({ id: "1" }).then(function(response) {
	// The instance with id = "1" got fetched
	// instance data is in response.data
	console.log(response.data);
});
```

#### <a name="update-jobauditlogging"></a>Update

To update an instance you can call `instance.$save()` at any time. Updating will be triggered if the instance has an `id` field that is not `undefined`.

```javascript
// To update the instance pass an object containing the attributes you want to update to the $save method
instance.$save({
  age: 29
}).then(function() {
	// The instance got updated
});
```

#### <a name="delete-jobauditlogging"></a>Delete

To delete an instance:

```javascript
$jobAuditLogging.delete({ id: "1" }).then(function() {
	// The instance with id = "1" got deleted from the server
});
```


#### <a name="query-scopes-jobauditlogging"></a>Query Scopes


The available query scopes for `JobAuditLogging` are:

* all
* exact_match
* count
* count_exact_match

##### `all`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $jobAuditLogging.all();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $jobAuditLogging.all({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `exact_match`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $jobAuditLogging.exact_match();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $jobAuditLogging.exact_match({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `count`


To fetch the values of a query scope you can just call the query scope from the model. Aggregate scopes like this one return an Object with a single attribute. This attribute is always called `value` and it gets filled with the result of the query once the request comes back from the backend server.

```javascript
$scope.myScope = $jobAuditLogging.count();
console.log($scope.myScope.value); // Would print a value like "3000" or undefined if the request hasn't returned yet
```

##### `count_exact_match`


To fetch the values of a query scope you can just call the query scope from the model. Aggregate scopes like this one return an Object with a single attribute. This attribute is always called `value` and it gets filled with the result of the query once the request comes back from the backend server.

```javascript
$scope.myScope = $jobAuditLogging.count_exact_match();
console.log($scope.myScope.value); // Would print a value like "3000" or undefined if the request hasn't returned yet
```




### <a name="questioncategory"></a>`QuestionCategory`

To use this model you have to inject `$questionCategory`.


#### <a name="create-questioncategory"></a>Create

To create instances of `QuestionCategory` do:

```javascript
// The instance does not get saved to the server when created
var instance = $questionCategory.create({ name: "John" });
instance.lastName = "Doe";
instance.age = 28;
// To save the instance do
instance.$save().then(function() {
	// The instance got saved
});
```

#### <a name="read-questioncategory"></a>Read

To read a specific instance by id you can do:

```javascript
$questionCategory.get({ id: "1" }).then(function(response) {
	// The instance with id = "1" got fetched
	// instance data is in response.data
	console.log(response.data);
});
```

#### <a name="update-questioncategory"></a>Update

To update an instance you can call `instance.$save()` at any time. Updating will be triggered if the instance has an `id` field that is not `undefined`.

```javascript
// To update the instance pass an object containing the attributes you want to update to the $save method
instance.$save({
  age: 29
}).then(function() {
	// The instance got updated
});
```

#### <a name="delete-questioncategory"></a>Delete

To delete an instance:

```javascript
$questionCategory.delete({ id: "1" }).then(function() {
	// The instance with id = "1" got deleted from the server
});
```


#### <a name="query-scopes-questioncategory"></a>Query Scopes


The available query scopes for `QuestionCategory` are:

* all
* exact_match
* count
* count_exact_match
* sorted_by_name

##### `all`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $questionCategory.all();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $questionCategory.all({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `exact_match`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $questionCategory.exact_match();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $questionCategory.exact_match({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `count`


To fetch the values of a query scope you can just call the query scope from the model. Aggregate scopes like this one return an Object with a single attribute. This attribute is always called `value` and it gets filled with the result of the query once the request comes back from the backend server.

```javascript
$scope.myScope = $questionCategory.count();
console.log($scope.myScope.value); // Would print a value like "3000" or undefined if the request hasn't returned yet
```

##### `count_exact_match`


To fetch the values of a query scope you can just call the query scope from the model. Aggregate scopes like this one return an Object with a single attribute. This attribute is always called `value` and it gets filled with the result of the query once the request comes back from the backend server.

```javascript
$scope.myScope = $questionCategory.count_exact_match();
console.log($scope.myScope.value); // Would print a value like "3000" or undefined if the request hasn't returned yet
```

##### `sorted_by_name`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $questionCategory.sorted_by_name();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $questionCategory.sorted_by_name({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```




#### <a name="relationships-questioncategory"></a>Relationships

To access relationships within a Model there is an object within __all__ Models called `$related` that holds the defined relationships. Relationships act like query scopes, you can pass success and error callbacks to any of them and they always return an empty Array that will be filled when the request returns from the server.




##### Has Many


###### SurveyQuestion

```javascript
$questionCategory.$related.surveyquestions(function(result) {
	// result will be an Array with the related models
	console.log("Success!!");
}, function() {
	console.log("Error :(");
});
```


### <a name="questioncode"></a>`QuestionCode`

To use this model you have to inject `$questionCode`.


#### <a name="create-questioncode"></a>Create

To create instances of `QuestionCode` do:

```javascript
// The instance does not get saved to the server when created
var instance = $questionCode.create({ name: "John" });
instance.lastName = "Doe";
instance.age = 28;
// To save the instance do
instance.$save().then(function() {
	// The instance got saved
});
```

#### <a name="read-questioncode"></a>Read

To read a specific instance by id you can do:

```javascript
$questionCode.get({ id: "1" }).then(function(response) {
	// The instance with id = "1" got fetched
	// instance data is in response.data
	console.log(response.data);
});
```

#### <a name="update-questioncode"></a>Update

To update an instance you can call `instance.$save()` at any time. Updating will be triggered if the instance has an `id` field that is not `undefined`.

```javascript
// To update the instance pass an object containing the attributes you want to update to the $save method
instance.$save({
  age: 29
}).then(function() {
	// The instance got updated
});
```

#### <a name="delete-questioncode"></a>Delete

To delete an instance:

```javascript
$questionCode.delete({ id: "1" }).then(function() {
	// The instance with id = "1" got deleted from the server
});
```


#### <a name="query-scopes-questioncode"></a>Query Scopes


The available query scopes for `QuestionCode` are:

* all
* exact_match
* count
* count_exact_match
* sorted_by_name

##### `all`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $questionCode.all();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $questionCode.all({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `exact_match`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $questionCode.exact_match();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $questionCode.exact_match({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `count`


To fetch the values of a query scope you can just call the query scope from the model. Aggregate scopes like this one return an Object with a single attribute. This attribute is always called `value` and it gets filled with the result of the query once the request comes back from the backend server.

```javascript
$scope.myScope = $questionCode.count();
console.log($scope.myScope.value); // Would print a value like "3000" or undefined if the request hasn't returned yet
```

##### `count_exact_match`


To fetch the values of a query scope you can just call the query scope from the model. Aggregate scopes like this one return an Object with a single attribute. This attribute is always called `value` and it gets filled with the result of the query once the request comes back from the backend server.

```javascript
$scope.myScope = $questionCode.count_exact_match();
console.log($scope.myScope.value); // Would print a value like "3000" or undefined if the request hasn't returned yet
```

##### `sorted_by_name`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $questionCode.sorted_by_name();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $questionCode.sorted_by_name({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```




#### <a name="relationships-questioncode"></a>Relationships

To access relationships within a Model there is an object within __all__ Models called `$related` that holds the defined relationships. Relationships act like query scopes, you can pass success and error callbacks to any of them and they always return an empty Array that will be filled when the request returns from the server.




##### Has Many


###### SurveyQuestion

```javascript
$questionCode.$related.surveyquestions(function(result) {
	// result will be an Array with the related models
	console.log("Success!!");
}, function() {
	console.log("Error :(");
});
```

###### UserSurveyAnswer

```javascript
$questionCode.$related.usersurveyanswers(function(result) {
	// result will be an Array with the related models
	console.log("Success!!");
}, function() {
	console.log("Error :(");
});
```


### <a name="questiontype"></a>`QuestionType`

To use this model you have to inject `$questionType`.


#### <a name="create-questiontype"></a>Create

To create instances of `QuestionType` do:

```javascript
// The instance does not get saved to the server when created
var instance = $questionType.create({ name: "John" });
instance.lastName = "Doe";
instance.age = 28;
// To save the instance do
instance.$save().then(function() {
	// The instance got saved
});
```

#### <a name="read-questiontype"></a>Read

To read a specific instance by id you can do:

```javascript
$questionType.get({ id: "1" }).then(function(response) {
	// The instance with id = "1" got fetched
	// instance data is in response.data
	console.log(response.data);
});
```

#### <a name="update-questiontype"></a>Update

To update an instance you can call `instance.$save()` at any time. Updating will be triggered if the instance has an `id` field that is not `undefined`.

```javascript
// To update the instance pass an object containing the attributes you want to update to the $save method
instance.$save({
  age: 29
}).then(function() {
	// The instance got updated
});
```

#### <a name="delete-questiontype"></a>Delete

To delete an instance:

```javascript
$questionType.delete({ id: "1" }).then(function() {
	// The instance with id = "1" got deleted from the server
});
```


#### <a name="query-scopes-questiontype"></a>Query Scopes


The available query scopes for `QuestionType` are:

* all
* exact_match
* count
* count_exact_match
* sorted_by_name

##### `all`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $questionType.all();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $questionType.all({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `exact_match`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $questionType.exact_match();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $questionType.exact_match({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `count`


To fetch the values of a query scope you can just call the query scope from the model. Aggregate scopes like this one return an Object with a single attribute. This attribute is always called `value` and it gets filled with the result of the query once the request comes back from the backend server.

```javascript
$scope.myScope = $questionType.count();
console.log($scope.myScope.value); // Would print a value like "3000" or undefined if the request hasn't returned yet
```

##### `count_exact_match`


To fetch the values of a query scope you can just call the query scope from the model. Aggregate scopes like this one return an Object with a single attribute. This attribute is always called `value` and it gets filled with the result of the query once the request comes back from the backend server.

```javascript
$scope.myScope = $questionType.count_exact_match();
console.log($scope.myScope.value); // Would print a value like "3000" or undefined if the request hasn't returned yet
```

##### `sorted_by_name`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $questionType.sorted_by_name();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $questionType.sorted_by_name({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```




#### <a name="relationships-questiontype"></a>Relationships

To access relationships within a Model there is an object within __all__ Models called `$related` that holds the defined relationships. Relationships act like query scopes, you can pass success and error callbacks to any of them and they always return an empty Array that will be filled when the request returns from the server.




##### Has Many


###### SurveyQuestion

```javascript
$questionType.$related.surveyquestions(function(result) {
	// result will be an Array with the related models
	console.log("Success!!");
}, function() {
	console.log("Error :(");
});
```


### <a name="race"></a>`Race`

To use this model you have to inject `$race`.


#### <a name="create-race"></a>Create

To create instances of `Race` do:

```javascript
// The instance does not get saved to the server when created
var instance = $race.create({ name: "John" });
instance.lastName = "Doe";
instance.age = 28;
// To save the instance do
instance.$save().then(function() {
	// The instance got saved
});
```

#### <a name="read-race"></a>Read

To read a specific instance by id you can do:

```javascript
$race.get({ id: "1" }).then(function(response) {
	// The instance with id = "1" got fetched
	// instance data is in response.data
	console.log(response.data);
});
```

#### <a name="update-race"></a>Update

To update an instance you can call `instance.$save()` at any time. Updating will be triggered if the instance has an `id` field that is not `undefined`.

```javascript
// To update the instance pass an object containing the attributes you want to update to the $save method
instance.$save({
  age: 29
}).then(function() {
	// The instance got updated
});
```

#### <a name="delete-race"></a>Delete

To delete an instance:

```javascript
$race.delete({ id: "1" }).then(function() {
	// The instance with id = "1" got deleted from the server
});
```


#### <a name="query-scopes-race"></a>Query Scopes


The available query scopes for `Race` are:

* all
* exact_match
* count
* count_exact_match
* sorted_by_name

##### `all`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $race.all();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $race.all({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `exact_match`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $race.exact_match();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $race.exact_match({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `count`


To fetch the values of a query scope you can just call the query scope from the model. Aggregate scopes like this one return an Object with a single attribute. This attribute is always called `value` and it gets filled with the result of the query once the request comes back from the backend server.

```javascript
$scope.myScope = $race.count();
console.log($scope.myScope.value); // Would print a value like "3000" or undefined if the request hasn't returned yet
```

##### `count_exact_match`


To fetch the values of a query scope you can just call the query scope from the model. Aggregate scopes like this one return an Object with a single attribute. This attribute is always called `value` and it gets filled with the result of the query once the request comes back from the backend server.

```javascript
$scope.myScope = $race.count_exact_match();
console.log($scope.myScope.value); // Would print a value like "3000" or undefined if the request hasn't returned yet
```

##### `sorted_by_name`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $race.sorted_by_name();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $race.sorted_by_name({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```




#### <a name="relationships-race"></a>Relationships

To access relationships within a Model there is an object within __all__ Models called `$related` that holds the defined relationships. Relationships act like query scopes, you can pass success and error callbacks to any of them and they always return an empty Array that will be filled when the request returns from the server.




##### Has Many


###### User

```javascript
$race.$related.users(function(result) {
	// result will be an Array with the related models
	console.log("Success!!");
}, function() {
	console.log("Error :(");
});
```


### <a name="searchauditlogging"></a>`SearchAuditLogging`

To use this model you have to inject `$searchAuditLogging`.


#### <a name="create-searchauditlogging"></a>Create

To create instances of `SearchAuditLogging` do:

```javascript
// The instance does not get saved to the server when created
var instance = $searchAuditLogging.create({ name: "John" });
instance.lastName = "Doe";
instance.age = 28;
// To save the instance do
instance.$save().then(function() {
	// The instance got saved
});
```

#### <a name="read-searchauditlogging"></a>Read

To read a specific instance by id you can do:

```javascript
$searchAuditLogging.get({ id: "1" }).then(function(response) {
	// The instance with id = "1" got fetched
	// instance data is in response.data
	console.log(response.data);
});
```

#### <a name="update-searchauditlogging"></a>Update

To update an instance you can call `instance.$save()` at any time. Updating will be triggered if the instance has an `id` field that is not `undefined`.

```javascript
// To update the instance pass an object containing the attributes you want to update to the $save method
instance.$save({
  age: 29
}).then(function() {
	// The instance got updated
});
```

#### <a name="delete-searchauditlogging"></a>Delete

To delete an instance:

```javascript
$searchAuditLogging.delete({ id: "1" }).then(function() {
	// The instance with id = "1" got deleted from the server
});
```


#### <a name="query-scopes-searchauditlogging"></a>Query Scopes


The available query scopes for `SearchAuditLogging` are:

* all
* exact_match
* count
* count_exact_match

##### `all`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $searchAuditLogging.all();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $searchAuditLogging.all({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `exact_match`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $searchAuditLogging.exact_match();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $searchAuditLogging.exact_match({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `count`


To fetch the values of a query scope you can just call the query scope from the model. Aggregate scopes like this one return an Object with a single attribute. This attribute is always called `value` and it gets filled with the result of the query once the request comes back from the backend server.

```javascript
$scope.myScope = $searchAuditLogging.count();
console.log($scope.myScope.value); // Would print a value like "3000" or undefined if the request hasn't returned yet
```

##### `count_exact_match`


To fetch the values of a query scope you can just call the query scope from the model. Aggregate scopes like this one return an Object with a single attribute. This attribute is always called `value` and it gets filled with the result of the query once the request comes back from the backend server.

```javascript
$scope.myScope = $searchAuditLogging.count_exact_match();
console.log($scope.myScope.value); // Would print a value like "3000" or undefined if the request hasn't returned yet
```



#### <a name="relationships-searchauditlogging"></a>Relationships

To access relationships within a Model there is an object within __all__ Models called `$related` that holds the defined relationships. Relationships act like query scopes, you can pass success and error callbacks to any of them and they always return an empty Array that will be filled when the request returns from the server.


##### Belongs To


###### `User`

```javascript
$searchAuditLogging.$related.user(function(result) {
	// result will be an Array with the related models
	console.log("Success!!");
}, function() {
	console.log("Error :(");
});
```




### <a name="sendgrid"></a>`SendGrid`

To use this model you have to inject `$sendGrid`.


#### <a name="create-sendgrid"></a>Create

To create instances of `SendGrid` do:

```javascript
// The instance does not get saved to the server when created
var instance = $sendGrid.create({ name: "John" });
instance.lastName = "Doe";
instance.age = 28;
// To save the instance do
instance.$save().then(function() {
	// The instance got saved
});
```

#### <a name="read-sendgrid"></a>Read

To read a specific instance by id you can do:

```javascript
$sendGrid.get({ id: "1" }).then(function(response) {
	// The instance with id = "1" got fetched
	// instance data is in response.data
	console.log(response.data);
});
```

#### <a name="update-sendgrid"></a>Update

To update an instance you can call `instance.$save()` at any time. Updating will be triggered if the instance has an `id` field that is not `undefined`.

```javascript
// To update the instance pass an object containing the attributes you want to update to the $save method
instance.$save({
  age: 29
}).then(function() {
	// The instance got updated
});
```

#### <a name="delete-sendgrid"></a>Delete

To delete an instance:

```javascript
$sendGrid.delete({ id: "1" }).then(function() {
	// The instance with id = "1" got deleted from the server
});
```


#### <a name="query-scopes-sendgrid"></a>Query Scopes


The available query scopes for `SendGrid` are:

* all
* exact_match
* count
* count_exact_match

##### `all`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $sendGrid.all();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $sendGrid.all({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `exact_match`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $sendGrid.exact_match();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $sendGrid.exact_match({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `count`


To fetch the values of a query scope you can just call the query scope from the model. Aggregate scopes like this one return an Object with a single attribute. This attribute is always called `value` and it gets filled with the result of the query once the request comes back from the backend server.

```javascript
$scope.myScope = $sendGrid.count();
console.log($scope.myScope.value); // Would print a value like "3000" or undefined if the request hasn't returned yet
```

##### `count_exact_match`


To fetch the values of a query scope you can just call the query scope from the model. Aggregate scopes like this one return an Object with a single attribute. This attribute is always called `value` and it gets filled with the result of the query once the request comes back from the backend server.

```javascript
$scope.myScope = $sendGrid.count_exact_match();
console.log($scope.myScope.value); // Would print a value like "3000" or undefined if the request hasn't returned yet
```




### <a name="setting"></a>`Setting`

To use this model you have to inject `$setting`.


#### <a name="create-setting"></a>Create

To create instances of `Setting` do:

```javascript
// The instance does not get saved to the server when created
var instance = $setting.create({ name: "John" });
instance.lastName = "Doe";
instance.age = 28;
// To save the instance do
instance.$save().then(function() {
	// The instance got saved
});
```

#### <a name="read-setting"></a>Read

To read a specific instance by id you can do:

```javascript
$setting.get({ id: "1" }).then(function(response) {
	// The instance with id = "1" got fetched
	// instance data is in response.data
	console.log(response.data);
});
```

#### <a name="update-setting"></a>Update

To update an instance you can call `instance.$save()` at any time. Updating will be triggered if the instance has an `id` field that is not `undefined`.

```javascript
// To update the instance pass an object containing the attributes you want to update to the $save method
instance.$save({
  age: 29
}).then(function() {
	// The instance got updated
});
```

#### <a name="delete-setting"></a>Delete

To delete an instance:

```javascript
$setting.delete({ id: "1" }).then(function() {
	// The instance with id = "1" got deleted from the server
});
```


#### <a name="query-scopes-setting"></a>Query Scopes


The available query scopes for `Setting` are:

* all
* exact_match
* count
* count_exact_match

##### `all`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $setting.all();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $setting.all({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `exact_match`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $setting.exact_match();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $setting.exact_match({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `count`


To fetch the values of a query scope you can just call the query scope from the model. Aggregate scopes like this one return an Object with a single attribute. This attribute is always called `value` and it gets filled with the result of the query once the request comes back from the backend server.

```javascript
$scope.myScope = $setting.count();
console.log($scope.myScope.value); // Would print a value like "3000" or undefined if the request hasn't returned yet
```

##### `count_exact_match`


To fetch the values of a query scope you can just call the query scope from the model. Aggregate scopes like this one return an Object with a single attribute. This attribute is always called `value` and it gets filled with the result of the query once the request comes back from the backend server.

```javascript
$scope.myScope = $setting.count_exact_match();
console.log($scope.myScope.value); // Would print a value like "3000" or undefined if the request hasn't returned yet
```




### <a name="survey"></a>`Survey`

To use this model you have to inject `$survey`.


#### <a name="create-survey"></a>Create

To create instances of `Survey` do:

```javascript
// The instance does not get saved to the server when created
var instance = $survey.create({ name: "John" });
instance.lastName = "Doe";
instance.age = 28;
// To save the instance do
instance.$save().then(function() {
	// The instance got saved
});
```

#### <a name="read-survey"></a>Read

To read a specific instance by id you can do:

```javascript
$survey.get({ id: "1" }).then(function(response) {
	// The instance with id = "1" got fetched
	// instance data is in response.data
	console.log(response.data);
});
```

#### <a name="update-survey"></a>Update

To update an instance you can call `instance.$save()` at any time. Updating will be triggered if the instance has an `id` field that is not `undefined`.

```javascript
// To update the instance pass an object containing the attributes you want to update to the $save method
instance.$save({
  age: 29
}).then(function() {
	// The instance got updated
});
```

#### <a name="delete-survey"></a>Delete

To delete an instance:

```javascript
$survey.delete({ id: "1" }).then(function() {
	// The instance with id = "1" got deleted from the server
});
```


#### <a name="query-scopes-survey"></a>Query Scopes


The available query scopes for `Survey` are:

* all
* exact_match
* count
* count_exact_match
* create_copy
* active_surveys_by_type_patient
* get_sorted_surveys
* delete_survey
* generate_csv_results

##### `all`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $survey.all();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $survey.all({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `exact_match`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $survey.exact_match();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $survey.exact_match({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `count`


To fetch the values of a query scope you can just call the query scope from the model. Aggregate scopes like this one return an Object with a single attribute. This attribute is always called `value` and it gets filled with the result of the query once the request comes back from the backend server.

```javascript
$scope.myScope = $survey.count();
console.log($scope.myScope.value); // Would print a value like "3000" or undefined if the request hasn't returned yet
```

##### `count_exact_match`


To fetch the values of a query scope you can just call the query scope from the model. Aggregate scopes like this one return an Object with a single attribute. This attribute is always called `value` and it gets filled with the result of the query once the request comes back from the backend server.

```javascript
$scope.myScope = $survey.count_exact_match();
console.log($scope.myScope.value); // Would print a value like "3000" or undefined if the request hasn't returned yet
```

##### `create_copy`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $survey.create_copy();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $survey.create_copy({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `active_surveys_by_type_patient`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $survey.active_surveys_by_type_patient();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $survey.active_surveys_by_type_patient({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `get_sorted_surveys`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $survey.get_sorted_surveys();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $survey.get_sorted_surveys({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `delete_survey`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $survey.delete_survey();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $survey.delete_survey({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `generate_csv_results`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $survey.generate_csv_results();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $survey.generate_csv_results({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```




#### <a name="relationships-survey"></a>Relationships

To access relationships within a Model there is an object within __all__ Models called `$related` that holds the defined relationships. Relationships act like query scopes, you can pass success and error callbacks to any of them and they always return an empty Array that will be filled when the request returns from the server.




##### Has Many


###### SurveyQuestion

```javascript
$survey.$related.surveyquestions(function(result) {
	// result will be an Array with the related models
	console.log("Success!!");
}, function() {
	console.log("Error :(");
});
```

###### UserSurvey

```javascript
$survey.$related.usersurveys(function(result) {
	// result will be an Array with the related models
	console.log("Success!!");
}, function() {
	console.log("Error :(");
});
```


### <a name="surveyanswer"></a>`SurveyAnswer`

To use this model you have to inject `$surveyAnswer`.


#### <a name="create-surveyanswer"></a>Create

To create instances of `SurveyAnswer` do:

```javascript
// The instance does not get saved to the server when created
var instance = $surveyAnswer.create({ name: "John" });
instance.lastName = "Doe";
instance.age = 28;
// To save the instance do
instance.$save().then(function() {
	// The instance got saved
});
```

#### <a name="read-surveyanswer"></a>Read

To read a specific instance by id you can do:

```javascript
$surveyAnswer.get({ id: "1" }).then(function(response) {
	// The instance with id = "1" got fetched
	// instance data is in response.data
	console.log(response.data);
});
```

#### <a name="update-surveyanswer"></a>Update

To update an instance you can call `instance.$save()` at any time. Updating will be triggered if the instance has an `id` field that is not `undefined`.

```javascript
// To update the instance pass an object containing the attributes you want to update to the $save method
instance.$save({
  age: 29
}).then(function() {
	// The instance got updated
});
```

#### <a name="delete-surveyanswer"></a>Delete

To delete an instance:

```javascript
$surveyAnswer.delete({ id: "1" }).then(function() {
	// The instance with id = "1" got deleted from the server
});
```


#### <a name="query-scopes-surveyanswer"></a>Query Scopes


The available query scopes for `SurveyAnswer` are:

* all
* exact_match
* count
* count_exact_match
* get_answers_by_question
* delete_question_answer

##### `all`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $surveyAnswer.all();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $surveyAnswer.all({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `exact_match`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $surveyAnswer.exact_match();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $surveyAnswer.exact_match({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `count`


To fetch the values of a query scope you can just call the query scope from the model. Aggregate scopes like this one return an Object with a single attribute. This attribute is always called `value` and it gets filled with the result of the query once the request comes back from the backend server.

```javascript
$scope.myScope = $surveyAnswer.count();
console.log($scope.myScope.value); // Would print a value like "3000" or undefined if the request hasn't returned yet
```

##### `count_exact_match`


To fetch the values of a query scope you can just call the query scope from the model. Aggregate scopes like this one return an Object with a single attribute. This attribute is always called `value` and it gets filled with the result of the query once the request comes back from the backend server.

```javascript
$scope.myScope = $surveyAnswer.count_exact_match();
console.log($scope.myScope.value); // Would print a value like "3000" or undefined if the request hasn't returned yet
```

##### `get_answers_by_question`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $surveyAnswer.get_answers_by_question();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $surveyAnswer.get_answers_by_question({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `delete_question_answer`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $surveyAnswer.delete_question_answer();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $surveyAnswer.delete_question_answer({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```




#### <a name="relationships-surveyanswer"></a>Relationships

To access relationships within a Model there is an object within __all__ Models called `$related` that holds the defined relationships. Relationships act like query scopes, you can pass success and error callbacks to any of them and they always return an empty Array that will be filled when the request returns from the server.


##### Belongs To


###### `SurveyQuestion`

```javascript
$surveyAnswer.$related.surveyquestion(function(result) {
	// result will be an Array with the related models
	console.log("Success!!");
}, function() {
	console.log("Error :(");
});
```



##### Has Many


###### UserSurveyAnswer

```javascript
$surveyAnswer.$related.usersurveyanswers(function(result) {
	// result will be an Array with the related models
	console.log("Success!!");
}, function() {
	console.log("Error :(");
});
```


### <a name="surveyquestion"></a>`SurveyQuestion`

To use this model you have to inject `$surveyQuestion`.


#### <a name="create-surveyquestion"></a>Create

To create instances of `SurveyQuestion` do:

```javascript
// The instance does not get saved to the server when created
var instance = $surveyQuestion.create({ name: "John" });
instance.lastName = "Doe";
instance.age = 28;
// To save the instance do
instance.$save().then(function() {
	// The instance got saved
});
```

#### <a name="read-surveyquestion"></a>Read

To read a specific instance by id you can do:

```javascript
$surveyQuestion.get({ id: "1" }).then(function(response) {
	// The instance with id = "1" got fetched
	// instance data is in response.data
	console.log(response.data);
});
```

#### <a name="update-surveyquestion"></a>Update

To update an instance you can call `instance.$save()` at any time. Updating will be triggered if the instance has an `id` field that is not `undefined`.

```javascript
// To update the instance pass an object containing the attributes you want to update to the $save method
instance.$save({
  age: 29
}).then(function() {
	// The instance got updated
});
```

#### <a name="delete-surveyquestion"></a>Delete

To delete an instance:

```javascript
$surveyQuestion.delete({ id: "1" }).then(function() {
	// The instance with id = "1" got deleted from the server
});
```


#### <a name="query-scopes-surveyquestion"></a>Query Scopes


The available query scopes for `SurveyQuestion` are:

* all
* exact_match
* count
* count_exact_match
* get_question_by_survey
* delete_survey_question
* get_question_by_question_code

##### `all`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $surveyQuestion.all();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $surveyQuestion.all({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `exact_match`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $surveyQuestion.exact_match();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $surveyQuestion.exact_match({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `count`


To fetch the values of a query scope you can just call the query scope from the model. Aggregate scopes like this one return an Object with a single attribute. This attribute is always called `value` and it gets filled with the result of the query once the request comes back from the backend server.

```javascript
$scope.myScope = $surveyQuestion.count();
console.log($scope.myScope.value); // Would print a value like "3000" or undefined if the request hasn't returned yet
```

##### `count_exact_match`


To fetch the values of a query scope you can just call the query scope from the model. Aggregate scopes like this one return an Object with a single attribute. This attribute is always called `value` and it gets filled with the result of the query once the request comes back from the backend server.

```javascript
$scope.myScope = $surveyQuestion.count_exact_match();
console.log($scope.myScope.value); // Would print a value like "3000" or undefined if the request hasn't returned yet
```

##### `get_question_by_survey`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $surveyQuestion.get_question_by_survey();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $surveyQuestion.get_question_by_survey({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `delete_survey_question`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $surveyQuestion.delete_survey_question();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $surveyQuestion.delete_survey_question({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `get_question_by_question_code`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $surveyQuestion.get_question_by_question_code();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $surveyQuestion.get_question_by_question_code({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```




#### <a name="relationships-surveyquestion"></a>Relationships

To access relationships within a Model there is an object within __all__ Models called `$related` that holds the defined relationships. Relationships act like query scopes, you can pass success and error callbacks to any of them and they always return an empty Array that will be filled when the request returns from the server.


##### Belongs To


###### `QuestionCategory`

```javascript
$surveyQuestion.$related.questioncategory(function(result) {
	// result will be an Array with the related models
	console.log("Success!!");
}, function() {
	console.log("Error :(");
});
```

###### `QuestionCode`

```javascript
$surveyQuestion.$related.questioncode(function(result) {
	// result will be an Array with the related models
	console.log("Success!!");
}, function() {
	console.log("Error :(");
});
```

###### `QuestionType`

```javascript
$surveyQuestion.$related.questiontype(function(result) {
	// result will be an Array with the related models
	console.log("Success!!");
}, function() {
	console.log("Error :(");
});
```

###### `Survey`

```javascript
$surveyQuestion.$related.survey(function(result) {
	// result will be an Array with the related models
	console.log("Success!!");
}, function() {
	console.log("Error :(");
});
```



##### Has Many


###### SurveyAnswer

```javascript
$surveyQuestion.$related.surveyanswers(function(result) {
	// result will be an Array with the related models
	console.log("Success!!");
}, function() {
	console.log("Error :(");
});
```

###### UserSurveyAnswer

```javascript
$surveyQuestion.$related.usersurveyanswers(function(result) {
	// result will be an Array with the related models
	console.log("Success!!");
}, function() {
	console.log("Error :(");
});
```


### <a name="surveyquestionskiplogic"></a>`SurveyQuestionSkipLogic`

To use this model you have to inject `$surveyQuestionSkipLogic`.


#### <a name="create-surveyquestionskiplogic"></a>Create

To create instances of `SurveyQuestionSkipLogic` do:

```javascript
// The instance does not get saved to the server when created
var instance = $surveyQuestionSkipLogic.create({ name: "John" });
instance.lastName = "Doe";
instance.age = 28;
// To save the instance do
instance.$save().then(function() {
	// The instance got saved
});
```

#### <a name="read-surveyquestionskiplogic"></a>Read

To read a specific instance by id you can do:

```javascript
$surveyQuestionSkipLogic.get({ id: "1" }).then(function(response) {
	// The instance with id = "1" got fetched
	// instance data is in response.data
	console.log(response.data);
});
```

#### <a name="update-surveyquestionskiplogic"></a>Update

To update an instance you can call `instance.$save()` at any time. Updating will be triggered if the instance has an `id` field that is not `undefined`.

```javascript
// To update the instance pass an object containing the attributes you want to update to the $save method
instance.$save({
  age: 29
}).then(function() {
	// The instance got updated
});
```

#### <a name="delete-surveyquestionskiplogic"></a>Delete

To delete an instance:

```javascript
$surveyQuestionSkipLogic.delete({ id: "1" }).then(function() {
	// The instance with id = "1" got deleted from the server
});
```


#### <a name="query-scopes-surveyquestionskiplogic"></a>Query Scopes


The available query scopes for `SurveyQuestionSkipLogic` are:

* all
* exact_match
* count
* count_exact_match
* get_skip_logic_by_answers

##### `all`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $surveyQuestionSkipLogic.all();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $surveyQuestionSkipLogic.all({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `exact_match`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $surveyQuestionSkipLogic.exact_match();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $surveyQuestionSkipLogic.exact_match({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `count`


To fetch the values of a query scope you can just call the query scope from the model. Aggregate scopes like this one return an Object with a single attribute. This attribute is always called `value` and it gets filled with the result of the query once the request comes back from the backend server.

```javascript
$scope.myScope = $surveyQuestionSkipLogic.count();
console.log($scope.myScope.value); // Would print a value like "3000" or undefined if the request hasn't returned yet
```

##### `count_exact_match`


To fetch the values of a query scope you can just call the query scope from the model. Aggregate scopes like this one return an Object with a single attribute. This attribute is always called `value` and it gets filled with the result of the query once the request comes back from the backend server.

```javascript
$scope.myScope = $surveyQuestionSkipLogic.count_exact_match();
console.log($scope.myScope.value); // Would print a value like "3000" or undefined if the request hasn't returned yet
```

##### `get_skip_logic_by_answers`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $surveyQuestionSkipLogic.get_skip_logic_by_answers();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $surveyQuestionSkipLogic.get_skip_logic_by_answers({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```





### <a name="topic"></a>`Topic`

To use this model you have to inject `$topic`.


#### <a name="create-topic"></a>Create

To create instances of `Topic` do:

```javascript
// The instance does not get saved to the server when created
var instance = $topic.create({ name: "John" });
instance.lastName = "Doe";
instance.age = 28;
// To save the instance do
instance.$save().then(function() {
	// The instance got saved
});
```

#### <a name="read-topic"></a>Read

To read a specific instance by id you can do:

```javascript
$topic.get({ id: "1" }).then(function(response) {
	// The instance with id = "1" got fetched
	// instance data is in response.data
	console.log(response.data);
});
```

#### <a name="update-topic"></a>Update

To update an instance you can call `instance.$save()` at any time. Updating will be triggered if the instance has an `id` field that is not `undefined`.

```javascript
// To update the instance pass an object containing the attributes you want to update to the $save method
instance.$save({
  age: 29
}).then(function() {
	// The instance got updated
});
```

#### <a name="delete-topic"></a>Delete

To delete an instance:

```javascript
$topic.delete({ id: "1" }).then(function() {
	// The instance with id = "1" got deleted from the server
});
```


#### <a name="query-scopes-topic"></a>Query Scopes


The available query scopes for `Topic` are:

* all
* exact_match
* count
* count_exact_match
* sorted_by_name

##### `all`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $topic.all();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $topic.all({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `exact_match`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $topic.exact_match();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $topic.exact_match({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `count`


To fetch the values of a query scope you can just call the query scope from the model. Aggregate scopes like this one return an Object with a single attribute. This attribute is always called `value` and it gets filled with the result of the query once the request comes back from the backend server.

```javascript
$scope.myScope = $topic.count();
console.log($scope.myScope.value); // Would print a value like "3000" or undefined if the request hasn't returned yet
```

##### `count_exact_match`


To fetch the values of a query scope you can just call the query scope from the model. Aggregate scopes like this one return an Object with a single attribute. This attribute is always called `value` and it gets filled with the result of the query once the request comes back from the backend server.

```javascript
$scope.myScope = $topic.count_exact_match();
console.log($scope.myScope.value); // Would print a value like "3000" or undefined if the request hasn't returned yet
```

##### `sorted_by_name`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $topic.sorted_by_name();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $topic.sorted_by_name({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```




#### <a name="relationships-topic"></a>Relationships

To access relationships within a Model there is an object within __all__ Models called `$related` that holds the defined relationships. Relationships act like query scopes, you can pass success and error callbacks to any of them and they always return an empty Array that will be filled when the request returns from the server.




##### Has Many


###### HealthcareProviderContent

```javascript
$topic.$related.healthcareprovidercontents(function(result) {
	// result will be an Array with the related models
	console.log("Success!!");
}, function() {
	console.log("Error :(");
});
```


### <a name="twilio"></a>`Twilio`

To use this model you have to inject `$twilio`.


#### <a name="create-twilio"></a>Create

To create instances of `Twilio` do:

```javascript
// The instance does not get saved to the server when created
var instance = $twilio.create({ name: "John" });
instance.lastName = "Doe";
instance.age = 28;
// To save the instance do
instance.$save().then(function() {
	// The instance got saved
});
```

#### <a name="read-twilio"></a>Read

To read a specific instance by id you can do:

```javascript
$twilio.get({ id: "1" }).then(function(response) {
	// The instance with id = "1" got fetched
	// instance data is in response.data
	console.log(response.data);
});
```

#### <a name="update-twilio"></a>Update

To update an instance you can call `instance.$save()` at any time. Updating will be triggered if the instance has an `id` field that is not `undefined`.

```javascript
// To update the instance pass an object containing the attributes you want to update to the $save method
instance.$save({
  age: 29
}).then(function() {
	// The instance got updated
});
```

#### <a name="delete-twilio"></a>Delete

To delete an instance:

```javascript
$twilio.delete({ id: "1" }).then(function() {
	// The instance with id = "1" got deleted from the server
});
```


#### <a name="query-scopes-twilio"></a>Query Scopes


The available query scopes for `Twilio` are:

* all
* exact_match
* count
* count_exact_match

##### `all`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $twilio.all();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $twilio.all({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `exact_match`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $twilio.exact_match();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $twilio.exact_match({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `count`


To fetch the values of a query scope you can just call the query scope from the model. Aggregate scopes like this one return an Object with a single attribute. This attribute is always called `value` and it gets filled with the result of the query once the request comes back from the backend server.

```javascript
$scope.myScope = $twilio.count();
console.log($scope.myScope.value); // Would print a value like "3000" or undefined if the request hasn't returned yet
```

##### `count_exact_match`


To fetch the values of a query scope you can just call the query scope from the model. Aggregate scopes like this one return an Object with a single attribute. This attribute is always called `value` and it gets filled with the result of the query once the request comes back from the backend server.

```javascript
$scope.myScope = $twilio.count_exact_match();
console.log($scope.myScope.value); // Would print a value like "3000" or undefined if the request hasn't returned yet
```




### <a name="user"></a>`User`

To use this model you have to inject `$user`.


#### <a name="create-user"></a>Create

To create instances of `User` do:

```javascript
// The instance does not get saved to the server when created
var instance = $user.create({ name: "John" });
instance.lastName = "Doe";
instance.age = 28;
// To save the instance do
instance.$save().then(function() {
	// The instance got saved
});
```

#### <a name="read-user"></a>Read

To read a specific instance by id you can do:

```javascript
$user.get({ id: "1" }).then(function(response) {
	// The instance with id = "1" got fetched
	// instance data is in response.data
	console.log(response.data);
});
```

#### <a name="update-user"></a>Update

To update an instance you can call `instance.$save()` at any time. Updating will be triggered if the instance has an `id` field that is not `undefined`.

```javascript
// To update the instance pass an object containing the attributes you want to update to the $save method
instance.$save({
  age: 29
}).then(function() {
	// The instance got updated
});
```

#### <a name="delete-user"></a>Delete

To delete an instance:

```javascript
$user.delete({ id: "1" }).then(function() {
	// The instance with id = "1" got deleted from the server
});
```


#### <a name="query-scopes-user"></a>Query Scopes


The available query scopes for `User` are:

* all
* exact_match
* count
* count_exact_match
* reset_password
* consent_accepted
* deactivate
* myprofile
* get_my_contacts
* get_patients_by_clinics
* get_healthcare_by_clinic
* patient_survey_export

##### `all`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $user.all();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $user.all({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `exact_match`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $user.exact_match();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $user.exact_match({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `count`


To fetch the values of a query scope you can just call the query scope from the model. Aggregate scopes like this one return an Object with a single attribute. This attribute is always called `value` and it gets filled with the result of the query once the request comes back from the backend server.

```javascript
$scope.myScope = $user.count();
console.log($scope.myScope.value); // Would print a value like "3000" or undefined if the request hasn't returned yet
```

##### `count_exact_match`


To fetch the values of a query scope you can just call the query scope from the model. Aggregate scopes like this one return an Object with a single attribute. This attribute is always called `value` and it gets filled with the result of the query once the request comes back from the backend server.

```javascript
$scope.myScope = $user.count_exact_match();
console.log($scope.myScope.value); // Would print a value like "3000" or undefined if the request hasn't returned yet
```

##### `reset_password`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $user.reset_password();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $user.reset_password({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `consent_accepted`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $user.consent_accepted();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $user.consent_accepted({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `deactivate`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $user.deactivate();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $user.deactivate({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `myprofile`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $user.myprofile();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $user.myprofile({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `get_my_contacts`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $user.get_my_contacts();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $user.get_my_contacts({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `get_patients_by_clinics`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $user.get_patients_by_clinics();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $user.get_patients_by_clinics({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `get_healthcare_by_clinic`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $user.get_healthcare_by_clinic();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $user.get_healthcare_by_clinic({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `patient_survey_export`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $user.patient_survey_export();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $user.patient_survey_export({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```




#### <a name="relationships-user"></a>Relationships

To access relationships within a Model there is an object within __all__ Models called `$related` that holds the defined relationships. Relationships act like query scopes, you can pass success and error callbacks to any of them and they always return an empty Array that will be filled when the request returns from the server.


##### Belongs To


###### `ClinicianCode`

```javascript
$user.$related.cliniciancode(function(result) {
	// result will be an Array with the related models
	console.log("Success!!");
}, function() {
	console.log("Error :(");
});
```

###### `Education`

```javascript
$user.$related.education(function(result) {
	// result will be an Array with the related models
	console.log("Success!!");
}, function() {
	console.log("Error :(");
});
```

###### `Race`

```javascript
$user.$related.race(function(result) {
	// result will be an Array with the related models
	console.log("Success!!");
}, function() {
	console.log("Error :(");
});
```



##### Has Many


###### UserAuditLogging

```javascript
$user.$related.userauditloggings(function(result) {
	// result will be an Array with the related models
	console.log("Success!!");
}, function() {
	console.log("Error :(");
});
```

###### SearchAuditLogging

```javascript
$user.$related.searchauditloggings(function(result) {
	// result will be an Array with the related models
	console.log("Success!!");
}, function() {
	console.log("Error :(");
});
```

###### UserSurvey

```javascript
$user.$related.usersurveys(function(result) {
	// result will be an Array with the related models
	console.log("Success!!");
}, function() {
	console.log("Error :(");
});
```


### <a name="userauditlogging"></a>`UserAuditLogging`

To use this model you have to inject `$userAuditLogging`.


#### <a name="create-userauditlogging"></a>Create

To create instances of `UserAuditLogging` do:

```javascript
// The instance does not get saved to the server when created
var instance = $userAuditLogging.create({ name: "John" });
instance.lastName = "Doe";
instance.age = 28;
// To save the instance do
instance.$save().then(function() {
	// The instance got saved
});
```

#### <a name="read-userauditlogging"></a>Read

To read a specific instance by id you can do:

```javascript
$userAuditLogging.get({ id: "1" }).then(function(response) {
	// The instance with id = "1" got fetched
	// instance data is in response.data
	console.log(response.data);
});
```

#### <a name="update-userauditlogging"></a>Update

To update an instance you can call `instance.$save()` at any time. Updating will be triggered if the instance has an `id` field that is not `undefined`.

```javascript
// To update the instance pass an object containing the attributes you want to update to the $save method
instance.$save({
  age: 29
}).then(function() {
	// The instance got updated
});
```

#### <a name="delete-userauditlogging"></a>Delete

To delete an instance:

```javascript
$userAuditLogging.delete({ id: "1" }).then(function() {
	// The instance with id = "1" got deleted from the server
});
```


#### <a name="query-scopes-userauditlogging"></a>Query Scopes


The available query scopes for `UserAuditLogging` are:

* all
* exact_match
* count
* count_exact_match
* user_audit_export

##### `all`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $userAuditLogging.all();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $userAuditLogging.all({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `exact_match`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $userAuditLogging.exact_match();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $userAuditLogging.exact_match({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `count`


To fetch the values of a query scope you can just call the query scope from the model. Aggregate scopes like this one return an Object with a single attribute. This attribute is always called `value` and it gets filled with the result of the query once the request comes back from the backend server.

```javascript
$scope.myScope = $userAuditLogging.count();
console.log($scope.myScope.value); // Would print a value like "3000" or undefined if the request hasn't returned yet
```

##### `count_exact_match`


To fetch the values of a query scope you can just call the query scope from the model. Aggregate scopes like this one return an Object with a single attribute. This attribute is always called `value` and it gets filled with the result of the query once the request comes back from the backend server.

```javascript
$scope.myScope = $userAuditLogging.count_exact_match();
console.log($scope.myScope.value); // Would print a value like "3000" or undefined if the request hasn't returned yet
```

##### `user_audit_export`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $userAuditLogging.user_audit_export();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $userAuditLogging.user_audit_export({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```




#### <a name="relationships-userauditlogging"></a>Relationships

To access relationships within a Model there is an object within __all__ Models called `$related` that holds the defined relationships. Relationships act like query scopes, you can pass success and error callbacks to any of them and they always return an empty Array that will be filled when the request returns from the server.


##### Belongs To


###### `User`

```javascript
$userAuditLogging.$related.user(function(result) {
	// result will be an Array with the related models
	console.log("Success!!");
}, function() {
	console.log("Error :(");
});
```




### <a name="usersurvey"></a>`UserSurvey`

To use this model you have to inject `$userSurvey`.


#### <a name="create-usersurvey"></a>Create

To create instances of `UserSurvey` do:

```javascript
// The instance does not get saved to the server when created
var instance = $userSurvey.create({ name: "John" });
instance.lastName = "Doe";
instance.age = 28;
// To save the instance do
instance.$save().then(function() {
	// The instance got saved
});
```

#### <a name="read-usersurvey"></a>Read

To read a specific instance by id you can do:

```javascript
$userSurvey.get({ id: "1" }).then(function(response) {
	// The instance with id = "1" got fetched
	// instance data is in response.data
	console.log(response.data);
});
```

#### <a name="update-usersurvey"></a>Update

To update an instance you can call `instance.$save()` at any time. Updating will be triggered if the instance has an `id` field that is not `undefined`.

```javascript
// To update the instance pass an object containing the attributes you want to update to the $save method
instance.$save({
  age: 29
}).then(function() {
	// The instance got updated
});
```

#### <a name="delete-usersurvey"></a>Delete

To delete an instance:

```javascript
$userSurvey.delete({ id: "1" }).then(function() {
	// The instance with id = "1" got deleted from the server
});
```


#### <a name="query-scopes-usersurvey"></a>Query Scopes


The available query scopes for `UserSurvey` are:

* all
* exact_match
* count
* count_exact_match
* get_patients_survey
* getfirstquestion
* compelete_survey
* get_video_survey
* check_survey_exists
* check_survey_count
* generate_csv_results

##### `all`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $userSurvey.all();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $userSurvey.all({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `exact_match`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $userSurvey.exact_match();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $userSurvey.exact_match({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `count`


To fetch the values of a query scope you can just call the query scope from the model. Aggregate scopes like this one return an Object with a single attribute. This attribute is always called `value` and it gets filled with the result of the query once the request comes back from the backend server.

```javascript
$scope.myScope = $userSurvey.count();
console.log($scope.myScope.value); // Would print a value like "3000" or undefined if the request hasn't returned yet
```

##### `count_exact_match`


To fetch the values of a query scope you can just call the query scope from the model. Aggregate scopes like this one return an Object with a single attribute. This attribute is always called `value` and it gets filled with the result of the query once the request comes back from the backend server.

```javascript
$scope.myScope = $userSurvey.count_exact_match();
console.log($scope.myScope.value); // Would print a value like "3000" or undefined if the request hasn't returned yet
```

##### `get_patients_survey`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $userSurvey.get_patients_survey();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $userSurvey.get_patients_survey({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `getfirstquestion`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $userSurvey.getfirstquestion();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $userSurvey.getfirstquestion({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `compelete_survey`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $userSurvey.compelete_survey();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $userSurvey.compelete_survey({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `get_video_survey`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $userSurvey.get_video_survey();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $userSurvey.get_video_survey({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `check_survey_exists`


To fetch the values of a query scope you can just call the query scope from the model. Aggregate scopes like this one return an Object with a single attribute. This attribute is always called `value` and it gets filled with the result of the query once the request comes back from the backend server.

```javascript
$scope.myScope = $userSurvey.check_survey_exists();
console.log($scope.myScope.value); // Would print a value like "3000" or undefined if the request hasn't returned yet
```

##### `check_survey_count`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $userSurvey.check_survey_count();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $userSurvey.check_survey_count({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `generate_csv_results`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $userSurvey.generate_csv_results();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $userSurvey.generate_csv_results({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```




#### <a name="relationships-usersurvey"></a>Relationships

To access relationships within a Model there is an object within __all__ Models called `$related` that holds the defined relationships. Relationships act like query scopes, you can pass success and error callbacks to any of them and they always return an empty Array that will be filled when the request returns from the server.


##### Belongs To


###### `Survey`

```javascript
$userSurvey.$related.survey(function(result) {
	// result will be an Array with the related models
	console.log("Success!!");
}, function() {
	console.log("Error :(");
});
```

###### `User`

```javascript
$userSurvey.$related.user(function(result) {
	// result will be an Array with the related models
	console.log("Success!!");
}, function() {
	console.log("Error :(");
});
```




### <a name="usersurveyanswer"></a>`UserSurveyAnswer`

To use this model you have to inject `$userSurveyAnswer`.


#### <a name="create-usersurveyanswer"></a>Create

To create instances of `UserSurveyAnswer` do:

```javascript
// The instance does not get saved to the server when created
var instance = $userSurveyAnswer.create({ name: "John" });
instance.lastName = "Doe";
instance.age = 28;
// To save the instance do
instance.$save().then(function() {
	// The instance got saved
});
```

#### <a name="read-usersurveyanswer"></a>Read

To read a specific instance by id you can do:

```javascript
$userSurveyAnswer.get({ id: "1" }).then(function(response) {
	// The instance with id = "1" got fetched
	// instance data is in response.data
	console.log(response.data);
});
```

#### <a name="update-usersurveyanswer"></a>Update

To update an instance you can call `instance.$save()` at any time. Updating will be triggered if the instance has an `id` field that is not `undefined`.

```javascript
// To update the instance pass an object containing the attributes you want to update to the $save method
instance.$save({
  age: 29
}).then(function() {
	// The instance got updated
});
```

#### <a name="delete-usersurveyanswer"></a>Delete

To delete an instance:

```javascript
$userSurveyAnswer.delete({ id: "1" }).then(function() {
	// The instance with id = "1" got deleted from the server
});
```


#### <a name="query-scopes-usersurveyanswer"></a>Query Scopes


The available query scopes for `UserSurveyAnswer` are:

* all
* exact_match
* count
* count_exact_match
* previousquestion

##### `all`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $userSurveyAnswer.all();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $userSurveyAnswer.all({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `exact_match`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $userSurveyAnswer.exact_match();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $userSurveyAnswer.exact_match({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `count`


To fetch the values of a query scope you can just call the query scope from the model. Aggregate scopes like this one return an Object with a single attribute. This attribute is always called `value` and it gets filled with the result of the query once the request comes back from the backend server.

```javascript
$scope.myScope = $userSurveyAnswer.count();
console.log($scope.myScope.value); // Would print a value like "3000" or undefined if the request hasn't returned yet
```

##### `count_exact_match`


To fetch the values of a query scope you can just call the query scope from the model. Aggregate scopes like this one return an Object with a single attribute. This attribute is always called `value` and it gets filled with the result of the query once the request comes back from the backend server.

```javascript
$scope.myScope = $userSurveyAnswer.count_exact_match();
console.log($scope.myScope.value); // Would print a value like "3000" or undefined if the request hasn't returned yet
```

##### `previousquestion`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $userSurveyAnswer.previousquestion();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $userSurveyAnswer.previousquestion({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```




#### <a name="relationships-usersurveyanswer"></a>Relationships

To access relationships within a Model there is an object within __all__ Models called `$related` that holds the defined relationships. Relationships act like query scopes, you can pass success and error callbacks to any of them and they always return an empty Array that will be filled when the request returns from the server.


##### Belongs To


###### `QuestionCode`

```javascript
$userSurveyAnswer.$related.questioncode(function(result) {
	// result will be an Array with the related models
	console.log("Success!!");
}, function() {
	console.log("Error :(");
});
```

###### `SurveyAnswer`

```javascript
$userSurveyAnswer.$related.surveyanswer(function(result) {
	// result will be an Array with the related models
	console.log("Success!!");
}, function() {
	console.log("Error :(");
});
```

###### `SurveyQuestion`

```javascript
$userSurveyAnswer.$related.surveyquestion(function(result) {
	// result will be an Array with the related models
	console.log("Success!!");
}, function() {
	console.log("Error :(");
});
```




### <a name="usersurveyvideo"></a>`UserSurveyVideo`

To use this model you have to inject `$userSurveyVideo`.


#### <a name="create-usersurveyvideo"></a>Create

To create instances of `UserSurveyVideo` do:

```javascript
// The instance does not get saved to the server when created
var instance = $userSurveyVideo.create({ name: "John" });
instance.lastName = "Doe";
instance.age = 28;
// To save the instance do
instance.$save().then(function() {
	// The instance got saved
});
```

#### <a name="read-usersurveyvideo"></a>Read

To read a specific instance by id you can do:

```javascript
$userSurveyVideo.get({ id: "1" }).then(function(response) {
	// The instance with id = "1" got fetched
	// instance data is in response.data
	console.log(response.data);
});
```

#### <a name="update-usersurveyvideo"></a>Update

To update an instance you can call `instance.$save()` at any time. Updating will be triggered if the instance has an `id` field that is not `undefined`.

```javascript
// To update the instance pass an object containing the attributes you want to update to the $save method
instance.$save({
  age: 29
}).then(function() {
	// The instance got updated
});
```

#### <a name="delete-usersurveyvideo"></a>Delete

To delete an instance:

```javascript
$userSurveyVideo.delete({ id: "1" }).then(function() {
	// The instance with id = "1" got deleted from the server
});
```


#### <a name="query-scopes-usersurveyvideo"></a>Query Scopes


The available query scopes for `UserSurveyVideo` are:

* all
* exact_match
* count
* count_exact_match
* get_videos_for_user_survey_id
* get_video_by_id

##### `all`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $userSurveyVideo.all();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $userSurveyVideo.all({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `exact_match`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $userSurveyVideo.exact_match();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $userSurveyVideo.exact_match({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `count`


To fetch the values of a query scope you can just call the query scope from the model. Aggregate scopes like this one return an Object with a single attribute. This attribute is always called `value` and it gets filled with the result of the query once the request comes back from the backend server.

```javascript
$scope.myScope = $userSurveyVideo.count();
console.log($scope.myScope.value); // Would print a value like "3000" or undefined if the request hasn't returned yet
```

##### `count_exact_match`


To fetch the values of a query scope you can just call the query scope from the model. Aggregate scopes like this one return an Object with a single attribute. This attribute is always called `value` and it gets filled with the result of the query once the request comes back from the backend server.

```javascript
$scope.myScope = $userSurveyVideo.count_exact_match();
console.log($scope.myScope.value); // Would print a value like "3000" or undefined if the request hasn't returned yet
```

##### `get_videos_for_user_survey_id`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $userSurveyVideo.get_videos_for_user_survey_id();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $userSurveyVideo.get_videos_for_user_survey_id({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `get_video_by_id`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $userSurveyVideo.get_video_by_id();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $userSurveyVideo.get_video_by_id({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```





### <a name="vaccinationreminder"></a>`VaccinationReminder`

To use this model you have to inject `$vaccinationReminder`.


#### <a name="create-vaccinationreminder"></a>Create

To create instances of `VaccinationReminder` do:

```javascript
// The instance does not get saved to the server when created
var instance = $vaccinationReminder.create({ name: "John" });
instance.lastName = "Doe";
instance.age = 28;
// To save the instance do
instance.$save().then(function() {
	// The instance got saved
});
```

#### <a name="read-vaccinationreminder"></a>Read

To read a specific instance by id you can do:

```javascript
$vaccinationReminder.get({ id: "1" }).then(function(response) {
	// The instance with id = "1" got fetched
	// instance data is in response.data
	console.log(response.data);
});
```

#### <a name="update-vaccinationreminder"></a>Update

To update an instance you can call `instance.$save()` at any time. Updating will be triggered if the instance has an `id` field that is not `undefined`.

```javascript
// To update the instance pass an object containing the attributes you want to update to the $save method
instance.$save({
  age: 29
}).then(function() {
	// The instance got updated
});
```

#### <a name="delete-vaccinationreminder"></a>Delete

To delete an instance:

```javascript
$vaccinationReminder.delete({ id: "1" }).then(function() {
	// The instance with id = "1" got deleted from the server
});
```


#### <a name="query-scopes-vaccinationreminder"></a>Query Scopes


The available query scopes for `VaccinationReminder` are:

* all
* exact_match
* count
* count_exact_match
* sorted_by_trigger_days
* send_vaccination_reminders

##### `all`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $vaccinationReminder.all();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $vaccinationReminder.all({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `exact_match`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $vaccinationReminder.exact_match();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $vaccinationReminder.exact_match({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `count`


To fetch the values of a query scope you can just call the query scope from the model. Aggregate scopes like this one return an Object with a single attribute. This attribute is always called `value` and it gets filled with the result of the query once the request comes back from the backend server.

```javascript
$scope.myScope = $vaccinationReminder.count();
console.log($scope.myScope.value); // Would print a value like "3000" or undefined if the request hasn't returned yet
```

##### `count_exact_match`


To fetch the values of a query scope you can just call the query scope from the model. Aggregate scopes like this one return an Object with a single attribute. This attribute is always called `value` and it gets filled with the result of the query once the request comes back from the backend server.

```javascript
$scope.myScope = $vaccinationReminder.count_exact_match();
console.log($scope.myScope.value); // Would print a value like "3000" or undefined if the request hasn't returned yet
```

##### `sorted_by_trigger_days`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $vaccinationReminder.sorted_by_trigger_days();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $vaccinationReminder.sorted_by_trigger_days({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `send_vaccination_reminders`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $vaccinationReminder.send_vaccination_reminders();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $vaccinationReminder.send_vaccination_reminders({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```





### <a name="video"></a>`Video`

To use this model you have to inject `$video`.


#### <a name="create-video"></a>Create

To create instances of `Video` do:

```javascript
// The instance does not get saved to the server when created
var instance = $video.create({ name: "John" });
instance.lastName = "Doe";
instance.age = 28;
// To save the instance do
instance.$save().then(function() {
	// The instance got saved
});
```

#### <a name="read-video"></a>Read

To read a specific instance by id you can do:

```javascript
$video.get({ id: "1" }).then(function(response) {
	// The instance with id = "1" got fetched
	// instance data is in response.data
	console.log(response.data);
});
```

#### <a name="update-video"></a>Update

To update an instance you can call `instance.$save()` at any time. Updating will be triggered if the instance has an `id` field that is not `undefined`.

```javascript
// To update the instance pass an object containing the attributes you want to update to the $save method
instance.$save({
  age: 29
}).then(function() {
	// The instance got updated
});
```

#### <a name="delete-video"></a>Delete

To delete an instance:

```javascript
$video.delete({ id: "1" }).then(function() {
	// The instance with id = "1" got deleted from the server
});
```


#### <a name="query-scopes-video"></a>Query Scopes


The available query scopes for `Video` are:

* all
* exact_match
* count
* count_exact_match
* search_video_scoped_by_race_edu
* search_video_by_keyword
* sorted_by_name
* video_gallery

##### `all`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $video.all();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $video.all({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `exact_match`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $video.exact_match();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $video.exact_match({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `count`


To fetch the values of a query scope you can just call the query scope from the model. Aggregate scopes like this one return an Object with a single attribute. This attribute is always called `value` and it gets filled with the result of the query once the request comes back from the backend server.

```javascript
$scope.myScope = $video.count();
console.log($scope.myScope.value); // Would print a value like "3000" or undefined if the request hasn't returned yet
```

##### `count_exact_match`


To fetch the values of a query scope you can just call the query scope from the model. Aggregate scopes like this one return an Object with a single attribute. This attribute is always called `value` and it gets filled with the result of the query once the request comes back from the backend server.

```javascript
$scope.myScope = $video.count_exact_match();
console.log($scope.myScope.value); // Would print a value like "3000" or undefined if the request hasn't returned yet
```

##### `search_video_scoped_by_race_edu`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $video.search_video_scoped_by_race_edu();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $video.search_video_scoped_by_race_edu({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `search_video_by_keyword`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $video.search_video_by_keyword();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $video.search_video_by_keyword({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `sorted_by_name`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $video.sorted_by_name();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $video.sorted_by_name({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `video_gallery`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $video.video_gallery();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $video.video_gallery({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```





### <a name="videoauditlogging"></a>`VideoAuditLogging`

To use this model you have to inject `$videoAuditLogging`.


#### <a name="create-videoauditlogging"></a>Create

To create instances of `VideoAuditLogging` do:

```javascript
// The instance does not get saved to the server when created
var instance = $videoAuditLogging.create({ name: "John" });
instance.lastName = "Doe";
instance.age = 28;
// To save the instance do
instance.$save().then(function() {
	// The instance got saved
});
```

#### <a name="read-videoauditlogging"></a>Read

To read a specific instance by id you can do:

```javascript
$videoAuditLogging.get({ id: "1" }).then(function(response) {
	// The instance with id = "1" got fetched
	// instance data is in response.data
	console.log(response.data);
});
```

#### <a name="update-videoauditlogging"></a>Update

To update an instance you can call `instance.$save()` at any time. Updating will be triggered if the instance has an `id` field that is not `undefined`.

```javascript
// To update the instance pass an object containing the attributes you want to update to the $save method
instance.$save({
  age: 29
}).then(function() {
	// The instance got updated
});
```

#### <a name="delete-videoauditlogging"></a>Delete

To delete an instance:

```javascript
$videoAuditLogging.delete({ id: "1" }).then(function() {
	// The instance with id = "1" got deleted from the server
});
```


#### <a name="query-scopes-videoauditlogging"></a>Query Scopes


The available query scopes for `VideoAuditLogging` are:

* all
* exact_match
* count
* count_exact_match
* export_video_log
* by_video_and_user_id

##### `all`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $videoAuditLogging.all();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $videoAuditLogging.all({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `exact_match`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $videoAuditLogging.exact_match();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $videoAuditLogging.exact_match({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `count`


To fetch the values of a query scope you can just call the query scope from the model. Aggregate scopes like this one return an Object with a single attribute. This attribute is always called `value` and it gets filled with the result of the query once the request comes back from the backend server.

```javascript
$scope.myScope = $videoAuditLogging.count();
console.log($scope.myScope.value); // Would print a value like "3000" or undefined if the request hasn't returned yet
```

##### `count_exact_match`


To fetch the values of a query scope you can just call the query scope from the model. Aggregate scopes like this one return an Object with a single attribute. This attribute is always called `value` and it gets filled with the result of the query once the request comes back from the backend server.

```javascript
$scope.myScope = $videoAuditLogging.count_exact_match();
console.log($scope.myScope.value); // Would print a value like "3000" or undefined if the request hasn't returned yet
```

##### `export_video_log`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $videoAuditLogging.export_video_log();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $videoAuditLogging.export_video_log({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```


##### `by_video_and_user_id`


To fetch the values of a query scope you can just call the query scope from the model. Object scopes like this one return an empty Array that will get filled when the data comes back from the backend server.

```javascript
$scope.myScope = $videoAuditLogging.by_video_and_user_id();
```

If the scope supports parameters to filter the results, then you can call them like so:

```javascript
$scope.myScope = $videoAuditLogging.by_video_and_user_id({
	query: { // In query go the parameters for the scope
		name: "John",
		age: 40
	},
	// Pagination options
	limit: 15, // Max amount of results
	offset: 0,	// The index from which to start reading the amount of elements
}, function(collection) { // Success callback
	// Use the collection data returned
}, function(err) { // Error callback
	// There was an error while fetching the data
});
```






## <a name="development"></a> Development

### <a name="developing-with-grunt"></a> Developing with Grunt

Grunt is a NodeJS-based task runner.  It helps automate common tasks, such as
asset compilation, minification, and testing.  Grunt tasks are included for this
SDK in `Gruntfile.js`.

Follow the directions below to get up and running with Grunt.

#### <a name="prerequisites"></a> Prerequisites

- [NodeJS](http://nodejs.org)

#### <a name="install-nodejs-modules"></a> Install NodeJS Modules

From the root directory of the SDK (where `Gruntfile.js` is
located), install NodeJS modules:

`npm install`

#### <a name="adding-code-to-the-sdk"></a> Adding code to the SDK

In order to add additional files to the final SDK build all that is required is to include the file within the building process.
The build process is actually just concatenation of all the modules and files that comprise the SDK, so to add more you can modify Gruntfile.js found in the root of the SDK folder.

```javascript
concat: {
  javascript: {
    src: [
      /**
      * Static
      */
      'sdk/utility/utility.module.js',
      ...
      ...
      /**
      * Generated
      */
      'sdk/adapters/adapters.module.js',
      ...
      ...
      /**
      * Custom added files
      */
      'path/to/my/code.js',
      ...
    ],
    dest: 'ap_sdk.js'
  }
},
```

#### <a name="build-for-production"></a> Build for Production

To compile assets and create a full production build, run the
build task:

`grunt build`

#### <a name="manual-compilation"></a> Manual Compilation

During development, a full minified SDK build is unnecessary.  To
compile assets without minifying:

`grunt compile`

#### <a name="automatic-compilation"></a> Automatic Compilation

Since it's cumbersome to manually compile assets after every change during
development, the SDK's `Gruntfile.js` includes a `watch` task.  The
task monitors changes to the SDK's `coffee` and `sass` assets,
automatically compiling (but not minifying) them.  Run the following command
before making changes:

`grunt watch`

## <a name="testing"></a> Testing

The SDK comes with a complete test suite.  Execute tests from grunt:

`grunt test`

SDK tests are also executed by the `watch` task.  If changing the SDK
significantly, some or all tests may fail.  You may disable auto-testing by
editing the `watch` task in `Gruntfile.js`.

The test suite can also be run directly in a browser.  Open `test/index.html` and click
"Run Tests".
