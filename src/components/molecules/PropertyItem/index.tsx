import { Property } from "~/domain/entities/Property";
import { Box, Text, Tag, BoxProps } from "@chakra-ui/react";
import { Card } from "~/components/atoms/Card";

interface Props extends BoxProps {
  propertyItem: Property;
}

export const PropertyItem: React.FC<Props> = ({
  propertyItem,
  ...boxProps
}) => {
  return (
    <Card {...boxProps}>
      <Text>{propertyItem.name}</Text>
      <Box>
        <Text>{propertyItem.status.value}</Text>
        <Box>
          <Text>{propertyItem.address.prefecture}</Text>
          <Text>{propertyItem.address.city}</Text>
          <Text>{propertyItem.address.otherAddress}</Text>
        </Box>
        <Box>
          <Text>{propertyItem.detail.area}</Text>
          <Text>{propertyItem.detail.floorPlan}</Text>
          {propertyItem.detail.features.map((elem) => (
            <Tag key={elem}>{elem}</Tag>
          ))}
        </Box>
      </Box>
    </Card>
  );
};
