import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  ExpandMoreIcon,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

export default function MuiAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={<ExpandMoreIcon />}
        ></AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
            eveniet amet eum repellat tenetur sit enim sapiente labore aut esse
            ipsa corrupti quos, laudantium hic veritatis ad voluptatum? Illum,
            molestias.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
