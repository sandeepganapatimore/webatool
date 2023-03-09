import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useAppContext } from "../ContextState";
import Layout from "../DashBoard/Layout";

export default function IssueDetails() {
  const { items } = useAppContext();

  return (
    <Layout>
      <div>
        {items?.map((item) => {
          return (
            <Accordion key={item.id}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{item?.id}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ ml: 0 }}>
                <Typography>
                  <strong>Description:</strong> {item?.description}.
                </Typography>
                <Typography>
                  <strong>Help:</strong> {item?.help}.
                </Typography>
                <Typography>
                  <strong>HelpUrl:</strong>{" "}
                  <a href={item?.helpUrl} target="_blank" rel="noreferrer">
                    Click Here
                  </a>
                </Typography>
                <Typography>
                  <strong>Impact:</strong> {item?.impact}.
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </Layout>
  );
}
