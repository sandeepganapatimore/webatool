import express from "express";

import scanRoutes from "./scans/scanRoute.mjs";

const routes = express.Router();

routes.use("/", scanRoutes);

export default routes;
