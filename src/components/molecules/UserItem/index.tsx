import { BoxProps, Text } from "@chakra-ui/react";
import { Card } from "~/components/atoms/Card";
import { User } from "~/domain/entities/User";

interface Props extends BoxProps {
  user: User;
}

export const UserItem: React.FC<Props> = ({ user, ...boxProps }) => {
  return (
    <Card {...boxProps}>
      <Text>{user.profile.familyName + user.profile.firstName}</Text>
      <Text>{user.profile.age}</Text>
    </Card>
  );
};
