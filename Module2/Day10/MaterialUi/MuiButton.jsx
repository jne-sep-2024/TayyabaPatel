import React, { useState } from "react"; // Import useState here
import {
  Button,
  Stack,
  IconButton,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

export default function MuiButton() {
  const [format, setFormat] = useState(null);

  const handleFormat = (event, newFormat) => {
    setFormat(newFormat);
  };

  return (
    <div>
      <Stack spacing={4}>
        <Stack spacing={2} direction="row">
          <Button variant="text" href="https://google.com">
            Google
          </Button>
          <Button variant="contained">contained</Button>
          <Button variant="outlined">outlined</Button>
        </Stack>
        <Stack spacing={2} direction="row">
          <Button variant="contained" color="primary">
            Primary Color
          </Button>
          <Button variant="contained" color="secondary">
            Secondary Color
          </Button>
          <Button variant="contained" color="error">
            Error Color
          </Button>
          <Button variant="text" color="warning">
            Warning Color
          </Button>
          <Button variant="contained" color="info">
            Info Color
          </Button>
          <Button variant="outlined" color="success">
            Success Color
          </Button>
        </Stack>
        <Stack display="block" spacing={2} direction="row">
          <Button variant="contained" size="small">
            small
          </Button>
          <Button variant="contained" size="medium">
            medium
          </Button>
          <Button variant="contained" size="large">
            large
          </Button>
        </Stack>
        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            startIcon={<SendIcon />}
            disableRipple
            onClick={() => alert("this is alert")}
          >
            Send
          </Button>
          <Button variant="contained" endIcon={<SendIcon />} disableElevation>
            Send
          </Button>
          <IconButton aria-label="send" color="success" size="small">
            <SendIcon />
          </IconButton>
        </Stack>
        <Stack direction="row">
          <ButtonGroup
            variant="text" // Corrected 'varaint' to 'variant'
            orientation="vertical"
            size="small"
            color="secondary"
          >
            <Button
              onClick={() => {
                alert("click left button");
              }}
              aria-label="alignment button group"
            >
              left
            </Button>
            <Button>center</Button>
            <Button>right</Button> {/* Corrected 'rights' to 'right' */}
          </ButtonGroup>
        </Stack>
        <Stack direction="row">
          <ToggleButtonGroup
            value={format}
            exclusive
            onChange={handleFormat}
            aria-label="text formatting"
          >
            <ToggleButton value="bold" aria-label="bold">
              <FormatBoldIcon />
            </ToggleButton>
            <ToggleButton value="italic" aria-label="italic">
              <FormatItalicIcon />
            </ToggleButton>
            <ToggleButton value="underline" aria-label="underline">
              <FormatUnderlinedIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </Stack>
    </div>
  );
}
