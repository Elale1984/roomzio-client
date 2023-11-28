import { FormWrapper } from "./FormWrapper";
import "./ServiceTypeForm.css";

type ServiceTypeData = {
  serviceTypeName1: string
  serviceTypeName2: string
  serviceTypeName3: string
};


type ServiceTypeFormProps = ServiceTypeData & {
  updateFields: (fields: Partial<ServiceTypeData>) => void;
};

export function ServiceTypeForm({
  serviceTypeName1,
  serviceTypeName2,
  serviceTypeName3,
  updateFields
}: ServiceTypeFormProps) {
  return (
    <FormWrapper title='Types of Services '>
      <input
        type="text"
        autoFocus
        required
        placeholder="Enter Service Type 1"
        value={serviceTypeName1}
        onChange={e => updateFields({ serviceTypeName1: e.target.value })}
      />
      <input
        type="text"
        placeholder="Enter Service Type 2 (Optional)"
        value={serviceTypeName2}
        onChange={e => updateFields({ serviceTypeName2: e.target.value })}
      />
      <input
        type="text"
        placeholder="Enter Service Type 3 (Optional)"
        value={serviceTypeName3}
        onChange={e => updateFields({ serviceTypeName3: e.target.value })}
      />

    </FormWrapper>
  );
}
