import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
import { DateRangePicker } from "@mui/lab";

export default function MuiDateRange() {
  const [value, setValue] = useState([null, null]);

  return (
    <Box width="250px">
      <DateRangePicker
        startText="Check-in"
        endText="Check-out"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} variant="outlined" />
            <Box sx={{ mx: 2 }}> - </Box>
            <TextField {...endProps} variant="outlined" />
          </React.Fragment>
        )}
        slotProps={{ textField: { variant: "outlined" } }}
      />
    </Box>
  );
}
