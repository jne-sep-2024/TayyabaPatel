import React, { useState } from "react";
import {
  Stack,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Button,
  Link,
} from "@mui/material";
import { CatchingPokemon } from "@mui/icons-material";

export default function MuiNavBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <CatchingPokemon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Pokemon
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit">Features</Button>
          <Link color="inherit" href="www.google.com" underline="none">
            Pricing
          </Link>
          <Button color="inherit">About</Button>
          <Button
            color="inherit"
            id="resource-button"
            onClick={handleClick}
            aria-controls={open ? "resource-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            Resources
          </Button>
        </Stack>
        <Menu
          id="resource-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "resource-button",
          }}
        >
          <MenuItem onClick={handleClose}>Blog</MenuItem>
          <MenuItem onClick={handleClose}>Podcast</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
