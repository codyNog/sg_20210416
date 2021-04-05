import { Box, BoxProps } from "@chakra-ui/react";

export const Card = (props: BoxProps) => (
  <Box px="4" py="5" rounded="sm" shadow="lg" {...props} />
);
