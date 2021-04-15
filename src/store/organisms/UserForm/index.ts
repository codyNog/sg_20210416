import { useRouter } from "next/dist/client/router";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import { backend } from "~/domain/backend";
import { User } from "~/domain/entities/User";

interface FormValue {
  firstName: string;
  familyName: string;
  age: number;
  income: number;
}

export const useUserForm = () => {
  const { query, push } = useRouter();
  const { register, handleSubmit } = useForm<User>();
  const { data: user, mutate: setUser } = useSWR(
    query.userId ? [query.userId] : null,
    backend().user.fetchUser,
    { revalidateOnMount: true }
  );

  const isEdit = !!user;

  const onSubmit = async (props: FormValue) => {
    const { firstName, familyName, age, income } = props;
    if (!firstName || !familyName || !age || !income) return;
    const nextState: User = {
      id: user ? user.id : "",
      profile: {
        firstName,
        familyName,
        age,
        income
      },
      properties: [],
      requests: []
    };
    const newUser = isEdit
      ? await backend().user.updateUser(nextState)
      : await backend().user.createUser(nextState);
    setUser(newUser, false);
    push("/users");
  };

  const submit = handleSubmit(onSubmit);

  const onDelete = async () => {
    if (!user) return;
    await backend().user.deleteUser(user.id);
    push("/users");
  };

  return { register, submit, onDelete, user };
};
