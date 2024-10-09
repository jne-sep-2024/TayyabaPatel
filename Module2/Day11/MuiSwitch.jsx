import React, { useState } from "react";
import { Box, FormControlLabel, Switch } from "@mui/material";

export default function MuiSwitch() {
  const [check, setCheck] = useState(false);

  const handleChange = (e) => {
    setCheck(e.target.checked);
  };

  return (
    <Box>
      <FormControlLabel
        label="Dark Mode"
        control={<Switch checked={check} onChange={handleChange} />}
      />
    </Box>
  );
}
