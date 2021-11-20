import React from "react";
import NextLink from "next/link";
import { Box, Flex, Heading, Link } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex
      align="center"
      justify="space-between"
      w="100%"
      h={{ base: 16, md: 20 }}
      bg="black"
      color="white"
      px={{ base: 4, md: 20 }}
    >
      <NextLink href="/" passHref>
        <Link _hover={{ textDecor: "none" }}>
          <Heading as="h3" fontSize={{ base: "xl", md: "3xl" }}>
            {`WiNE's BLOG`}
          </Heading>
        </Link>
      </NextLink>

      <Box>
        <NextLink href="/about" passHref>
          <Link _hover={{ textDecor: "none" }}>About</Link>
        </NextLink>
      </Box>
    </Flex>
  );
};

export default Navbar;
