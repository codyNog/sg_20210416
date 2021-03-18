import { useRouter } from "next/dist/client/router";
import useSWR from "swr";
import { UserItem } from "~/components/organisms/UserItem";
import { backend } from "~/domain/backend";

const Component = () => {
  const { query } = useRouter();
  const { data: user } = useSWR([query.userId], backend().user.fetchUser);
  return <UserItem user={user} />;
};

export default Component;
