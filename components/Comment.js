import React from "react";
import { Avatar, Box, HStack, Stack, Text } from "@chakra-ui/react";
import moment from "moment";

const Comment = ({ post }) => {
  return (
    <Stack mt={16}>
      {post?.comments?.map((item) => (
        <Stack
          key={item?._id}
          mb={6}
          borderBottomWidth={1}
          borderBottomColor="gray.300"
          pb={4}
          w={{ md: 120 }}
        >
          <HStack>
            <Box>{item?.name && <Avatar name={item?.name} />}</Box>
            <Stack spacing="0.2rem">
              <HStack align="center" spacing="2rem">
                <Text fontWeight="bold" fontSize={{ md: "xl" }}>
                  {item?.name}
                </Text>
                <Text fontSize="sm" color="gray.500">
                  {moment(item?._createdAt).format("LL")}
                </Text>
              </HStack>
              <Text>{item?.comment}</Text>
            </Stack>
          </HStack>
        </Stack>
      ))}
    </Stack>
  );
};

export default Comment;
