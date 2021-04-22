import useSWR from "swr";
import { backend } from "~/domain/backend";

export const useAgencyList = () => {
  const { data: agencies } = useSWR("agencies", backend().agency.fetchAgencies);

  return { agencies };
};
