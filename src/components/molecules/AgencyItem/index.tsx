import { BoxProps, Text } from "@chakra-ui/react";
import { Card } from "~/components/atoms/Card";
import { Agency } from "~/domain/entities/Agency";

interface Props extends BoxProps {
  agency: Agency;
}

export const AgencyItem: React.FC<Props> = ({ agency, ...boxProps }) => {
  return (
    <Card {...boxProps}>
      <Text>{agency.name}</Text>
      <Text>{agency.address.prefecture}</Text>
      <Text>{agency.address.city}</Text>
      <Text>{agency.address.otherAddress}</Text>
    </Card>
  );
};
