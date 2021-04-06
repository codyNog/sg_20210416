import { useRouter } from "next/dist/client/router";
import useSWR from "swr";
import { AgencyForm } from "~/components/organisms/AgencyForm";
import { Template } from "~/components/templates";
import { backend } from "~/domain/backend";

const Component = () => {
  const { query } = useRouter();
  const { data: agency } = useSWR(
    query.agencyId ? [query.agencyId] : null,
    backend().agency.fetchAgency,
    { revalidateOnMount: true }
  );

  if (!agency) return null;

  return (
    <Template>
      <AgencyForm agency={agency} />
    </Template>
  );
};

export default Component;
