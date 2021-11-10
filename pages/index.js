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

export default function Home() {
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
            src="https://images.pexels.com/photos/9567693/pexels-photo-9567693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
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
              Lorem ipsum dolor sit amet.
            </Heading>
            <Text fontSize={{ md: "lg" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quisquam, vero.
            </Text>
          </Box>
        </Flex>

        <Grid templateColumns={{ md: "70% 27%" }} gap={10} my={12}>
          <Grid templateColumns={{ md: "repeat(3, 1fr)" }} gap={6}>
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </Grid>
          <Box>
            <Text fontSize={{ md: "xl" }} fontWeight="bold">
              Upcoming events
            </Text>

            <Stack spacing="1rem" mt={6}>
              <EventCard />
              <EventCard />
              <EventCard />
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
