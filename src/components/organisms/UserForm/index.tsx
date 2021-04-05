import { Box, Input, Text } from "@chakra-ui/react";
import { User } from "~/domain/entities/User";
import { useUserForm } from "~/store/organisms/UserForm";

interface Props {
  user?: User;
}

export const UserForm: React.FC<Props> = ({ user }) => {
  const { register, submit } = useUserForm();

  return (
    <Box as={"form"} onSubmit={submit}>
      <Text>ユーザー作成</Text>
      <Text>苗字</Text>
      <Input name={"familyName"} ref={register} />
      <Text>名前</Text>
      <Input name={"firstName"} ref={register} />
      <Text>年齢</Text>
      <Input name={"age"} type={"number"} ref={register} />
      <Text>収入</Text>
      <Input name={"income"} type={"number"} ref={register} />
      <Input mt={2} type={"submit"} value={"ユーザーを作成する"} />
    </Box>
  );
};
