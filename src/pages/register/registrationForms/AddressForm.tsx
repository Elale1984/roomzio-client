import { FormWrapper } from "./FormWrapper";

export function AddressForm() {
  return (
    <FormWrapper title="Admin Setup">
      <input type="text" autoFocus required placeholder="Street Number" />
      <input type="text" required placeholder="Street Name" />
      <input type="text" required placeholder="City" />
      <input type="text" required placeholder="State" />
      <input type="text" required placeholder="Zip Code" />
    </FormWrapper>
  );
}
