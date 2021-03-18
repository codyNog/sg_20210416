import { Box, Input, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { User } from "~/domain/entities/User";

interface Props {
  user?: User;
}

export const UserForm: React.FC<Props> = ({ user }) => {
  const onSubmit = ({ firstName, familyName, age, income }) => {
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
    console.log(user);
  };
  const { register, handleSubmit } = useForm();
  return (
    <Box as={"form"} onSubmit={handleSubmit(onSubmit)}>
      <Text>ユーザー作成</Text>
      <Input name={"firstName"} ref={register} />
      <Input name={"familyName"} ref={register} />
      <Input name={"age"} ref={register} />
      <Input name={"income"} ref={register} />
      <Input type={"submit"} value={"ユーザーを作成する"} />
    </Box>
  );
};
