import React, { Suspense } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { AppContextWrapper } from "./ContextState";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Home = React.lazy(() => import("./Home/Home"));
const DashBoard = React.lazy(() => import("./DashBoard/Dashboard"));
const ScanTable = React.lazy(() => import("./Scan/Scans"));
const ScanDetails = React.lazy(() => import("./Scan/ScanDetails"));
const IssueDetails = React.lazy(() => import("./Scan/IssueDetails"));

function App() {
  return (
    <Box sx={{ backgroundColor: "#fffbff" }}>
      <AppContextWrapper>
        <BrowserRouter>
          <Suspense
            fallback={
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  justifyItems: "center",
                }}
              >
                <CircularProgress />
              </Box>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<DashBoard />} />
              <Route path="/scans" element={<ScanTable />} />
              <Route path="/scans/:id" element={<ScanDetails />} />
              <Route path="/scans/:id/:name" element={<IssueDetails />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </AppContextWrapper>
    </Box>
  );
}

export default App;