import Link from "next/link";
import { UserItem } from "~/components/molecules/UserItem";
import { GlobalStore } from "~/store/global";

export const UserList: React.FC = () => {
  const { users } = GlobalStore.useContainer();

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
