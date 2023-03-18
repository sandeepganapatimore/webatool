import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { dateFormat } from "../utils/helper";
import Link from "@mui/material/Link";

const columns = [
  { field: "url", headerName: "URL", flex: 1 },
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
    renderCell: (params) => (
      <Link href={`/scans/${params?.row?.id}`}>View Details</Link>
    ),
  },
];

export default function DataTable(props) {
  const { rows } = props;
  const [paginationModel, setPaginationModel] = React.useState({
    page: 0,
    pageSize: 5,
  });
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
