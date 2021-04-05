import { useForm } from "react-hook-form";
import { backend } from "~/domain/backend";
import { User } from "~/domain/entities/User";

interface FormValue {
  firstName: string;
  familyName: string;
  age: number;
  income: number;
}

export const useUserForm = () => {
  const { register, handleSubmit } = useForm<User>();

  const onSubmit = async ({ ...props }: FormValue) => {
    const { firstName, familyName, age, income } = props;
    if (!firstName || !familyName || !age || !income) return;
    const user: User = {
      id: "",
      profile: {
        firstName,
        familyName,
        age,
        income
      },
      properties: []
    };
    await backend().user.createUser(user);
  };

  const submit = handleSubmit(onSubmit);

  return { register, submit };
};
