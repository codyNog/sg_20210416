import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { Template } from "~/components/templates";

const links = [
  { href: "/users", body: "ユーザー一覧" },
  { href: "/users/create", body: "ユーザー作成" },
  { href: "/agencies", body: "不動産業者一覧" },
  { href: "/agencies/create", body: "不動産業者作成" },
  { href: "/properties", body: "不動産一覧" },
  { href: "/properties/create", body: "不動産作成" }
];

const Component = () => {
  return (
    <Template>
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
    </Template>
  );
};

export default Component;
