import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Layout from "../DashBoard/Layout";
import { Card, Typography } from "@mui/material";
import PieChart from "./Chart";
import { useAppContext } from "../ContextState";
import Link from "@mui/material/Link";

const pairs = [
  {
    name: "passes",
    backgroundColor: "#D0BCFF",
  },
  {
    name: "inapplicable",

    backgroundColor: "#938F99",
  },
  {
    name: "incomplete",
    backgroundColor: "#FFD8E4",
  },
  {
    name: "violations",
    backgroundColor: "#8C1D18",
  },
];

export default function ScanDetails() {
  let { id } = useParams();
  const [rows, setRows] = useState();
  const navigate = useNavigate();
  const scanDetails = rows && rows?.ScanDetails[0];
  const { addItem, removeItem } = useAppContext();

  useEffect(() => {
    fetch(`http://localhost:8000/api/scans/${id}`)
      .then((response) => response.json())
      .then((res) => setRows(res?.data));
  }, [id]);

  const handleAddItem = (name) => {
    removeItem();
    switch (name) {
      case "passes":
        addItem(scanDetails?.results?.passes);
        break;
      case "inapplicable":
        addItem(scanDetails?.results?.inapplicable);
        break;
      case "incomplete":
        addItem(scanDetails?.results?.incomplete);
        break;
      case "violations":
        addItem(scanDetails?.results?.violations);
        break;
      default:
        addItem([]);
    }
    navigate(`/scans/${id}/${name?.toLowerCase()}`);
  };

  const chooseResultsCount = (name) => {
    switch (name) {
      case "passes":
        return scanDetails?.results?.passes?.length;
      case "inapplicable":
        return scanDetails?.results?.inapplicable?.length;
      case "incomplete":
        return scanDetails?.results?.incomplete?.length;
      case "violations":
        return scanDetails?.results?.violations?.length;
      default:
        return 0;
    }
  };
  const handleViewDetailsClick = (e, name) => {
    e.preventDefault();
    handleAddItem(name);
  };

  return (
    <Layout>
      <Grid container spacing={2} sx={{ display: { xs: "none", md: "flex" } }}>
        <Grid item xs={6}>
          <Grid container spacing={2}>
            {pairs?.map((item) => {
              return (
                <Grid item xs={6} key={item.name}>
                  <Card
                    sx={{
                      height: "110px",
                      background: item?.backgroundColor,
                      p: 2,
                    }}
                  >
                    <Typography variant="h6">{item?.name}</Typography>
                    <Typography variant="h3" sx={{ textAlign: "center" }}>
                      {chooseResultsCount(item?.name)}
                    </Typography>
                    <Typography sx={{ textAlign: "right" }}>
                      <Link
                        onClick={(e) => handleViewDetailsClick(e, item?.name)}
                        sx={{ color: "black" }}
                      >
                        View Details{" "}
                      </Link>
                    </Typography>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <PieChart results={scanDetails?.results} sx={{ height: "50px" }} />
        </Grid>
      </Grid>

      {/* MobileLayout */}
      <Grid
        container
        spacing={2}
        sx={{ display: { xs: "flex", md: "none" }, mt: 2 }}
      >
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {pairs?.map((item) => {
              return (
                <Grid item xs={6} key={item.name}>
                  <Card
                    sx={{
                      p: 1,
                      flexDirection: "column",
                      background: item?.backgroundColor,
                    }}
                  >
                    <Typography variant="h6">{item?.name}</Typography>
                    <Typography variant="h3" sx={{ textAlign: "center" }}>
                      {chooseResultsCount(item?.name)}
                    </Typography>
                    <Typography sx={{ textAlign: "right" }}>
                      <Link
                        onClick={(e) => handleViewDetailsClick(e, item?.name)}
                        sx={{ color: "black" }}
                      >
                        View Details{" "}
                      </Link>
                    </Typography>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <PieChart results={scanDetails?.results} />
        </Grid>
      </Grid>
    </Layout>
  );
}
