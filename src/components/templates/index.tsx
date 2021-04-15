import {
  Drawer as DrawerWrapper,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  BoxProps,
  Box,
  IconButton,
  Flex
} from "@chakra-ui/react";
import { useState } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";

const links = [
  { href: "/users", body: "ユーザー一覧" },
  { href: "/users/create", body: "ユーザー作成" },
  { href: "/agencies", body: "不動産業者一覧" },
  { href: "/agencies/create", body: "不動産業者作成" },
  { href: "/properties", body: "不動産一覧" },
  { href: "/properties/create", body: "不動産作成" }
];

const Header = (props: BoxProps) => <Box px={4} py={3} as={"nav"} {...props} />;
const Wrapper = (props: BoxProps) => <Box {...props} />;
const Content = (props: BoxProps) => <Box px={4} py={2} {...props} />;

export const Template: React.FC = ({ children }) => {
  const [isOpen, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Wrapper>
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
            <DrawerBody>
              <Flex
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Box>
                  {links.map(({ href, body }) => (
                    <Box key={href}>
                      <Link href={href}>{body}</Link>
                    </Box>
                  ))}
                </Box>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </DrawerWrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
};
