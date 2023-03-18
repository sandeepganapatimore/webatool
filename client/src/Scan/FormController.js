import React from "react";
import Button from "@mui/material/Button";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box/Box";

function FormController({ url, setUrl, validUrl, handleCallback }) {
  return (
    <Box>
      {" "}
      <FormControl
        variant="outlined"
        width="100%"
        fullWidth
        sx={{ width: "650px", mt: 1, ml: 6 }}
      >
        <OutlinedInput
          sx={{
            color: "#49454e",
            backgroundColor: "#e7e0eb",
            border: "none",
            "& fieldset": { border: "none" },
            "&:focus": {
              backgroundColor: "#cbc4cf",
            },
            "&:hover": {
              backgroundColor: "#cbc4cf",
            },
          }}
          role="textbox"
          placeholder="place url here"
          aria-placeholder="place url here"
          size="large"
          onChange={(e) => setUrl(e.target.value)}
          id="url-text"
        />
      </FormControl>
      <Button
        tabIndex={0}
        aria-pressed="false"
        role="button"
        variant="contained"
        sx={{
          backgroundColor: "#7331df",
          textTransform: "none",
          color: "#ffffff",
          ml: 2,
          mt: 1,
          "&:focus": {
            backgroundColor: "#7331df",
          },
          "&:hover": {
            backgroundColor: "#7331df",
          },
          "&:visited": {
            backgroundColor: "#7331df",
          },
          height:'55px'
        }}
        onClick={handleCallback}
        disabled={!validUrl(url)}
      >
        Test Url
      </Button>
    </Box>
  );
}

export default FormController;
