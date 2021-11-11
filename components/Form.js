import React from "react";
import { Box, List, ListItem, Stack, Text } from "@chakra-ui/react";
import { FormInput, FormTextarea } from "@components/Inputs";
import { Button } from "@components/Button";
import { Controller, useForm } from "react-hook-form";

const Form = ({ _id }) => {
  const [formData, setFormData] = React.useState();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [hasSubmitted, setHasSubmitted] = React.useState(false);
  const { register, handleSubmit, control } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    let response;
    setFormData(data);
    try {
      response = await fetch("/api/createComment", {
        method: "POST",
        body: JSON.stringify(data),
        type: "application/json",
      });
      setIsSubmitting(false);
      setHasSubmitted(true);
    } catch (err) {
      setFormData(err);
    }
  };

  if (hasSubmitted) {
    return (
      <Stack mt={6}>
        <Text fontWeight="bold">Thanks for your comment!</Text>
        <List>
          <ListItem>Name: {formData.name}</ListItem>
          <ListItem>Comment: {formData.comment}</ListItem>
        </List>
      </Stack>
    );
  }

  return (
    <Box mt={20}>
      <Stack mb={8} spacing="0.2rem">
        <Text fontSize={{ md: "xl" }} fontWeight="bold">
          Post a comment
        </Text>
        <Text>Have anything to share? Please post a comment</Text>
      </Stack>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("_id")} type="hidden" name="_id" value={_id} />
        <Stack w={{ md: 120 }} spacing="1rem">
          <Controller
            name="name"
            defaultValue=""
            control={control}
            render={({ field }) => (
              <FormInput label="Name" id="name" {...field} />
            )}
          />
          <Controller
            name="comment"
            defaultValue=""
            control={control}
            render={({ field }) => (
              <FormTextarea label="Comment" id="comment" {...field} />
            )}
          />
          <Button
            type="submit"
            title="Submit commit"
            isLoading={isSubmitting}
          />
        </Stack>
      </form>
    </Box>
  );
};

export default Form;
