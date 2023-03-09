import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Layout from "../DashBoard/Layout";
import Link from "@mui/material/Link";
import Container from "@mui/system/Container";

export default function ScanTable() {
  const [rows, setRows] = useState();

  useEffect(() => {
    fetch(`http://localhost:8000/api/scans/`)
      .then((response) => response.json())
      .then((res) => setRows(res));
  }, []);

  return (
    <Layout>
      <Container>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>URL</TableCell>
                <TableCell align="right">CREATED DATE</TableCell>
                <TableCell align="right">RESULTS</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows?.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.url}
                  </TableCell>
                  <TableCell align="right">{row.createdAt}</TableCell>
                  <TableCell align="right">
                    <Link href={`/scans/${row.id}`}>View Details</Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Layout>
  );
}
