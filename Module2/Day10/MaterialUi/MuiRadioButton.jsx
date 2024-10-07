import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";

export default function MuiRadioButtons() {
  const [selectedValue, setSelectedValue] = useState("female");

  const handleChange = (event) => {
    setSelectedValue(event.target.value); // Update selected value on change
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Selected Value: ${selectedValue}`); // Display selected value
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ width: 300 }}>
      <FormControl>
        <FormLabel>Gender</FormLabel>
        <RadioGroup value={selectedValue} onChange={handleChange}>
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
        <Button type="submit" variant="contained" sx={{ marginTop: 2 }}>
          Submit
        </Button>
      </FormControl>
    </Box>
  );
}
