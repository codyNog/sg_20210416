import { useForm } from "react-hook-form";
import { backend } from "~/domain/backend";
import { Agency } from "~/domain/entities/Agency";

interface FormValue {
  name: string;
  prefecture: string;
  city: string;
  otherAddress: string;
}

export const useAgencyForm = (agency: Agency) => {
  const { register, handleSubmit } = useForm<Agency>();

  const isEdit = !!agency;

  const onSubmit = async (props: FormValue) => {
    const { name, prefecture, city, otherAddress } = props;
    const nextState: Agency = {
      id: agency ? agency.id : "",
      name,
      address: {
        prefecture,
        city,
        otherAddress
      },
      properties: [],
      requests: []
    };
    isEdit
      ? await backend().agency.updateAgency(nextState)
      : await backend().agency.createAgency(nextState);
  };

  const submit = handleSubmit(onSubmit);

  const onDelete = async () => {
    if (!agency) return;
    if (confirm("この不動産業者を削除しますか？"))
      await backend().agency.deleteAgency(agency.id);
  };

  return { register, submit, onDelete };
};
