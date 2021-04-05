import { Box, Input, Text } from "@chakra-ui/react";
import { User } from "~/domain/entities/User";
import { useUserForm } from "~/store/organisms/UserForm";

interface Props {
  user?: User;
}

export const UserForm: React.FC<Props> = ({ user }) => {
  const { register, submit, onDelete } = useUserForm(user);

  return (
    <Box as={"form"} onSubmit={submit}>
      <Text>ユーザー作成</Text>
      <Text>苗字</Text>
      <Input
        name={"familyName"}
        defaultValue={user ? user.profile.familyName : ""}
        ref={register}
      />
      <Text>名前</Text>
      <Input
        name={"firstName"}
        defaultValue={user ? user.profile.firstName : ""}
        ref={register}
      />
      <Text>年齢</Text>
      <Input
        name={"age"}
        type={"number"}
        defaultValue={user ? user.profile.age : ""}
        ref={register}
      />
      <Text>収入</Text>
      <Input
        name={"income"}
        type={"number"}
        defaultValue={user ? user.profile.income : ""}
        ref={register}
      />
      <Input
        mt={2}
        type={"submit"}
        value={user ? "ユーザーを編集する" : "ユーザーを作成する"}
      />
      {user && (
        <Input
          bgColor={"red"}
          color={"white"}
          mt={2}
          type={"submit"}
          value={"ユーザーを削除する"}
          onClick={onDelete}
        />
      )}
    </Box>
  );
};
