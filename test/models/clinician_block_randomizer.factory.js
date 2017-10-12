(function(module, inject, angular) {

  var expect = chai.expect;

  describe("Model Service - $clinicianBlockRandomizer", function() {
    var model, config;

    beforeEach(module("VaccineSurveySdk.config"));
    beforeEach(module("VaccineSurveySdk.models"));

    beforeEach(inject(function($injector) {
      config = $injector.get("$vaccineSurveySdkConfig");
      model = $injector.get("$clinicianBlockRandomizer");

      config.mockServer.enable();
    }));

    it("should exist", function() {
      expect(model).to.exist;
    });

    it("should be able to create an instance", function() {
      var instance = model.create({
        
        id: undefined,
          
        
        clinician_code_id: undefined,
          
        
        intervention_group: undefined,
          
        
        patient_type: undefined,
          
        
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
    
    describe("Query Scope - sorted_by_clinic_id", function() {
      it("should exist", function() {
        expect(model).to.respondTo("sorted_by_clinic_id");
      });

      
      it("should return an array of instances", function() {
        var result = model.sorted_by_clinic_id();
        expect(result).to.be.an.instanceof(Array);
        expect(result.length).to.be.at.least(1);
        expect(result[0].id).to.exist;
      });
      

      

      it("should accept success callbacks", function() {
        var successSpy = sinon.spy(function() {
          expect(succesSpy.calledOnce).to.be.true;
        });
        model.sorted_by_clinic_id({}, successSpy);
      });
    });
    
    describe("Query Scope - filter_by_clinic_id", function() {
      it("should exist", function() {
        expect(model).to.respondTo("filter_by_clinic_id");
      });

      
      it("should return an array of instances", function() {
        var result = model.filter_by_clinic_id();
        expect(result).to.be.an.instanceof(Array);
        expect(result.length).to.be.at.least(1);
        expect(result[0].id).to.exist;
      });
      

      

      it("should accept success callbacks", function() {
        var successSpy = sinon.spy(function() {
          expect(succesSpy.calledOnce).to.be.true;
        });
        model.filter_by_clinic_id({}, successSpy);
      });
    });
    

    
    
      describe("Relationship - Belongs To - ClinicianCode", function() {

        it("should have a method to get its owner instance", function() {
          var instance = model.create({
            clinician_code_id: "1"
          });
          instance.$related.cliniciancode(function(result) {
            expect(result).to.be.an.instanceof(Array);
          });
        });

      });
    
    

    

    
  });

})(window.module, window.inject, angular);
