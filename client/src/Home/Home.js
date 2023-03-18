import React from "react";
import Main from "./Main";
import Layout from "./Layout";
import Container from "@mui/system/Container";
import Typography from "@mui/material/Typography";

function Home() {
  return (
    <Container>
      <Layout>
        <Main />
        <Typography variant="body2" sx={{ mt: 2, textAlign: "center" }}>
          Copy Right @2023
        </Typography>
      </Layout>
    </Container>
  );
}

export default Home;
