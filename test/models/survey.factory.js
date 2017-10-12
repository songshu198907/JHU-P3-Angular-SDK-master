(function(module, inject, angular) {

  var expect = chai.expect;

  describe("Model Service - $survey", function() {
    var model, config;

    beforeEach(module("VaccineSurveySdk.config"));
    beforeEach(module("VaccineSurveySdk.models"));

    beforeEach(inject(function($injector) {
      config = $injector.get("$vaccineSurveySdkConfig");
      model = $injector.get("$survey");

      config.mockServer.enable();
    }));

    it("should exist", function() {
      expect(model).to.exist;
    });

    it("should be able to create an instance", function() {
      var instance = model.create({
        
        
        intervention_group: undefined,
          
        
        is_active: undefined,
          
        
        name: undefined,
          
        
        patient_type: undefined,
          
        
        survey_type: undefined,
          
        
        total_questions: undefined,
          
        
        version: undefined,
          
        
      });
      instance.$save().then(function(savedInstance) {
        expect(savedInstance.id).to.exist;
      });
    });

    it("should be able to delete an instance", function() {
      var succesSpy = sinon.spy(function() {
        expect(successSpy.calledOnce).to.be.true;
      });
      model.delete({id: 1}).then(succesSpy);
    });

    
    describe("Query Scope - all", function() {
      it("should exist", function() {
        expect(model).to.respondTo("all");
      });

      
      it("should return an array of instances", function() {
        var result = model.all();
        expect(result).to.be.an.instanceof(Array);
        expect(result.length).to.be.at.least(1);
        expect(result[0].id).to.exist;
      });
      

      

      it("should accept success callbacks", function() {
        var successSpy = sinon.spy(function() {
          expect(succesSpy.calledOnce).to.be.true;
        });
        model.all({}, successSpy);
      });
    });
    
    describe("Query Scope - exact_match", function() {
      it("should exist", function() {
        expect(model).to.respondTo("exact_match");
      });

      
      it("should return an array of instances", function() {
        var result = model.exact_match();
        expect(result).to.be.an.instanceof(Array);
        expect(result.length).to.be.at.least(1);
        expect(result[0].id).to.exist;
      });
      

      

      it("should accept success callbacks", function() {
        var successSpy = sinon.spy(function() {
          expect(succesSpy.calledOnce).to.be.true;
        });
        model.exact_match({}, successSpy);
      });
    });
    
    describe("Query Scope - count", function() {
      it("should exist", function() {
        expect(model).to.respondTo("count");
      });

      

      
      it("should return an object with a value", function() {
        var result = model.count();
        expect(result).to.be.an.instanceof(Object);
        expect(result.value).to.exist;
      });
      

      it("should accept success callbacks", function() {
        var successSpy = sinon.spy(function() {
          expect(succesSpy.calledOnce).to.be.true;
        });
        model.count({}, successSpy);
      });
    });
    
    describe("Query Scope - count_exact_match", function() {
      it("should exist", function() {
        expect(model).to.respondTo("count_exact_match");
      });

      

      
      it("should return an object with a value", function() {
        var result = model.count_exact_match();
        expect(result).to.be.an.instanceof(Object);
        expect(result.value).to.exist;
      });
      

      it("should accept success callbacks", function() {
        var successSpy = sinon.spy(function() {
          expect(succesSpy.calledOnce).to.be.true;
        });
        model.count_exact_match({}, successSpy);
      });
    });
    
    describe("Query Scope - create_copy", function() {
      it("should exist", function() {
        expect(model).to.respondTo("create_copy");
      });

      
      it("should return an array of instances", function() {
        var result = model.create_copy();
        expect(result).to.be.an.instanceof(Array);
        expect(result.length).to.be.at.least(1);
        expect(result[0].id).to.exist;
      });
      

      

      it("should accept success callbacks", function() {
        var successSpy = sinon.spy(function() {
          expect(succesSpy.calledOnce).to.be.true;
        });
        model.create_copy({}, successSpy);
      });
    });
    
    describe("Query Scope - active_surveys_by_type_patient", function() {
      it("should exist", function() {
        expect(model).to.respondTo("active_surveys_by_type_patient");
      });

      
      it("should return an array of instances", function() {
        var result = model.active_surveys_by_type_patient();
        expect(result).to.be.an.instanceof(Array);
        expect(result.length).to.be.at.least(1);
        expect(result[0].id).to.exist;
      });
      

      

      it("should accept success callbacks", function() {
        var successSpy = sinon.spy(function() {
          expect(succesSpy.calledOnce).to.be.true;
        });
        model.active_surveys_by_type_patient({}, successSpy);
      });
    });
    
    describe("Query Scope - get_sorted_surveys", function() {
      it("should exist", function() {
        expect(model).to.respondTo("get_sorted_surveys");
      });

      
      it("should return an array of instances", function() {
        var result = model.get_sorted_surveys();
        expect(result).to.be.an.instanceof(Array);
        expect(result.length).to.be.at.least(1);
        expect(result[0].id).to.exist;
      });
      

      

      it("should accept success callbacks", function() {
        var successSpy = sinon.spy(function() {
          expect(succesSpy.calledOnce).to.be.true;
        });
        model.get_sorted_surveys({}, successSpy);
      });
    });
    
    describe("Query Scope - delete_survey", function() {
      it("should exist", function() {
        expect(model).to.respondTo("delete_survey");
      });

      
      it("should return an array of instances", function() {
        var result = model.delete_survey();
        expect(result).to.be.an.instanceof(Array);
        expect(result.length).to.be.at.least(1);
        expect(result[0].id).to.exist;
      });
      

      

      it("should accept success callbacks", function() {
        var successSpy = sinon.spy(function() {
          expect(succesSpy.calledOnce).to.be.true;
        });
        model.delete_survey({}, successSpy);
      });
    });
    
    describe("Query Scope - generate_csv_results", function() {
      it("should exist", function() {
        expect(model).to.respondTo("generate_csv_results");
      });

      
      it("should return an array of instances", function() {
        var result = model.generate_csv_results();
        expect(result).to.be.an.instanceof(Array);
        expect(result.length).to.be.at.least(1);
        expect(result[0].id).to.exist;
      });
      

      

      it("should accept success callbacks", function() {
        var successSpy = sinon.spy(function() {
          expect(succesSpy.calledOnce).to.be.true;
        });
        model.generate_csv_results({}, successSpy);
      });
    });
    

    

    

    
    
      describe("Relationship - Has Many - SurveyQuestion", function() {

        it("should have a method to get its contained instances array", function() {
          var instance = model.create({
            id: "1"
          });
          instance.$related.surveyquestions(function(results) {
            expect(results).to.be.an.instanceof(Array);
          });
        });

      });
    
      describe("Relationship - Has Many - UserSurvey", function() {

        it("should have a method to get its contained instances array", function() {
          var instance = model.create({
            id: "1"
          });
          instance.$related.usersurveys(function(results) {
            expect(results).to.be.an.instanceof(Array);
          });
        });

      });
    
    
  });

})(window.module, window.inject, angular);
