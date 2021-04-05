import { useForm } from "react-hook-form";
import { backend } from "~/domain/backend";
import { User } from "~/domain/entities/User";

interface FormValue {
  firstName: string;
  familyName: string;
  age: number;
  income: number;
}

export const useUserForm = (user?: User) => {
  const { register, handleSubmit } = useForm<User>();

  const isEdit = !!user;

  const onSubmit = async ({ ...props }: FormValue) => {
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
    isEdit
      ? await backend().user.updateUser(nextState)
      : await backend().user.createUser(nextState);
  };

  const submit = handleSubmit(onSubmit);

  const onDelete = async () => {
    if (!user) return;
    await backend().user.deleteUser(user.id);
  };

  return { register, submit, onDelete };
};
