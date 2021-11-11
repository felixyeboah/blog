import React from "react";
import NextLink from "next/link";
import { Box, HStack, Image, Link, Stack, Text } from "@chakra-ui/react";

const PostCard = ({ post }) => {
  return (
    <NextLink href={`/post/${post?.slug}`} passHref>
      <Link
        _hover={{ textDecor: "none" }}
        _focus={{ outline: "none", shadow: "none" }}
      >
        <Box pos="relative" h={90}>
          <Image
            h="100%"
            w="100%"
            rounded="lg"
            fit="cover"
            src={post?.coverImage}
            alt={post.title}
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
              <Text fontWeight="bold">{post?.title}</Text>
              <Text fontWeight="semibold" color="gray.500" fontSize="xs">
                {post?.date}
              </Text>
            </HStack>
            <Text fontSize={{ md: "sm" }} color="gray.500" noOfLines={2}>
              {post?.excerpt}
            </Text>
          </Stack>
        </Box>
      </Link>
    </NextLink>
  );
};

export default PostCard;
