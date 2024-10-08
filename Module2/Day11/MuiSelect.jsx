import React, { useState } from "react";
import { Box, TextField, MenuItem } from "@mui/material";

export default function MuiSelect() {
  const [country, setCountry] = useState("");

  const handleChange = (event) => {
    setCountry(event.target.value); // Update state on selection
  };

  return (
    <Box width="250px">
      <TextField
        label="Select Country"
        select
        value={country} // Set the current value
        onChange={handleChange} // Handle change events
        fullWidth
        // SelectProps={{ multiple: true }}
        size="small"
        color="secondary"
        helperText="plz enetr your country"
        error
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">United States</MenuItem>
        <MenuItem value="CA">Canada</MenuItem>
        <MenuItem value="GB">United Kingdom</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>
    </Box>
  );
}
