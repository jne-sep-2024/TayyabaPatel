import React from "react";
import { Paper, Box, Stack, Divider } from "@mui/material";

export default function MuiPaper() {
  return (
    <Paper sx={{ padding: "32px" }}>
      <Stack
        sx={{ border: "1px solid" }}
        direction="row"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            height: "100px",
            padding: "16px",
            "&:hover": {
              backgroundColor: "primary.light",
            },
          }}
        ></Box>
      </Stack>
    </Paper>
  );
}
