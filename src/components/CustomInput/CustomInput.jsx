import React from "react";
import { FormControl, InputLabel, Input, FormHelperText } from "@mui/material";

const CustomInput = ({label, id, handleChange, type, value, error}) => {

  return (
    <FormControl fullWidth={true}>
        <InputLabel htmlFor={id}>
            {label}
        </InputLabel>
        <Input
          id={id}
          value={value}
          onChange={handleChange}
          autoComplete="off"
          type={type}
          required
        />
        <FormHelperText>{error}</FormHelperText>

    </FormControl>
  );
}

export default CustomInput;