(function(module, inject, angular) {

  var expect = chai.expect;

  describe("Model Service - $surveyQuestion", function() {
    var model, config;

    beforeEach(module("VaccineSurveySdk.config"));
    beforeEach(module("VaccineSurveySdk.models"));

    beforeEach(inject(function($injector) {
      config = $injector.get("$vaccineSurveySdkConfig");
      model = $injector.get("$surveyQuestion");

      config.mockServer.enable();
    }));

    it("should exist", function() {
      expect(model).to.exist;
    });

    it("should be able to create an instance", function() {
      var instance = model.create({
        
        
        did_you_know_text: undefined,
          
        
        label: undefined,
          
        
        question_category_id: undefined,
          
        
        question_code_id: undefined,
          
        
        question_group: undefined,
          
        
        question_text: undefined,
          
        
        question_type_id: undefined,
          
        
        required_answer: undefined,
          
        
        sort_order: undefined,
          
        
        survey_id: undefined,
          
        
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
    
    describe("Query Scope - get_question_by_survey", function() {
      it("should exist", function() {
        expect(model).to.respondTo("get_question_by_survey");
      });

      
      it("should return an array of instances", function() {
        var result = model.get_question_by_survey();
        expect(result).to.be.an.instanceof(Array);
        expect(result.length).to.be.at.least(1);
        expect(result[0].id).to.exist;
      });
      

      

      it("should accept success callbacks", function() {
        var successSpy = sinon.spy(function() {
          expect(succesSpy.calledOnce).to.be.true;
        });
        model.get_question_by_survey({}, successSpy);
      });
    });
    
    describe("Query Scope - delete_survey_question", function() {
      it("should exist", function() {
        expect(model).to.respondTo("delete_survey_question");
      });

      
      it("should return an array of instances", function() {
        var result = model.delete_survey_question();
        expect(result).to.be.an.instanceof(Array);
        expect(result.length).to.be.at.least(1);
        expect(result[0].id).to.exist;
      });
      

      

      it("should accept success callbacks", function() {
        var successSpy = sinon.spy(function() {
          expect(succesSpy.calledOnce).to.be.true;
        });
        model.delete_survey_question({}, successSpy);
      });
    });
    
    describe("Query Scope - get_question_by_question_code", function() {
      it("should exist", function() {
        expect(model).to.respondTo("get_question_by_question_code");
      });

      
      it("should return an array of instances", function() {
        var result = model.get_question_by_question_code();
        expect(result).to.be.an.instanceof(Array);
        expect(result.length).to.be.at.least(1);
        expect(result[0].id).to.exist;
      });
      

      

      it("should accept success callbacks", function() {
        var successSpy = sinon.spy(function() {
          expect(succesSpy.calledOnce).to.be.true;
        });
        model.get_question_by_question_code({}, successSpy);
      });
    });
    

    
    
      describe("Relationship - Belongs To - QuestionCategory", function() {

        it("should have a method to get its owner instance", function() {
          var instance = model.create({
            question_category_id: "1"
          });
          instance.$related.questioncategory(function(result) {
            expect(result).to.be.an.instanceof(Array);
          });
        });

      });
    
      describe("Relationship - Belongs To - QuestionCode", function() {

        it("should have a method to get its owner instance", function() {
          var instance = model.create({
            question_code_id: "1"
          });
          instance.$related.questioncode(function(result) {
            expect(result).to.be.an.instanceof(Array);
          });
        });

      });
    
      describe("Relationship - Belongs To - QuestionType", function() {

        it("should have a method to get its owner instance", function() {
          var instance = model.create({
            question_type_id: "1"
          });
          instance.$related.questiontype(function(result) {
            expect(result).to.be.an.instanceof(Array);
          });
        });

      });
    
      describe("Relationship - Belongs To - Survey", function() {

        it("should have a method to get its owner instance", function() {
          var instance = model.create({
            survey_id: "1"
          });
          instance.$related.survey(function(result) {
            expect(result).to.be.an.instanceof(Array);
          });
        });

      });
    
    

    

    
    
      describe("Relationship - Has Many - SurveyAnswer", function() {

        it("should have a method to get its contained instances array", function() {
          var instance = model.create({
            id: "1"
          });
          instance.$related.surveyanswers(function(results) {
            expect(results).to.be.an.instanceof(Array);
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
