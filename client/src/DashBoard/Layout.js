import React from "react";
import Box from "@mui/material/Box";
import ListItems from "./ListItems";
import DashBoardNavBar from "./Navbar";
import Grid from "@mui/material/Grid";

function Layout({ children }) {
  return (
    <>
      <DashBoardNavBar />
      <Box sx={{ display: { xs: "flex", md: "none" }, mt: 4 }}>
        <Grid container spacing={1}>
          <Grid
            item
            xs={2}
            sx={{
              mt: 2,
              backgroundColor: "#21005D",
              height: "100vh",
              justifyContent: "left",
            }}
          >
            <ListItems />
          </Grid>
          <Grid item xs={10} sx={{ mt: 4, color: "#FFFFFF" }}>
            {children}
          </Grid>
        </Grid>
      </Box>


      
      <Box sx={{ display: { xs: "none", md: "flex" }, mt: 4 }}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={2}
            sx={{
              mt: 2,
              backgroundColor: "#fffbff",
              height: "100vh",
            }}
          >
            <ListItems />
          </Grid>
          <Grid item xs={10} sx={{ mt: 10, color: "#FFFFFF" }}>
            {children}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Layout;
