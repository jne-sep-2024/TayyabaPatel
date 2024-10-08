import React from "react";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { NavigateNext } from "@mui/icons-material";

export default function MuiBreadcrumbs() {
  return (
    <Breadcrumbs
      separator={<NavigateNext fontSize="small" />}
      aria-label="breadcrumb"
    >
      <Link underline="hover" color="inherit" href="/">
        Home
      </Link>
      <Link underline="hover" color="inherit" href="/category">
        Category
      </Link>
      <Typography color="textPrimary">Current Page</Typography>
    </Breadcrumbs>
  );
}
