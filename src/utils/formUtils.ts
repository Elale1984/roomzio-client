

export const validateUsername = (username: string) => {
    return username.length >= 8;
  };
  
  
  export const validatePassword = (p: string) => {
    return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#-_])[A-Za-z0-9@#-_]{8,}$/
    ;

  };