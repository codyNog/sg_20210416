import {
  Drawer as DrawerWrapper,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  BoxProps,
  Box,
  IconButton
} from "@chakra-ui/react";
import { useState } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Header = (props: BoxProps) => <Box px={4} py={3} as={"nav"} {...props} />;

export const Drawer: React.FC = () => {
  const [isOpen, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Header bgColor={"grey"}>
        <IconButton
          aria-label={"open-drawer"}
          icon={<HamburgerIcon />}
          onClick={() => setOpen(true)}
        >
          open
        </IconButton>
      </Header>
      <DrawerWrapper isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody></DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </DrawerWrapper>
    </>
  );
};
