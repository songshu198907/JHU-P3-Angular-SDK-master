(function(module, inject, angular) {

  var expect = chai.expect;

  describe("Model Service - $userSurvey", function() {
    var model, config;

    beforeEach(module("VaccineSurveySdk.config"));
    beforeEach(module("VaccineSurveySdk.models"));

    beforeEach(inject(function($injector) {
      config = $injector.get("$vaccineSurveySdkConfig");
      model = $injector.get("$userSurvey");

      config.mockServer.enable();
    }));

    it("should exist", function() {
      expect(model).to.exist;
    });

    it("should be able to create an instance", function() {
      var instance = model.create({
        
        
        completed_at: undefined,
          
        
        completition: undefined,
          
        
        created_at: undefined,
          
        
        currentuseranswers: undefined,
          
        
        first_question: undefined,
          
        
        first_question_id: undefined,
          
        
        first_reminder: undefined,
          
        
        is_complete: undefined,
          
        
        matched_videos: undefined,
          
        
        maternal_video_complete: undefined,
          
        
        maternal_video_number: undefined,
          
        
        maternal_video_position: undefined,
          
        
        pediatric_video_complete: undefined,
          
        
        pediatric_video_number: undefined,
          
        
        pediatric_video_position: undefined,
          
        
        question_count: undefined,
          
        
        second_reminder: undefined,
          
        
        survey_id: undefined,
          
        
        user_id: undefined,
          
        
        video_source_version: undefined,
          
        
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
    
    describe("Query Scope - get_patients_survey", function() {
      it("should exist", function() {
        expect(model).to.respondTo("get_patients_survey");
      });

      
      it("should return an array of instances", function() {
        var result = model.get_patients_survey();
        expect(result).to.be.an.instanceof(Array);
        expect(result.length).to.be.at.least(1);
        expect(result[0].id).to.exist;
      });
      

      

      it("should accept success callbacks", function() {
        var successSpy = sinon.spy(function() {
          expect(succesSpy.calledOnce).to.be.true;
        });
        model.get_patients_survey({}, successSpy);
      });
    });
    
    describe("Query Scope - getfirstquestion", function() {
      it("should exist", function() {
        expect(model).to.respondTo("getfirstquestion");
      });

      
      it("should return an array of instances", function() {
        var result = model.getfirstquestion();
        expect(result).to.be.an.instanceof(Array);
        expect(result.length).to.be.at.least(1);
        expect(result[0].id).to.exist;
      });
      

      

      it("should accept success callbacks", function() {
        var successSpy = sinon.spy(function() {
          expect(succesSpy.calledOnce).to.be.true;
        });
        model.getfirstquestion({}, successSpy);
      });
    });
    
    describe("Query Scope - compelete_survey", function() {
      it("should exist", function() {
        expect(model).to.respondTo("compelete_survey");
      });

      
      it("should return an array of instances", function() {
        var result = model.compelete_survey();
        expect(result).to.be.an.instanceof(Array);
        expect(result.length).to.be.at.least(1);
        expect(result[0].id).to.exist;
      });
      

      

      it("should accept success callbacks", function() {
        var successSpy = sinon.spy(function() {
          expect(succesSpy.calledOnce).to.be.true;
        });
        model.compelete_survey({}, successSpy);
      });
    });
    
    describe("Query Scope - get_video_survey", function() {
      it("should exist", function() {
        expect(model).to.respondTo("get_video_survey");
      });

      
      it("should return an array of instances", function() {
        var result = model.get_video_survey();
        expect(result).to.be.an.instanceof(Array);
        expect(result.length).to.be.at.least(1);
        expect(result[0].id).to.exist;
      });
      

      

      it("should accept success callbacks", function() {
        var successSpy = sinon.spy(function() {
          expect(succesSpy.calledOnce).to.be.true;
        });
        model.get_video_survey({}, successSpy);
      });
    });
    
    describe("Query Scope - check_survey_exists", function() {
      it("should exist", function() {
        expect(model).to.respondTo("check_survey_exists");
      });

      

      
      it("should return an object with a value", function() {
        var result = model.check_survey_exists();
        expect(result).to.be.an.instanceof(Object);
        expect(result.value).to.exist;
      });
      

      it("should accept success callbacks", function() {
        var successSpy = sinon.spy(function() {
          expect(succesSpy.calledOnce).to.be.true;
        });
        model.check_survey_exists({}, successSpy);
      });
    });
    
    describe("Query Scope - check_survey_count", function() {
      it("should exist", function() {
        expect(model).to.respondTo("check_survey_count");
      });

      
      it("should return an array of instances", function() {
        var result = model.check_survey_count();
        expect(result).to.be.an.instanceof(Array);
        expect(result.length).to.be.at.least(1);
        expect(result[0].id).to.exist;
      });
      

      

      it("should accept success callbacks", function() {
        var successSpy = sinon.spy(function() {
          expect(succesSpy.calledOnce).to.be.true;
        });
        model.check_survey_count({}, successSpy);
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
    
      describe("Relationship - Belongs To - User", function() {

        it("should have a method to get its owner instance", function() {
          var instance = model.create({
            user_id: "1"
          });
          instance.$related.user(function(result) {
            expect(result).to.be.an.instanceof(Array);
          });
        });

      });
    
    

    

    
  });

})(window.module, window.inject, angular);
