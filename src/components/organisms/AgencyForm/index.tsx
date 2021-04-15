import { Input, Box, Text, Button } from "@chakra-ui/react";
import { Agency } from "~/domain/entities/Agency";
import { useAgencyForm } from "~/store/organisms/AgencyForm";

interface Props {
  agency?: Agency;
}

export const AgencyForm: React.FC<Props> = () => {
  const { register, submit, onDelete, agency } = useAgencyForm();

  return (
    <Box as={"form"} onSubmit={submit}>
      <Text>不動産業者作成</Text>
      <Text>名前</Text>
      <Input
        name={"name"}
        defaultValue={agency ? agency.name : ""}
        ref={register}
      />
      <Text>住所</Text>
      <Input
        name={"prefecture"}
        defaultValue={agency ? agency.address.prefecture : ""}
        ref={register}
      />
      <Input
        name={"city"}
        defaultValue={agency ? agency.address.city : ""}
        ref={register}
      />
      <Input
        name={"otherAddress"}
        defaultValue={agency ? agency.address.otherAddress : ""}
        ref={register}
      />
      <Input
        mt={2}
        type={"submit"}
        value={agency ? "不動産業者を編集する" : "不動産業者を作成する"}
      />
      {agency && (
        <Button
          width={"100%"}
          bgColor={"red"}
          color={"white"}
          mt={2}
          onClick={onDelete}
        >
          不動産業者を削除する
        </Button>
      )}
    </Box>
  );
};
