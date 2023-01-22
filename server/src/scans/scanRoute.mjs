import express from "express";
import {
  getScans,
  createScans,
  removeScans,
  updateScans,
  getScansById,
} from "./scanController.mjs";

const scanRoutes = express.Router();

scanRoutes.get("/scans", getScans);

scanRoutes.post("/scans", createScans);

scanRoutes.delete("/scans/:id", removeScans);

scanRoutes.put("/scans/:id", updateScans);

scanRoutes.get("/scans/:id", getScansById);

export default scanRoutes;
