import React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
  CardMedia,
} from "@mui/material";

export default function MuiCard() {
  return (
    <Box width="300px">
      <Card>
        <CardMedia component="img" height="34px" image="url" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            dicta fuga eligendi. Assumenda, consequatur rem. Maiores soluta, cum
            excepturi ad hic consequatur similique consequuntur molestias
            voluptate qui! Voluptatibus, velit unde?
          </Typography>
        </CardContent>
        <CardActions>
          <Button>Share</Button>
          <Button>learn more</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
