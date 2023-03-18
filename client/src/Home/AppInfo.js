import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function AppInfo() {
  return (
    <>
      <Box
        sx={{ display: { xs: "flex", md: "none" }, flexDirection: "column" }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h4" color="#1d1b1e">
            Check Accessibility
          </Typography>
          <Typography variant="h4" sx={{ color: "#6D28D9" }}>
            of your Web Application here
          </Typography>
        </Box>
        <Typography variant="h6" sx={{ color: "#1d1b1e", mt: 1 }}>
          WebATool is an Web Accessibility Evaluation Tool for testing
          application like websites and other HTML based User interfaces and
          designed using an Axe Core Engine
        </Typography>
      </Box>

      <Box
        sx={{ display: { xs: "none", md: "flex" }, flexDirection: "column" }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h2" color="#1d1b1e">
            Check Accessibility
          </Typography>
          <Typography variant="h2" sx={{ color: "#6D28D9" }}>
            of your Web Application here
          </Typography>
        </Box>
        <Typography
          variant="h6"
          sx={{
            color: "#1d1b1e",
            mt: 1,
            textAlign: "center",
          }}
        >
          WebATool is an Web Accessibility Evaluation Tool for testing
          application like
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "#1d1b1e",
            textAlign: "center",
          }}
        >
          websites and other HTML based User interfaces and designed using an
          Axe Core Engine
        </Typography>
      </Box>
    </>
  );
}
