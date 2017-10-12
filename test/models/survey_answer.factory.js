(function(module, inject, angular) {

  var expect = chai.expect;

  describe("Model Service - $surveyAnswer", function() {
    var model, config;

    beforeEach(module("VaccineSurveySdk.config"));
    beforeEach(module("VaccineSurveySdk.models"));

    beforeEach(inject(function($injector) {
      config = $injector.get("$vaccineSurveySdkConfig");
      model = $injector.get("$surveyAnswer");

      config.mockServer.enable();
    }));

    it("should exist", function() {
      expect(model).to.exist;
    });

    it("should be able to create an instance", function() {
      var instance = model.create({
        
        
        allow_free_form: undefined,
          
        
        free_form_data_type: undefined,
          
        
        label: undefined,
          
        
        sort_order: undefined,
          
        
        survey_question_id: undefined,
          
        
        video_target_number: undefined,
          
        
        weight: undefined,
          
        
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
    
    describe("Query Scope - get_answers_by_question", function() {
      it("should exist", function() {
        expect(model).to.respondTo("get_answers_by_question");
      });

      
      it("should return an array of instances", function() {
        var result = model.get_answers_by_question();
        expect(result).to.be.an.instanceof(Array);
        expect(result.length).to.be.at.least(1);
        expect(result[0].id).to.exist;
      });
      

      

      it("should accept success callbacks", function() {
        var successSpy = sinon.spy(function() {
          expect(succesSpy.calledOnce).to.be.true;
        });
        model.get_answers_by_question({}, successSpy);
      });
    });
    
    describe("Query Scope - delete_question_answer", function() {
      it("should exist", function() {
        expect(model).to.respondTo("delete_question_answer");
      });

      
      it("should return an array of instances", function() {
        var result = model.delete_question_answer();
        expect(result).to.be.an.instanceof(Array);
        expect(result.length).to.be.at.least(1);
        expect(result[0].id).to.exist;
      });
      

      

      it("should accept success callbacks", function() {
        var successSpy = sinon.spy(function() {
          expect(succesSpy.calledOnce).to.be.true;
        });
        model.delete_question_answer({}, successSpy);
      });
    });
    

    
    
      describe("Relationship - Belongs To - SurveyQuestion", function() {

        it("should have a method to get its owner instance", function() {
          var instance = model.create({
            survey_question_id: "1"
          });
          instance.$related.surveyquestion(function(result) {
            expect(result).to.be.an.instanceof(Array);
          });
        });

      });
    
    

    

    
    
      describe("Relationship - Has Many - UserSurveyAnswer", function() {

        it("should have a method to get its contained instances array", function() {
          var instance = model.create({
            id: "1"
          });
          instance.$related.usersurveyanswers(function(results) {
            expect(results).to.be.an.instanceof(Array);
          });
        });

      });
    
    
  });

})(window.module, window.inject, angular);
