import { Box, Button, Input, Text } from "@chakra-ui/react";
import { useUserForm } from "~/store/organisms/UserForm";

export const UserForm: React.FC = () => {
  const { register, submit, onDelete, user } = useUserForm();

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
        <Button
          width={"100%"}
          bgColor={"red"}
          color={"white"}
          mt={2}
          onClick={onDelete}
        >
          ユーザーを削除する
        </Button>
      )}
    </Box>
  );
};
