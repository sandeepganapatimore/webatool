import React from "react";
import Typography from "@mui/material/Typography";
import WebATool from "./webAttol.png";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
const color = "#6D28D9";
export default function VisualSection() {
  return (
    <Grid container spacing={2} sx={{ mt: 10, textAlign: "center" }}>
      <Grid item xs={6}>
        <Box sx={{ alignItems: "center" }}>
          <Typography variant="h2" sx={{ color: color }}>
            Visual
          </Typography>
          <br />
          <Typography variant="h2" sx={{ color: color }}>
            Analytics Reports
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={6}>
        <img src={WebATool} alt="webatool" width="70%" loading="lazy" />
      </Grid>
    </Grid>
  );
}
