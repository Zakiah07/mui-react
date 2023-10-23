import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function AccordionComp() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>What's the rule?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Just be yourself</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default AccordionComp;
