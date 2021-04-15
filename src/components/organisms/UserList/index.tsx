import Link from "next/link";
import { useEffect } from "react";
import { UserItem } from "~/components/molecules/UserItem";
import { GlobalStore } from "~/store/global";

export const UserList: React.FC = () => {
  const { users, revalidateUsers } = GlobalStore.useContainer();

  useEffect(() => {
    revalidateUsers();
  }, []);

  if (!users) return null;

  return (
    <>
      {users.map((user) => (
        <Link key={user.id} href={`/users/${user.id}`}>
          <UserItem user={user} cursor={"pointer"} />
        </Link>
      ))}
    </>
  );
};
