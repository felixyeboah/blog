import React from "react";
import NextLink from "next/link";
import { Box, HStack, Image, Link, Stack, Text } from "@chakra-ui/react";

const PostCard = () => {
  return (
    <NextLink href="/blog/123" passHref>
      <Link _hover={{ textDecor: "none" }}>
        <Box pos="relative" h={90}>
          <Image
            h="100%"
            w="100%"
            rounded="lg"
            fit="cover"
            src="https://images.pexels.com/photos/8305201/pexels-photo-8305201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="pic"
          />
          <Stack
            bg="rgba(255,255,255,.92)"
            pos="absolute"
            bottom={2}
            insetX={2}
            p={4}
            rounded="md"
          >
            <HStack align="center" justify="space-between">
              <Text fontWeight="bold" color="gray.600">
                Lorem ipsum dolor.
              </Text>
              <Text fontWeight="semibold" color="gray.500" fontSize="xs">
                20-10-2021
              </Text>
            </HStack>
            <Text fontSize={{ md: "md" }} noOfLines={2}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              consequatur rem ut?
            </Text>
          </Stack>
        </Box>
      </Link>
    </NextLink>
  );
};

export default PostCard;
