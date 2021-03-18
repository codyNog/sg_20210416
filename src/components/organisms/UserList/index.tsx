import Link from "next/link";
import { UserItem } from "~/components/molecules/UserItem";
import { useUserList } from "~/store/organisms/UserList";

export const UserList: React.FC = () => {
  const { users } = useUserList();

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
