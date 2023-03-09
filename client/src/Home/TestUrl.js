import React, { useCallback, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import { useNavigate } from "react-router-dom";

const validUrl = (inputUrl) => {
  try {
    new URL(inputUrl);
    return true;
  } catch (error) {
    return false;
  }
};

export default function TestUrl(props) {
  const { setError } = props;
  // console.log("setError", setError);
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState();
  const navigate = useNavigate();

  const handleCallback = useCallback(() => {
    setLoading(true);
    fetch("http://localhost:8000/api/scans", {
      method: "POST",
      body: JSON.stringify({
        url: url,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data?.success) {
          setError(data?.error);
        } else {
          navigate(`/scans/${data?.data?.scanId}`);
        }
        setLoading(false);
      });
  }, [navigate, setError, url]);

  return (
    <>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <FormControl sx={{ m: 1, width: "100ch" }} variant="outlined">
          <OutlinedInput
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
          sx={{ ml: 2, height: "56px", textTransform: "none" }}
          onClick={handleCallback}
          disabled={!validUrl(url)}
        >
          Test Url
        </Button>
      </Box>
      <Box display="column">
        {loading && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "purple",
                p: 1,
                width: "65%",
                borderRadius: 2,
                mt: 2,
                color: "#FFFFFF",
              }}
            >
              <CircularProgress sx={{ mr: 2, color: "#FFFFFF" }} />{" "}
              <span> {"  "} Processing....</span>
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
}
