import { Box, BoxProps, Text } from "@chakra-ui/react";
import { User } from "~/domain/entities/User";

interface Props extends BoxProps {
  user: User;
}

export const UserItem: React.FC<Props> = ({ user, ...boxProps }) => {
  return (
    <Box {...boxProps}>
      <Text>{user.profile.familyName + user.profile.firstName}</Text>
      <Text>{user.profile.age}</Text>
    </Box>
  );
};
