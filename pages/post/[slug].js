import React from "react";
import {
  Avatar,
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import BlockContent from "@sanity/block-content-to-react";
import {
  getAllPostsForHome,
  getAllPostsWithSlug,
  getPostAndMorePosts,
} from "../../lib/api";
import Form from "@components/Form";
import Comment from "@components/Comment";
import PostCard from "@components/PostCard";
import { Typography } from "@mui/material";

const Blog = ({ post, morePosts }) => {
  return (
    <Box>
      <Flex
        h={{ md: "60vh" }}
        w="100%"
        overflow="hidden"
        direction="column"
        pos="relative"
      >
        <Image
          w="100%"
          h="100%"
          fit="cover"
          src={post?.coverImage}
          alt={post?.title}
        />
        <Box pos="absolute" inset={0} bg="rgba(0,0,0,.4)" />

        <Box
          pos="absolute"
          bottom={{ base: 6, md: 24 }}
          left={{ base: 4, md: 16 }}
          color="white"
        >
          <Heading as="h2" fontSize={{ base: "2xl", md: "6xl" }}>
            {post?.title}
          </Heading>

          <HStack spacing="1rem" mt={2}>
            <Text>By:</Text>
            <Avatar size="sm" src={post?.author?.avatar} />
            <Text fontWeight="bold">{post?.author?.name}</Text>
          </HStack>
        </Box>
      </Flex>

      <Container maxW="4xl" my={14}>
        <Text fontSize="lg" lineHeight="tall" fontFamily="text">
          <BlockContent
            blocks={post?.body}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
            dataset="production"
          />
        </Text>

        <Form _id={post?._id} />

        <Comment post={post} />

        <Stack mt={20} spacing="2rem">
          <Typography sx={{ fontWeight: 700 }}>Related posts</Typography>
          <Grid templateColumns={{ md: "repeat(3, 1fr)" }} gap={6}>
            {morePosts?.slice(0, 3)?.map((post) => (
              <PostCard key={post?._id} post={post} />
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview);
  const posts = await getAllPostsForHome(preview);
  return {
    props: {
      preview,
      post: data?.post || null,
      morePosts: data?.morePosts || null,
      posts,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths:
      allPosts?.map((post) => ({
        params: {
          slug: post.slug,
        },
      })) || [],
    fallback: true,
  };
}

export default Blog;
