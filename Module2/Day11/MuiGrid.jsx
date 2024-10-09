import React from "react";
import { Grid, Box } from "@mui/material";

export default function MuiGrid() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box bgcolor="primary.main" color="white" p={2} textAlign="center">
            Item 1
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor="secondary.main" color="white" p={2} textAlign="center">
            Item 2
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor="success.main" color="white" p={2} textAlign="center">
            Item 3
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor="error.main" color="white" p={2} textAlign="center">
            Item 4
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
