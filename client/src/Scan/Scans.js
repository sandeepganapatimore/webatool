import React, { useState, useEffect, useCallback } from "react";
import Layout from "../DashBoard/Layout";
import Link from "@mui/material/Link";
import Container from "@mui/system/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { dateFormat } from "../utils/helper";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
// import {  GridColDef, GridRowId } from '@mui/x-data-grid';
const columns = [
  { field: "url", headerName: "URL", flex: 1, sortable: false },
  {
    field: "createdAt",
    headerName: "CREATED DATE",
    flex: 1,
    valueGetter: (params) => dateFormat(params?.row?.createdAt),
  },
  {
    field: "results",
    headerName: "RESULTS",
    flex: 1,
    sortable: false,
    renderCell: (params) => (
      <Link href={`/scans/${params?.row?.id}`}>View Details</Link>
    ),
  },
];

export default function ScanTable() {
  const [selectionModel, setSelectionModel] = useState();


  const [data, setData] = useState();
  const [searchValue, setSearchValue] = useState("");
  const [paginationModel, setPaginationModel] = React.useState({
    pageSize: 5,
    page: 0,
  });

  const [sortingModel, setSortingModel] = React.useState({
    field: "createdAt",
    sort: "asc",
  });

  useEffect(() => {
    fetch(`http://localhost:8000/api/scans/`, {
      method: "POST",
      body: JSON.stringify({
        page: paginationModel.page,
        pageSize: paginationModel.pageSize,
        search: searchValue,
        field: sortingModel.field,
        sort: sortingModel.sort,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((res) => setData(res));
  }, [
    paginationModel.page,
    paginationModel.pageSize,
    sortingModel.field,
    sortingModel.sort,
    searchValue,
  ]);

  const handleCallback = useCallback(() => {
    fetch("http://localhost:8000/api/scans", {
      method: "POST",
      body: JSON.stringify({
        page: paginationModel.page,
        pageSize: paginationModel.pageSize,
        search: searchValue,
        order: ["createdAt", "ASC"],
        field: sortingModel.field,
        sort: sortingModel.sort,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [
    paginationModel.page,
    paginationModel.pageSize,
    searchValue,
    sortingModel.field,
    sortingModel.sort,
  ]);
  return (
    <Layout>
      <Container>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flexDirection: "row",
            justifyContent: "center",
            mt: 2,
          }}
        >
          <FormControl
            variant="outlined"
            width="100%"
            fullWidth
            sx={{ width: "65%", mt: 1, ml: 6 }}
          >
            <OutlinedInput
              sx={{
                borderColor: "#7a757f",
                backgroundColor: "#e7e0eb",
                height: "60px",
              }}
              role="textbox"
              placeholder="place url here"
              aria-placeholder="place url here"
              size="large"
              onChange={(e) => setSearchValue(e.target.value)}
              id="url-text"
            />
          </FormControl>
          <Button
            tabIndex={0}
            aria-pressed="false"
            role="button"
            variant="contained"
            sx={{
              height: "60px",
              backgroundColor: "#7331df",
              textTransform: "none",
              color: "#ffffff",
              ml: 2,
              mt: 1,
            }}
            onClick={handleCallback}
          >
            Search
          </Button>
        </Box>
        {data ? (
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              sx={{
                mt: 2,
              }}
              disableColumnFilter
              disableColumnMenu
              disableColumnSelector
              rows={data?.rows}
              rowCount={data?.count}
              columns={columns}
              paginationModel={paginationModel}
              onPaginationModelChange={setPaginationModel}
              rowsPerPageOptions={[5]}
              paginationMode="server"
              onSelectionModelChange={(selection) => {
                if (selection.length > 1) {
                  const selectionSet = new Set(selectionModel);
                  const result = selection.filter((s) => !selectionSet.has(s));
      
                  setSelectionModel(result);
                } else {
                  setSelectionModel(selection);
                }
              }}
              checkboxSelection
              sortingMode="server"
              sortingModel={sortingModel}
              onSortModelChange={(model) => setSortingModel(model[0])}
            />
          </div>
        ) : (
          <Box>
            <Typography
              component="h1"
              variant="h4"
              color="#1d1b1e"
              sx={{ mt: 2 }}
            >
              Records not found
            </Typography>
          </Box>
        )}
      </Container>
    </Layout>
  );
}
