import React from "react";
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";

const itemData = [
  {
    img: "https://source.unsplash.com/random/1",
    title: "Image 1",
    author: "Author 1",
  },
  {
    img: "https://source.unsplash.com/random/2",
    title: "Image 2",
    author: "Author 2",
  },
  {
    img: "https://source.unsplash.com/random/3",
    title: "Image 3",
    author: "Author 3",
  },
  {
    img: "https://source.unsplash.com/random/4",
    title: "Image 4",
    author: "Author 4",
  },
];

export default function MuiImageList() {
  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={2} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>by: {item.author}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
