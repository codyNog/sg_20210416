import { createContainer } from "unstated-next";
import useSWR from "swr";
import { backend } from "~/domain/backend";
import { User } from "~/domain/entities/User";

export const useGlobal = () => {
  const { data: users, mutate: setUsers } = useSWR<User[]>(
    "users",
    backend().user.fetchUsers
  );

  return { users, setUsers };
};

export const GlobalStore = createContainer(useGlobal);
