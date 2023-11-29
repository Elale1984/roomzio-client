export type FormData = {
    firstName: string;
    lastName: string;
    username: string;
    userType: string;
    email: string;
    password: string;
    rePassword: string;
    organizationName: string;
    organizationEmail: string;
    addressStreetNumber: string;
    addressStreetName: string;
    addressCity: string;
    addressState: string;
    addressZipCode: string;
    serviceTypeName1: string;
    serviceTypeName2: string;
    serviceTypeName3: string;
  };
  export const INITIAL_REGISTRATION_DATA: FormData = {
    firstName: "",
    lastName: "",
    username: "",
    userType: "",
    email: "",
    password: "",
    rePassword: "",
    organizationName: "",
    organizationEmail: "",
    addressStreetNumber: "",
    addressStreetName: "",
    addressCity: "",
    addressState: "",
    addressZipCode: "",
    serviceTypeName1: "",
    serviceTypeName2: "",
    serviceTypeName3: "",
  };