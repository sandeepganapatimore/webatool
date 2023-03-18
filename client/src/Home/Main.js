import React, { useState } from "react";

import Box from "@mui/material/Box";
import ToolInfo from "./AppInfo";
import TestUrl from "./TestUrl";
import VisualSection from "./VisualSection";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Main() {
  const [error, setError] = useState(undefined);
  const handleClose = () => {
    setError(undefined);
  };
  return (
    <Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <ToolInfo />
        <TestUrl setError={setError} />
        <VisualSection />

        {error !== undefined && (
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            open={error !== undefined}
            autoHideDuration={6000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity="error"
              sx={{ width: "100%" }}
            >
              {error}
            </Alert>
          </Snackbar>
        )}
      </Box>
    </Box>
  );
}
