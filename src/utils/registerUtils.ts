import AxiosConfig from "../api/AxiosConfig";
import {
  ADDRESS_REGISTRATION_ENDPOINT,
  ORGANIZATION_REGISTRATION_ENDPOINT,
  USER_REGISTRATION_ENDPOINT,
} from "../api/apiEndpoints";
import { FormData } from "../pages/register/registrationForms/InitialRegistrationData";

export const handleRegistration = async (data: FormData) => {
  try {
    const addressData = {
      addressStreetNumber: data.addressStreetNumber,
      addressStreetName: data.addressStreetName,
      addressCity: data.addressCity,
      addressState: data.addressState,
      addressZipCode: data.addressZipCode,
    };

    const organizationData = {
      organizationName: data.organizationName,
      organizationEmail: data.organizationEmail,
    };

    const userData = {
      firstName: data.firstName,
      lastName: data.lastName,
      username: data.username,
      userType: data.userType,
      email: data.email,
      password: data.password,
    };

    const userResponse = await AxiosConfig.post(
        USER_REGISTRATION_ENDPOINT, 
        { ...userData }
    );

    const addressResponse = await AxiosConfig.post(
      ADDRESS_REGISTRATION_ENDPOINT,
      { ...addressData }
    );
    
    const organizationResponse = await AxiosConfig.post(
      ORGANIZATION_REGISTRATION_ENDPOINT,
      { ...organizationData }
    );    


  } catch (error) {
    console.log(error);
    throw error;
  }
};
