import React, { useState } from "react";
import { Box, FormControlLabel, Checkbox, Button } from "@mui/material";

export default function MuiCheckbox() {
  const [checked, setChecked] = useState({
    apple: false,
    banana: false,
    orange: false,
  });

  const handleChange = (event) => {
    setChecked({ ...checked, [event.target.name]: event.target.checked });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Selected Fruits: ${Object.entries(checked)
        .filter(([key, value]) => value)
        .map(([key]) => key)
        .join(", ")}`
    );
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ width: 300 }}>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked.apple}
            onChange={handleChange}
            name="apple"
          />
        }
        label="Apple"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={checked.banana}
            onChange={handleChange}
            name="banana"
          />
        }
        label="Banana"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={checked.orange}
            onChange={handleChange}
            name="orange"
          />
        }
        label="Orange"
      />
      <Button type="submit" variant="contained" sx={{ marginTop: 2 }}>
        Submit
      </Button>
    </Box>
  );
}
