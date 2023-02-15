import express from "express";

import scanRoutes from "./scans/scanRoute";
class Routes {
  routes = express.Router();
  constructor() {
    this.routes.use("/", scanRoutes);
  }
}
export default new Routes().routes;
