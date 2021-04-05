import useSWR from "swr";
import { UserItem } from "~/components/molecules/UserItem";
import { backend } from "~/domain/backend";
import { User } from "~/domain/entities/User";

export const UserList: React.FC = () => {
  const { data: users } = useSWR<User[]>("users", backend().user.fetchUsers);

  if (!users) return null;

  return (
    <>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </>
  );
};
