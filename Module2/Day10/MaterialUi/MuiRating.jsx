import React, { useState } from "react";
import { Box, Rating, Typography } from "@mui/material";

export default function MuiRating() {
  const [value, setValue] = useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Typography component="legend">Your Rating</Typography>
      <Rating name="simple-controlled" value={value} onChange={handleChange} />
      <Rating name="simple-controlled" value={value} onChange={handleChange} />
      <Typography component="legend">Rating: {value}</Typography>
    </Box>
  );
}
