import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import PostCard from "@components/PostCard";
import EventCard from "@components/EventCard";
import EventCalendar from "@components/EventCalendar";
import { getAllPostsForEvents, getAllPostsForHome } from "../lib/api";

export default function Home({ allPosts, allEvents }) {
  const featuredPost = allPosts[0];

  return (
    <Box>
      <Container maxW="8xl" mt={20}>
        <Flex
          h={{ base: "50vh", md: "60vh" }}
          w="100%"
          overflow="hidden"
          direction="column"
          pos="relative"
          rounded="xl"
        >
          <Image
            w="100%"
            h="100%"
            fit="cover"
            src={featuredPost?.coverImage}
            alt="blog"
            rounded="xl"
          />
          <Box pos="absolute" inset={0} bg="rgba(0,0,0,.4)" />

          <Box
            pos="absolute"
            bottom={{ base: 12, md: 24 }}
            left={{ base: 6, md: 16 }}
            color="white"
          >
            <Text fontWeight={600}>Featured Post</Text>
            <Heading as="h2" fontSize={{ base: "3xl", md: "6xl" }}>
              {featuredPost?.title}
            </Heading>
            <Text fontSize={{ md: "lg" }}>{featuredPost?.excerpt}</Text>
          </Box>
        </Flex>

        <Grid templateColumns={{ md: "70% 27%" }} gap={10} my={12}>
          <Grid templateColumns={{ md: "repeat(3, 1fr)" }} gap={6}>
            {allPosts.map((post) => (
              <PostCard key={post?._id} post={post} />
            ))}
          </Grid>
          <Box>
            <Text fontSize={{ md: "xl" }} fontWeight="bold">
              Upcoming events
            </Text>

            <Stack spacing="1rem" mt={6}>
              {allEvents.map((event) => (
                <EventCard key={event?._id} event={event} />
              ))}
            </Stack>

            <Stack spacing="1rem" mt={10}>
              <Text fontSize={{ md: "xl" }} fontWeight="bold">
                Upcoming event calendar
              </Text>
              <EventCalendar />
            </Stack>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  const allEvents = await getAllPostsForEvents(preview);
  return {
    props: { allPosts, allEvents, preview },
  };
}
