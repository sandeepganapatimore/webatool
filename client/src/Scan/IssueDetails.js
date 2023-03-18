import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useAppContext } from "../ContextState";
import Layout from "../DashBoard/Layout";
import Grid from "@mui/material/Grid";


export default function IssueDetails() {
  const { items } = useAppContext();

  return (
    <Layout>
      <Grid container spacing={2}>
        {items?.map((item) => {
          return (
            <Grid item xs={12} md={6} key={item?.id}>
              <Accordion>
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
              
            </Grid>
          );
        })}
      </Grid>
    </Layout>
  );
}
