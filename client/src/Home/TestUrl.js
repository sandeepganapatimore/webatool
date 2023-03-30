import React, { useCallback, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import { useNavigate } from "react-router-dom";
import FormController from '../Components/Forms/FormController';

import { validUrl } from "../utils/helper";

export default function TestUrl(props) {
  const { setError } = props;
  // console.log("setError", setError);
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState();
  const navigate = useNavigate();

  const handleCallback = useCallback(() => {
    setLoading(true);
    fetch("http://localhost:8000/api/scans/new", {
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
        sx={{
          display: { xs: "none", md: "flex" },
          flexDirection: "row",
          justifyContent: "center",
          mt: 2,
        }}
      >
  
        <FormController
          setUrl={setUrl}
          url={url}
          validUrl={validUrl}
          handleCallback={handleCallback}
          width="100%"
          buttonName="Test Url"
        />
      </Box>
      {loading && (
        <Box
          sx={{
            display: "flex",
            mt: 2,
            justifyContent: "center",
            height: "80px",
            width: "100%",
            // mr:10
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "purple",
              justifyContent: "center",
              p: 1,
              width: "65%",
              borderRadius: 1,
              mt: 2,
              color: "#FFFFFF",
              mr: 4,
              pl: 2,
            }}
          >
            <CircularProgress sx={{ mr: 2, color: "#FFFFFF" }} />{" "}
            <span> {"  "} Processing....</span>
          </Box>
        </Box>
      )}
      {/* </Box> */}
    </>
  );
}
