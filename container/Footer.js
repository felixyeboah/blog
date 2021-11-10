import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex align="center" justify="center" as="footer" w="100%" py={6}>
      <Text>&copy;Copyright 2021. All right reserved. </Text>
    </Flex>
  );
};

export default Footer;
