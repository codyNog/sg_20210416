import { Box, BoxProps } from "@chakra-ui/layout";

const Wrapper = (props: BoxProps) => <Box px={4} py={2} {...props} />;

export const Template: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
