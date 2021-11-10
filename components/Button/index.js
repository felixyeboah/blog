import React from "react";
import { Button as ChakraButton } from "@chakra-ui/react";

export const Button = ({ title, ...rest }) => {
  return (
    <ChakraButton
      bg="#0072e6"
      color="white"
      _hover={{ bg: "#0072e6" }}
      _active={{ bg: "#0072e6" }}
      rounded="3px"
      px={{ md: 10 }}
      py={{ md: 6 }}
      boxShadow="0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0)"
      transition="all 200ms ease"
      {...rest}
    >
      {title}
    </ChakraButton>
  );
};

export const EditButton = ({ title, ...rest }) => {
  return (
    <ChakraButton
      colorScheme="dangerColorScheme"
      rounded="3px"
      px={{ md: 10 }}
      py={{ md: 6 }}
      boxShadow="0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0)"
      transition="all 200ms ease"
      {...rest}
    >
      {title}
    </ChakraButton>
  );
};
