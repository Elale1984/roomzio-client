import { FormWrapper } from "./FormWrapper";

type AddressData = {
  addressStreetNumber: string
  addressStreetName: string
  addressCity: string
  addressState: string
  addressZipCode: string
};

type AddressFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void;
};

export function AddressForm({
  addressStreetNumber,
  addressStreetName,
  addressCity,
  addressState,
  addressZipCode,
  updateFields,
}: AddressFormProps) {
  return (
    <FormWrapper title="Admin Setup">
      <input
        type="text"
        autoFocus
        placeholder="Street Number"
        value={addressStreetNumber}
        onChange={(e) => updateFields({ addressStreetNumber: e.target.value })}
      />
      <input
        type="text"
        placeholder="Street Name"
        value={addressStreetName}
        onChange={(e) => updateFields({ addressStreetName: e.target.value })}
      />
      <input
        type="text"
        placeholder="City"
        value={addressCity}
        onChange={(e) => updateFields({ addressCity: e.target.value })}
      />
      <input
        type="text"
        placeholder="State"
        value={addressState}
        onChange={(e) => updateFields({ addressState: e.target.value })}
      />
      <input
        type="text"
        placeholder="Zip Code"
        value={addressZipCode}
        onChange={(e) => updateFields({ addressZipCode: e.target.value })}
      />
    </FormWrapper>
  );
}