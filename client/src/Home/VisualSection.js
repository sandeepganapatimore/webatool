import React from "react";
import Typography from "@mui/material/Typography";
import WebATool from "./webAttol.png";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
const color = "#6D28D9";
export default function VisualSection() {
  return (
    <>
      <Grid
        container
        sx={({ textAlign: "center" }, { display: { xs: "flex", md: "none" } })}
      >
        <Grid item xs={12} sx={{ mt: 2 }}>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h4" sx={{ color: color }}>
              Visual
            </Typography>
            <br />
            <Typography variant="h4" sx={{ color: color }}>
              Analytics Reports
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sx={{ mt: 2 }}>
          <img
            src={WebATool}
            alt="webatool"
            width="100%"
            height="auto"
            loading="lazy"
          />
        </Grid>
      </Grid>

      {/* Weblayer */}
      <Grid
        container
        sx={
          ({ textAlign: "center" },
          { display: { xs: "none", md: "flex" }, mt: 1 })
        }
      >
        <Grid item xs={6} sx={{ mt: 2 }}>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h2" sx={{ color: color }}>
              Visual
            </Typography>
            <br />
            <Typography variant="h2" sx={{ color: color }}>
              Analytics Reports
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={6} sx={{ mt: 1 }}>
          <img
            src={WebATool}
            alt="Visual Analytics Reports"
            width="100%"
            height="auto"
            loading="lazy"
          />
        </Grid>
      </Grid>
    </>
  );
}
