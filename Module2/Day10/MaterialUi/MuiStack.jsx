import React from "react";
import { Stack, Button, Typography, Paper } from "@mui/material";

export default function MuiStack() {
  return (
    <div>
      {/* Vertical Stack with spacing */}
      <Stack spacing={2} sx={{ margin: 2 }}>
        <Typography variant="h4">Vertical Stack</Typography>
        <Button variant="contained" color="primary">
          Button 1
        </Button>
        <Button variant="contained" color="secondary">
          Button 2
        </Button>
        <Button variant="contained" color="success">
          Button 3
        </Button>
      </Stack>

      {/* Horizontal Stack */}
      <Stack direction="row" spacing={2} sx={{ margin: 2 }}>
        <Button variant="outlined">Button 1</Button>
        <Button variant="outlined">Button 2</Button>
        <Button variant="outlined">Button 3</Button>
      </Stack>

      {/* Stack with Responsive Direction */}
      <Stack
        direction={{ xs: "column", sm: "row" }} // Column on small screens, row on larger
        spacing={2}
        sx={{ margin: 2 }}
      >
        <Button variant="contained">Responsive Button 1</Button>
        <Button variant="contained">Responsive Button 2</Button>
        <Button variant="contained">Responsive Button 3</Button>
      </Stack>

      {/* Stack with Align and Justify Content */}
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
        sx={{ margin: 2, height: 100, border: "1px solid #ccc", padding: 2 }}
      >
        <Paper elevation={3} sx={{ padding: 2 }}>
          Item 1
        </Paper>
        <Paper elevation={3} sx={{ padding: 2 }}>
          Item 2
        </Paper>
        <Paper elevation={3} sx={{ padding: 2 }}>
          Item 3
        </Paper>
      </Stack>
    </div>
  );
}
