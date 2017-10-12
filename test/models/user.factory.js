(function(module, inject, angular) {

  var expect = chai.expect;

  describe("Model Service - $user", function() {
    var model, config;

    beforeEach(module("VaccineSurveySdk.config"));
    beforeEach(module("VaccineSurveySdk.models"));

    beforeEach(inject(function($injector) {
      config = $injector.get("$vaccineSurveySdkConfig");
      model = $injector.get("$user");

      config.mockServer.enable();
    }));

    it("should exist", function() {
      expect(model).to.exist;
    });

    it("should be able to create an instance", function() {
      var instance = model.create({
        
        
        actual_child_birth: undefined,
          
        
        address: undefined,
          
        
        cell_phone: undefined,
          
        
        city: undefined,
          
        
        clinician_code_id: undefined,
          
        
        clinic_name: undefined,
          
        
        consent_accepted_on: undefined,
          
        
        contact_cell_phone: undefined,
          
        
        contact_email: undefined,
          
        
        contact_home_phone: undefined,
          
        
        contact_name: undefined,
          
        
        deactivated_on: undefined,
          
        
        education_id: undefined,
          
        
        email: undefined,
          
        
        expected_child_birth: undefined,
          
        
        first_name: undefined,
          
        
        has_contact_users: undefined,
          
        
        home_phone: undefined,
          
        
        intervention_group: undefined,
          
        
        is_deactive: undefined,
          
        
        last_name: undefined,
          
        
        parent_relationship_type: undefined,
          
        
        parent_user_id: undefined,
          
        
        password: undefined,
          
        
        password_confirmation: undefined,
          
        
        password_digest: undefined,
          
        
        patient_type: undefined,
          
        
        postal_code: undefined,
          
        
        race_id: undefined,
          
        
        reason_for_deactivation: undefined,
          
        
        reset_password: undefined,
          
        
        role: undefined,
          
        
        state: undefined,
          
        
        updated_user_profile: undefined,
          
        
        vaccination_reminders: undefined,
          
        
        x_session_id: undefined,
          
        
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
    
    describe("Query Scope - reset_password", function() {
      it("should exist", function() {
        expect(model).to.respondTo("reset_password");
      });

      
      it("should return an array of instances", function() {
        var result = model.reset_password();
        expect(result).to.be.an.instanceof(Array);
        expect(result.length).to.be.at.least(1);
        expect(result[0].id).to.exist;
      });
      

      

      it("should accept success callbacks", function() {
        var successSpy = sinon.spy(function() {
          expect(succesSpy.calledOnce).to.be.true;
        });
        model.reset_password({}, successSpy);
      });
    });
    
    describe("Query Scope - consent_accepted", function() {
      it("should exist", function() {
        expect(model).to.respondTo("consent_accepted");
      });

      
      it("should return an array of instances", function() {
        var result = model.consent_accepted();
        expect(result).to.be.an.instanceof(Array);
        expect(result.length).to.be.at.least(1);
        expect(result[0].id).to.exist;
      });
      

      

      it("should accept success callbacks", function() {
        var successSpy = sinon.spy(function() {
          expect(succesSpy.calledOnce).to.be.true;
        });
        model.consent_accepted({}, successSpy);
      });
    });
    
    describe("Query Scope - deactivate", function() {
      it("should exist", function() {
        expect(model).to.respondTo("deactivate");
      });

      
      it("should return an array of instances", function() {
        var result = model.deactivate();
        expect(result).to.be.an.instanceof(Array);
        expect(result.length).to.be.at.least(1);
        expect(result[0].id).to.exist;
      });
      

      

      it("should accept success callbacks", function() {
        var successSpy = sinon.spy(function() {
          expect(succesSpy.calledOnce).to.be.true;
        });
        model.deactivate({}, successSpy);
      });
    });
    
    describe("Query Scope - myprofile", function() {
      it("should exist", function() {
        expect(model).to.respondTo("myprofile");
      });

      
      it("should return an array of instances", function() {
        var result = model.myprofile();
        expect(result).to.be.an.instanceof(Array);
        expect(result.length).to.be.at.least(1);
        expect(result[0].id).to.exist;
      });
      

      

      it("should accept success callbacks", function() {
        var successSpy = sinon.spy(function() {
          expect(succesSpy.calledOnce).to.be.true;
        });
        model.myprofile({}, successSpy);
      });
    });
    
    describe("Query Scope - get_my_contacts", function() {
      it("should exist", function() {
        expect(model).to.respondTo("get_my_contacts");
      });

      
      it("should return an array of instances", function() {
        var result = model.get_my_contacts();
        expect(result).to.be.an.instanceof(Array);
        expect(result.length).to.be.at.least(1);
        expect(result[0].id).to.exist;
      });
      

      

      it("should accept success callbacks", function() {
        var successSpy = sinon.spy(function() {
          expect(succesSpy.calledOnce).to.be.true;
        });
        model.get_my_contacts({}, successSpy);
      });
    });
    
    describe("Query Scope - get_patients_by_clinics", function() {
      it("should exist", function() {
        expect(model).to.respondTo("get_patients_by_clinics");
      });

      
      it("should return an array of instances", function() {
        var result = model.get_patients_by_clinics();
        expect(result).to.be.an.instanceof(Array);
        expect(result.length).to.be.at.least(1);
        expect(result[0].id).to.exist;
      });
      

      

      it("should accept success callbacks", function() {
        var successSpy = sinon.spy(function() {
          expect(succesSpy.calledOnce).to.be.true;
        });
        model.get_patients_by_clinics({}, successSpy);
      });
    });
    
    describe("Query Scope - get_healthcare_by_clinic", function() {
      it("should exist", function() {
        expect(model).to.respondTo("get_healthcare_by_clinic");
      });

      
      it("should return an array of instances", function() {
        var result = model.get_healthcare_by_clinic();
        expect(result).to.be.an.instanceof(Array);
        expect(result.length).to.be.at.least(1);
        expect(result[0].id).to.exist;
      });
      

      

      it("should accept success callbacks", function() {
        var successSpy = sinon.spy(function() {
          expect(succesSpy.calledOnce).to.be.true;
        });
        model.get_healthcare_by_clinic({}, successSpy);
      });
    });
    
    describe("Query Scope - patient_survey_export", function() {
      it("should exist", function() {
        expect(model).to.respondTo("patient_survey_export");
      });

      
      it("should return an array of instances", function() {
        var result = model.patient_survey_export();
        expect(result).to.be.an.instanceof(Array);
        expect(result.length).to.be.at.least(1);
        expect(result[0].id).to.exist;
      });
      

      

      it("should accept success callbacks", function() {
        var successSpy = sinon.spy(function() {
          expect(succesSpy.calledOnce).to.be.true;
        });
        model.patient_survey_export({}, successSpy);
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
    
      describe("Relationship - Belongs To - Education", function() {

        it("should have a method to get its owner instance", function() {
          var instance = model.create({
            education_id: "1"
          });
          instance.$related.education(function(result) {
            expect(result).to.be.an.instanceof(Array);
          });
        });

      });
    
      describe("Relationship - Belongs To - Race", function() {

        it("should have a method to get its owner instance", function() {
          var instance = model.create({
            race_id: "1"
          });
          instance.$related.race(function(result) {
            expect(result).to.be.an.instanceof(Array);
          });
        });

      });
    
    

    

    
    
      describe("Relationship - Has Many - UserAuditLogging", function() {

        it("should have a method to get its contained instances array", function() {
          var instance = model.create({
            id: "1"
          });
          instance.$related.userauditloggings(function(results) {
            expect(results).to.be.an.instanceof(Array);
          });
        });

      });
    
      describe("Relationship - Has Many - SearchAuditLogging", function() {

        it("should have a method to get its contained instances array", function() {
          var instance = model.create({
            id: "1"
          });
          instance.$related.searchauditloggings(function(results) {
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
