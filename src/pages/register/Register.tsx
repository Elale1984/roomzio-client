// Register.tsx
import { FormEvent, useState } from "react";
import { useMultiStepForm } from "./useMultiStepForm";
import { AdminForm } from "./registrationForms/AdminForm";
import { AddressForm } from "./registrationForms/AddressForm";
import { OrganizationForm } from "./registrationForms/OrganizationForm";
import { ServiceTypeForm } from "./registrationForms/ServiceTypeForm";
import { FormData, INITIAL_REGISTRATION_DATA } from "./registrationForms/InitialRegistrationData";
import { handleRegistration } from "../../utils/registerUtils";
import { useNavigate } from "react-router-dom";
import './Register.css'

const Register = () => {
  const [data, setData] = useState(INITIAL_REGISTRATION_DATA);
  const navigate = useNavigate();

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      data.userType = "admin";
      return { ...prev, ...fields };
    });
  }

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultiStepForm([
      <AdminForm {...data} updateFields={updateFields} />,
      <OrganizationForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />,
      <ServiceTypeForm {...data} updateFields={updateFields} />,
    ]);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!isLastStep) return next();
    console.log(data);

    try {
      await handleRegistration(
        data,
      );

      navigate('/dashboard/organization');

    } catch (err) {
      console.error(err);
    }
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
            <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
