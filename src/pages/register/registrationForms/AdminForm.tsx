import { FormWrapper } from "./FormWrapper";

type AdminData = {
  firstName: string;
  lastName: string;
  username: string;
  userType: string;
  email: string;
  password: string;
  rePassword: string;
};

type AdminFormProps = AdminData & {
  updateFields: (fields: Partial<AdminData>) => void;
};

export function AdminForm({
  firstName,
  lastName,
  username,
  userType,
  email,
  password,
  rePassword,
  updateFields,
}: AdminFormProps) {
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
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => updateFields({ password: e.target.value })}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={rePassword}
        onChange={(e) => updateFields({ rePassword: e.target.value })}
      />
    </FormWrapper>
  );
}
