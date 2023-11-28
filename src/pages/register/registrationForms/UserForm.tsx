import { FormWrapper } from "./FormWrapper";

type UserData = {
  firstName: string;
  lastName: string;
  username: string;
  userType: string;
  email: string;
  password: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

export function UserForm({
  firstName,
  lastName,
  username,
  userType,
  email,
  password,
  updateFields,
}: UserFormProps) {
  return (
    <FormWrapper title="Admin Setup">
      <input
        type="text"
        autoFocus
        placeholder="First Name"
        value={firstName}
        onChange={(e) => updateFields({ firstName: e.target.value })}
      />
      <input
        type="text"        
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => updateFields({ lastName: e.target.value })}
      />
      <input
        type="email"        
        placeholder="Email"
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      />
      <input
        type="text"        
        placeholder="Username"
        value={username}
        onChange={(e) => updateFields({ username: e.target.value })}
      />
       <input
        type="text"        
        placeholder="User Type"
        value={userType}
        onChange={(e) => updateFields({ userType: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => updateFields({ password: e.target.value })}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={password}
        onChange={(e) => updateFields({ password: e.target.value })}
      />
    </FormWrapper>
  );
}
