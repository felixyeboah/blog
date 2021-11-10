import React from "react";
import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Box
      py={{ base: 20, md: 28 }}
      px={{ base: 4, md: 0 }}
      bg="black"
      color="white"
      w="100vw"
      // h={{ md: "calc(100vh - 5rem)" }}
    >
      <Flex
        align="center"
        justify="center"
        w={{ md: 130 }}
        h={{ md: "40vh" }}
        mx="auto"
        direction="column"
        pos="relative"
      >
        <Image
          rounded="lg"
          w="100%"
          h="100%"
          src="https://images.pexels.com/photos/7414038/pexels-photo-7414038.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="about"
          fit="cover"
        />

        <Box
          d={{ base: "block", md: "none" }}
          pos={{ base: "absolute", md: "relative" }}
          bg={{ base: "rgba(0,0,0,.4)", md: "none" }}
          inset={0}
        />

        <Box pos="absolute" left={{ md: -16 }} top={{ md: -14 }}>
          <Heading as="h2" fontSize={{ base: "4xl", md: "7xl" }}>
            About
          </Heading>
        </Box>
      </Flex>

      <Container maxW="3xl" mt={20}>
        <Text fontFamily="text" lineHeight="taller">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          amet, aperiam doloremque, esse hic, impedit iure molestiae natus neque
          nihil officia quos! Corporis debitis, dolorum ipsa ipsam itaque
          pariatur reprehenderit voluptas? Ducimus laudantium nisi optio
          perspiciatis rerum vel voluptates. Aliquam aut eius maxime officia
          suscipit. Ab, autem consequuntur corporis cum, dignissimos hic in
          ipsam itaque maiores nihil nostrum odio quaerat saepe vitae
          voluptatem? Accusantium, ad animi culpa debitis dicta eaque error fuga
          in ipsam laborum maiores maxime minus nam nobis perferendis placeat
          quod repellendus, sint vitae voluptatibus? Adipisci animi aperiam
          aspernatur assumenda, atque dicta est et eum eveniet facere facilis
          ipsum laboriosam nam natus quaerat qui repellendus sint veniam, vitae
          voluptate? A commodi corporis cum debitis ducimus esse expedita illo
          incidunt, inventore ipsam minima, nulla officia quasi qui voluptates.
          Error eum iusto labore nesciunt officiis recusandae, sed sequi. Ab ad
          alias aut blanditiis consectetur consequatur deleniti dicta
          dignissimos ducimus eaque eius est, et excepturi exercitationem harum,
          id impedit iste libero minus mollitia nemo porro quas quisquam, quod
          repudiandae rerum sed ullam vero vitae voluptatibus! Accusamus
          asperiores dicta dolores eligendi et excepturi incidunt magnam modi
          perferendis possimus, provident qui quisquam recusandae? Architecto
          autem consequatur dignissimos doloribus eligendi eos est et
          exercitationem explicabo ipsum labore molestiae, mollitia, nihil nisi
          nobis non optio pariatur possimus praesentium quisquam recusandae
          saepe voluptatem.
        </Text>
      </Container>
    </Box>
  );
};

export default About;
