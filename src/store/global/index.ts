import { createContainer } from "unstated-next";
import useSWR from "swr";
import { backend } from "~/domain/backend";
import { User } from "~/domain/entities/User";
import { Agency } from "~/domain/entities/Agency";

export const useGlobal = () => {
  const { data: users, mutate: setUsers, revalidate: revalidateUsers } = useSWR<
    User[]
  >("users", backend().user.fetchUsers);
  const { data: agencies } = useSWR<Agency[]>(
    "agencies",
    backend().agency.fetchAgencies
  );

  return { users, setUsers, agencies, revalidateUsers };
};

export const GlobalStore = createContainer(useGlobal);
