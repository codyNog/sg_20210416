import { Box, BoxProps, Text } from "@chakra-ui/react";
import { User } from "~/domain/entities/User";
import { PropertyItem } from "~/components/molecules/PropertyItem";

interface Props extends BoxProps {
  user: User;
}

export const UserItem: React.FC<Props> = ({ user, ...boxProps }) => {
  return (
    <Box {...boxProps}>
      <Box>
        <Text>{user.profile.familyName + user.profile.firstName}</Text>
        <Text>{user.profile.age}</Text>
      </Box>
      <Box>
        {user.properties.map((elem) => (
          <PropertyItem key={elem.id} propertyItem={elem} />
        ))}
      </Box>
    </Box>
  );
};
