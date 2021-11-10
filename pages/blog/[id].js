import React from "react";
import {
  Avatar,
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FormInput, FormTextarea } from "@components/Inputs";
import { Button } from "@components/Button";

const Blog = () => {
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
          src="https://images.pexels.com/photos/9567693/pexels-photo-9567693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="blog"
        />
        <Box pos="absolute" inset={0} bg="rgba(0,0,0,.4)" />

        <Box
          pos="absolute"
          bottom={{ base: 6, md: 24 }}
          left={{ base: 4, md: 16 }}
          color="white"
        >
          <Text fontWeight={600} fontSize={{ base: "sm", md: "md" }}>
            Featured Post
          </Text>
          <Heading as="h2" fontSize={{ base: "2xl", md: "6xl" }}>
            Lorem ipsum dolor sit amet.
          </Heading>
          <Text fontSize={{ md: "lg" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam,
            vero.
          </Text>
          <HStack spacing="1rem" mt={2}>
            <Text>By:</Text>
            <Avatar
              size="sm"
              src="https://images.pexels.com/photos/8305201/pexels-photo-8305201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
            <Text fontWeight="bold">Bertina</Text>
          </HStack>
        </Box>
      </Flex>

      <Container maxW="4xl" my={14}>
        <Text fontSize="lg" lineHeight="tall" fontFamily="text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores,
          at cumque doloribus et inventore laudantium maxime recusandae?
          Accusamus, adipisci alias aspernatur blanditiis corporis cumque
          debitis delectus fugiat impedit ipsum iure laboriosam libero, natus
          nemo odio officia omnis pariatur praesentium quod quos repellat
          reprehenderit sapiente sed sit soluta veniam voluptate voluptatem! Ab
          ad adipisci amet aspernatur beatae culpa delectus dignissimos dolore
          et explicabo fugiat id illum minima minus modi nisi nobis, numquam
          odio perspiciatis porro praesentium quae, qui quia quo ratione
          repellat repellendus tempora, tempore tenetur velit vitae voluptate
          voluptatem voluptatum. Ab asperiores atque delectus dolores ea est
          explicabo impedit ipsam modi nisi numquam obcaecati officiis possimus,
          quasi quibusdam reiciendis reprehenderit similique sint vero
          voluptatem? Ab aliquam aspernatur at consectetur dolore explicabo
          facere fuga, ipsa, ipsum labore magnam nam nihil nobis optio
          perferendis quam quia quibusdam tempore tenetur voluptates! A aliquid
          atque cupiditate dolorem dolorum error illum iste, laborum officiis
          optio perspiciatis quasi, repudiandae suscipit tenetur ullam ut
          veritatis! Animi commodi maiores placeat reprehenderit sapiente velit
          voluptates? Alias animi consequuntur cum delectus deserunt doloremque
          dolorum ea eaque incidunt iste itaque laboriosam, laudantium magnam
          maiores natus obcaecati officiis pariatur quidem quod repellat
          sapiente sed sit suscipit temporibus tenetur ut veritatis voluptatum!
          Accusamus atque deleniti dolore itaque iure laborum magni molestias
          neque nihil officia omnis, placeat qui quibusdam quisquam repellat
          sequi tenetur unde. Beatae culpa doloribus error est expedita in
          inventore, ipsa labore libero minima modi nesciunt non nulla officiis
          omnis pariatur quia repudiandae sequi temporibus veniam! Accusamus
          aliquid, amet aperiam autem blanditiis dignissimos, dolore, doloremque
          dolores ea explicabo iste iure nemo officiis omnis optio quisquam quo
          soluta tempora unde voluptas! A commodi, consequuntur cupiditate et,
          exercitationem fugit inventore itaque laborum libero minima molestiae
          nesciunt quibusdam ratione, reiciendis voluptas? Asperiores aspernatur
          dolorem nemo sequi? Autem consequatur fugiat illum inventore iste
          obcaecati, porro ratione repellat voluptas voluptatum. Ab aut
          blanditiis deserunt doloribus exercitationem fuga fugiat impedit ipsam
          iste, nihil non quas quidem quod reiciendis repellendus saepe sint
          tenetur veritatis. Amet doloribus et harum hic laborum, mollitia
          officia officiis optio, praesentium, temporibus tenetur voluptate
          voluptatum? Aliquam aspernatur dicta doloremque doloribus ea ex
          mollitia nam natus, omnis porro, praesentium quia quod repellat
          repellendus totam veritatis voluptatum? Consequuntur delectus dolor
          dolorum et iste labore molestias, perspiciatis quae, reiciendis sed
          similique unde voluptate voluptatem. Aut, consectetur consequatur
          culpa dolorum est itaque minima modi mollitia, perspiciatis placeat
          quas quo quod reprehenderit tempore voluptatem? Alias doloribus, illo
          incidunt iure molestiae molestias, nobis rem repellendus repudiandae
          sit soluta veritatis? Ab amet at commodi consequuntur cum debitis
          deserunt dicta enim hic impedit inventore ipsam labore laboriosam
          maxime molestiae nam necessitatibus neque quaerat, qui quidem quisquam
          recusandae repellendus temporibus vero voluptas voluptatem voluptates!
          Accusantium alias autem beatae consequatur consequuntur culpa debitis,
          dolore esse eveniet excepturi explicabo fugiat fugit impedit inventore
          ipsa ipsam magnam maiores minus, neque pariatur provident quae quos
          reprehenderit sequi similique sint velit voluptatem. Ab consectetur,
          deserunt distinctio ea eligendi et excepturi exercitationem illo
          incidunt iusto magnam maiores molestias nesciunt nulla pariatur
          perspiciatis quasi quia recusandae reiciendis repellat saepe similique
          tempora, ullam unde voluptate.
        </Text>

        <Box mt={20}>
          <Stack mb={8} spacing="0.2rem">
            <Text fontSize={{ md: "xl" }} fontWeight="bold">
              Post a comment
            </Text>
            <Text>Have anything to share? Please post a comment</Text>
          </Stack>

          <form>
            <Stack w={{ md: 120 }} spacing="1rem">
              <FormInput label="Name" id="name" />
              <FormInput label="Email" id="email" />
              <FormTextarea label="Message" id="message" />
              <Button title="Submit commit" />
            </Stack>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default Blog;
