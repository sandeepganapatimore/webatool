import express from "express";

import scanRoutes from "./scans/scanRoute";
import authRoutes from "./auth/AuthRoute";

class Routes {
  routes = express.Router();
  constructor() {
    this.routes.use("/", scanRoutes);
    this.routes.use("/", authRoutes);
  }
}
export default new Routes().routes;
