import { FormWrapper } from "./FormWrapper";

type OrganizationData = {
  organizationName: string;
  organizationEmail: string;
};

type OrganizationFormProps = OrganizationData & {
  updateFields: (fields: Partial<OrganizationData>) => void;
};

export function OrganizationForm({
  organizationName,
  organizationEmail,
  updateFields,
}: OrganizationFormProps) {
  return (
    <FormWrapper title="Tell us About Your Organization ">
      <input
        type="text"
        autoFocus
        placeholder="Organization Name"
        value={organizationName}
        onChange={(e) => updateFields({ organizationName: e.target.value })}
      />
      <input
        type="email"
        placeholder="Organization Email"
        value={organizationEmail}
        onChange={(e) => updateFields({ organizationEmail: e.target.value })}
      />
    </FormWrapper>
  );
}
