import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function DashBoardNavBar() {
  return (
    <AppBar position="absolute" sx={{ backgroundColor: "#1E293B" }}>
      <Toolbar>
        <Typography
          variant="h6"
          component="a"
          href="/"
          sx={{ textDecoration: "none" }}
          color="#FFFFFF"
        >
          WEBATOOL
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
