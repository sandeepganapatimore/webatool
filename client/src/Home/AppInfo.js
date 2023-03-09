import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function AppInfo() {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h3">Check Accessibility</Typography>
      <Typography variant="h3" sx={{ color: "#6D28D9" }}>
        of your Web Application here
      </Typography>
      <Typography variant="h6" style={{ color: "#aba5b0" }}>
        WebATool is an Web Accessibility Evaluation Tool for testing application
        like websites and other HTML-based
      </Typography>
      <Typography variant="h6" style={{ color: "#aba5b0" }}>
        User interfaces,designed using an Axe Core Engine
      </Typography>
    </Box>
  );
}
