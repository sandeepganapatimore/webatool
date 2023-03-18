import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function DashBoardNavBar() {
  return (
    <AppBar
      position="absolute"
      sx={{ backgroundColor: "#fffbff", boxShadow: "none" }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="a"
          href="/"
          sx={{ textDecoration: "none" }}
          color="#1d1b1e"
        >
          WEBATOOL
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
