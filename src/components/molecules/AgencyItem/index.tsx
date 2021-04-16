import { Box, BoxProps } from "@chakra-ui/layout";
import { Card } from "~/components/atoms/Card";
import { Agency } from "~/domain/entities/Agency";

interface Props extends BoxProps {
  agency: Agency;
}

export const AgencyItem: React.FC<Props> = ({ agency }) => {
  return (
    <Card>
      <Box>{agency.name}</Box>
      <Box>
        <Box>{agency.address.prefecture}</Box>
        <Box>{agency.address.city}</Box>
      </Box>
    </Card>
  );
};
