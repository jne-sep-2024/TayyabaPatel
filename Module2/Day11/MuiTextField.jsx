import React, { useState } from "react";
import { TextField, Stack, Button, InputAdornment } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Visibility from "@mui/icons-material/Visibility";

export default function MuiTextField() {
  const [inputValue, setInputValue] = useState("");
  const [password, setPassword] = useState(""); // State for password

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value); // Separate handler for password
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Input Value: ${inputValue}`);
  };

  return (
    <div>
      <Stack spacing={2} sx={{ width: 300 }}>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Enter something"
            variant="outlined"
            value={inputValue}
            onChange={handleInputChange} // Correct handler for input
            fullWidth
            required
            helperText="This is a helper text"
          />

          <TextField
            label="Enter something (Filled)"
            variant="filled"
            value={inputValue}
            onChange={handleInputChange}
            fullWidth
            required
            helperText="This is a helper text"
          />

          <TextField
            label="Password"
            variant="standard"
            type="password"
            value={password} // Use password state
            onChange={handlePasswordChange} // Use separate handler
            fullWidth
            required
            helperText="This is a helper text"
          />
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </form>
      </Stack>

      <Stack spacing={2} sx={{ width: 300 }}>
        <TextField
          label="Username"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          fullWidth
        />

        <TextField
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Visibility />
              </InputAdornment>
            ),
          }}
          fullWidth
        />

        <TextField
          label="Amount"
          variant="outlined"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
            endAdornment: <InputAdornment position="end">USD</InputAdornment>,
          }}
          fullWidth
        />
      </Stack>
    </div>
  );
}
