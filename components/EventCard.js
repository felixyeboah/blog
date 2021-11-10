import React from "react";
import { HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { BsClockFill, BsFillCalendar2Fill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";

const EventCard = () => {
  return (
    <Stack
      bg="white"
      rounded="md"
      p={4}
      filter="drop-shadow(0px 2px 20px rgba(0,0,0,0.1))"
    >
      <Text fontSize={{ md: "lg" }} fontWeight="bold">
        Lorem ipsum dolor sit.
      </Text>

      <HStack fontSize="sm" align="center" spacing="2rem">
        <HStack align="center">
          <Icon as={BsClockFill} color="primary.500" />
          <Text>2:00pm</Text>
        </HStack>

        <HStack align="center">
          <Icon as={BsFillCalendar2Fill} color="primary.500" />
          <Text>30th November</Text>
        </HStack>
      </HStack>

      <HStack align="center" fontSize="sm">
        <Icon as={HiLocationMarker} color="primary.500" />
        <Text>Event location</Text>
      </HStack>
    </Stack>
  );
};

export default EventCard;
