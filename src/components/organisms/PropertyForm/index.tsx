import { Box, Button, Input, Select, Tag, Text } from "@chakra-ui/react";
import { Property } from "~/domain/entities/Property";
import { usePropertyForm } from "~/store/organisms/PropertyForm";

interface Props {
  property?: Property;
}

export const PropertyForm: React.FC<Props> = ({ property }) => {
  const {
    submit,
    onDelete,
    register,
    onChangeFeature,
    onEnterFeatures,
    features,
    feature
  } = usePropertyForm(property);

  return (
    <Box as={"form"} onSubmit={submit}>
      <Text>物件作成</Text>
      <Text>物件名</Text>
      <Input
        name={"name"}
        defaultValue={property ? property.name : ""}
        ref={register}
      />
      <Text>資産価値</Text>
      <Input
        name={"value"}
        type={"number"}
        defaultValue={property ? property.status.value : ""}
        ref={register}
      />
      <Text>用途</Text>
      <Select />
      <Text>賃料</Text>
      <Input
        name={"rent"}
        type={"number"}
        defaultValue={property ? property.status.rent : ""}
        ref={register}
      />
      <Text>住所</Text>
      <Input
        name={"prefecture"}
        defaultValue={property ? property.address.prefecture : ""}
        ref={register}
      />
      <Input
        name={"city"}
        defaultValue={property ? property.address.city : ""}
        ref={register}
      />
      <Input
        name={"otherAddress"}
        defaultValue={property ? property.address.otherAddress : ""}
        ref={register}
      />
      <Text>詳細</Text>
      <Text>面積</Text>
      <Input
        name={"area"}
        defaultValue={property ? property.detail.area : ""}
        ref={register}
      />
      <Text>間取り</Text>
      <Input
        name={"floorPlan"}
        defaultValue={property ? property.detail.floorPlan : ""}
        ref={register}
      />
      <Text>特徴</Text>
      <Input
        value={feature}
        onChange={(e) => onChangeFeature(e.currentTarget.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") onEnterFeatures();
        }}
      />
      {features.map((elem) => {
        <Text>{elem}</Text>;
      })}
      <Input
        mt={2}
        type={"submit"}
        value={property ? "物件を編集する" : "物件を作成する"}
      />
      {property && (
        <Button
          width={"100%"}
          bgColor={"red"}
          color={"white"}
          mt={2}
          onClick={onDelete}
        >
          物件を削除する
        </Button>
      )}
    </Box>
  );
};
