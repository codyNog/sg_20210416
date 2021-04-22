import { useRouter } from "next/dist/client/router";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import { backend } from "~/domain/backend";
import { Agency } from "~/domain/entities/Agency";

interface FormValue {
  name: string;
  prefecture: string;
  city: string;
  otherAddress: string;
}

export const useAgencyForm = () => {
  const { query, push } = useRouter();
  const { register, handleSubmit } = useForm<Agency>();
  const { data: agency, mutate: setAgency } = useSWR(
    query.agencyId ? [query.agencyId] : null,
    backend().agency.fetchAgency,
    { revalidateOnMount: true }
  );

  const isEdit = !!agency;

  const onSubmit = async (props: FormValue) => {
    const { name, prefecture, city, otherAddress } = props;
    if (!name || !prefecture || !city || !otherAddress) return;
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
    const newAgency = isEdit
      ? await backend().agency.updateAgency(nextState)
      : await backend().agency.createAgency(nextState);
    setAgency(newAgency, false);
    push("/agencies");
  };

  const submit = handleSubmit(onSubmit);

  const onDelete = async () => {
    if (!agency) return;
    await backend().agency.deleteAgency(agency.id);
    push("/agencies");
  };

  return { register, submit, onDelete, agency };
};
