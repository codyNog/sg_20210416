import { useRouter } from "next/dist/client/router";
import useSWR from "swr";
import { UserForm } from "~/components/organisms/UserForm";
import { Template } from "~/components/templates";
import { backend } from "~/domain/backend";

const Component = () => {
  const { query } = useRouter();
  const { data: user } = useSWR(
    query.userId ? [query.userId] : null,
    backend().user.fetchUser
  );

  if (!user) return null;

  return (
    <Template>
      <UserForm user={user} />
    </Template>
  );
};

export default Component;
