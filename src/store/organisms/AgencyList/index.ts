import useSWR from "swr";
import { backend } from "~/domain/backend";
import { Agency } from "~/domain/entities/Agency";

export const useAgencyList = () => {
  const { data: agencies } = useSWR<Agency[]>(
    "agencies",
    backend().agency.fetchAgencies
  );

  return { agencies };
};
