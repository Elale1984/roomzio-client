import { FormWrapper } from "./FormWrapper";

export function AdminForm() {
  return (
    <FormWrapper title="Admin Setup">
      <input type="text" autoFocus required placeholder="First Name" />
      <input type="text" required placeholder="Last Name" />
      <input type="email" required placeholder="Email" />
      <input type="text" required placeholder="Username" />
      <input type="password" required placeholder="Password" />
      <input type="password" required placeholder="Confirm Password" />
    </FormWrapper>
  );
}
