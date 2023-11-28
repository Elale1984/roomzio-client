import React, { FormEvent, useState } from "react";
import { useMultiStepForm } from "./useMultiStepForm";
import "./Register.css";
import { AdminForm } from "./registrationForms/AdminForm";
import { AddressForm } from "./registrationForms/AddressForm";
import { OrganizationForm } from "./registrationForms/OrganizationForm";
import { ServiceTypeForm } from "./registrationForms/ServiceTypeForm";

type FormData = {
  serviceTypeName1: string,
  serviceTypeName2: string,
  serviceTypeName3: string,
}
const INITIAL_DATA: FormData = {
  serviceTypeName1: '',
  serviceTypeName2:'',
  serviceTypeName3: '',
}

const Register = () => {
  const [data, setData] = useState(INITIAL_DATA)
  function updateFields(fields: Partial<FormData> ) {
    setData(prev => {
      return { ...prev, ...fields }
    })
  }
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultiStepForm([ <ServiceTypeForm {...data} updateFields={updateFields} /> ]);

    function onSubmit(e: FormEvent) {
      e.preventDefault()
      next()
    }
  return (
    <div className="register-container">
      <div className="register-form-card">
        <form onSubmit={onSubmit} className="register-form">
          <div className="form-pages">
            {currentStepIndex + 1} / {steps.length}
          </div>
          {step}
          <div className="btn-container">
            {!isFirstStep && (
              <button type="button" onClick={back}>
                Back
              </button>
            )}
            <button type="submit">
              {isLastStep ? "Finish" : "Next"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
