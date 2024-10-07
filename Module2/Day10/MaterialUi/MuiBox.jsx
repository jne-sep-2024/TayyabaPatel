import React from "react";
import { Box, Typography, Button } from "@mui/material";

export default function MuiBox() {
  return (
    <div>
      <Box
        sx={{
          padding: 2,
          backgroundColor: "primary.main",
          color: "white",
          width: 300,
          textAlign: "center",
        }}
      >
        <Typography variant="h6">Box with Padding</Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: 2,
          backgroundColor: "secondary.main",
          color: "white",
          marginTop: 2,
        }}
      >
        <Button variant="contained" color="info">
          Button 1
        </Button>
        <Button variant="contained" color="success">
          Button 2
        </Button>
        <Button variant="contained" color="error">
          Button 3
        </Button>
      </Box>

      <Box
        sx={{
          marginTop: 3,
          padding: 2,
          border: "2px solid #1976d2",
          borderRadius: 1,
          width: "50%",
          mx: "auto",
          textAlign: "center",
        }}
      >
        <Typography variant="body1">Box with Margin and Border</Typography>
      </Box>

      <Box sx={{ padding: 2, marginTop: 4, border: "1px solid #ccc" }}>
        <Typography variant="h6">Outer Box</Typography>
        <Box
          sx={{
            backgroundColor: "warning.main",
            color: "white",
            padding: 2,
            marginTop: 2,
          }}
        >
          <Typography>Nested Inner Box</Typography>
        </Box>
      </Box>
    </div>
  );
}
