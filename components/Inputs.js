import React from "react";
import { FormControl } from "@chakra-ui/react";
import { TextField } from "@mui/material";

export const FormInput = ({ label, id, ...rest }) => {
  return (
    <FormControl>
      <TextField
        id={id}
        label={label}
        variant="outlined"
        sx={{ width: "100%", fontSize: 15 }}
        size="small"
        {...rest}
      />
    </FormControl>
  );
};

export const FormTextarea = ({ label, id, ...rest }) => {
  return (
    <FormControl>
      <TextField
        id={id}
        label={label}
        multiline
        rows={4}
        variant="outlined"
        sx={{ width: "100%", fontSize: 15 }}
        size="small"
        {...rest}
      />
    </FormControl>
  );
};
