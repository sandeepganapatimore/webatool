import React from "react";
import Box from "@mui/material/Box";
import ListItems from "./ListItems";
import DashBoardNavBar from "./Navbar";
import Grid from "@mui/material/Grid";
import { Divider } from "@mui/material";

function Layout({ children }) {
  return (
    <Box>
      <DashBoardNavBar />
      <Grid container spacing={2}>
        <Grid
          item
          xs={2}
          sx={{
            backgroundColor: "#1E293B",
            height: "100vh",
          }}
        >
          <ListItems />
        </Grid>
        <Grid item xs={10} sx={{ mt: 2, color: "#FFFFFF" }}>
          {children}
        </Grid>
      </Grid>
    </Box>
  );
}

export default Layout;
