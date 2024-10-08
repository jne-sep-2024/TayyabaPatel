import React from "react";
import { Typography } from "@mui/material";

export default function MuiTypography() {
  return (
    <div>
      <Typography variant="h1">H1 Heading</Typography>
      <Typography variant="h2">H2 Heading</Typography>
      <Typography variant="h3">H3 Heading</Typography>
      <Typography variant="h4">H4 Heading</Typography>
      <Typography variant="h5" component="h1" gutterBottom>
        H5 Heading
      </Typography>
      <Typography variant="h6">H6 Heading</Typography>
      <Typography variant="subtitle1">subTitle 1</Typography>
      <Typography variant="subtitle2">subTitle 2</Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
        assumenda tenetur dolores, et laboriosam veniam quia iste facere dolore
        architecto, sit nesciunt adipisci!
      </Typography>
      <Typography variant="body2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus,
        officia veritatis quisquam, asperiores cumque labore quia in odio
        temporibus libero dolorem. Quam, soluta.
      </Typography>
    </div>
  );
}
