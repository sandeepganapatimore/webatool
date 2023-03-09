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
    backgroundColor: "#139605",
  },
  {
    name: "inapplicable",

    backgroundColor: "rgba(12, 235, 220, 1)",
  },
  {
    name: "incomplete",
    backgroundColor: "#f7b90c",
  },
  {
    name: "violations",
    backgroundColor: "red",
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
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Grid container spacing={2}>
            {pairs?.map((item) => {
              return (
                <Grid item xs={6} key={item.name}>
                  <Card
                    sx={{
                      height: "150px",
                      width: "180px",
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
          <PieChart results={scanDetails?.results} />
        </Grid>
      </Grid>
    </Layout>
  );
}
