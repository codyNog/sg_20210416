import React from "react";
import { Box, Button, Input, Text } from "@chakra-ui/react";
import { useAgencyForm } from "~/store/organisms/AgencyForm";

export const AgencyForm: React.FC = () => {
  const { agency, submit, onDelete, register } = useAgencyForm();

  return (
    <Box as={"form"} onSubmit={submit}>
      <Text>不動産業者作成</Text>
      <Text>名称</Text>
      <Input
        name={"name"}
        defaultValue={agency ? agency.name : ""}
        ref={register}
      />
      <Text>都道府県</Text>
      <Input
        name={"prefecture"}
        defaultValue={agency ? agency.address.prefecture : ""}
        ref={register}
      />
      <Text>市区町村</Text>
      <Input
        name={"city"}
        defaultValue={agency ? agency.address.city : ""}
        ref={register}
      />
      <Text>以降の住所</Text>
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
