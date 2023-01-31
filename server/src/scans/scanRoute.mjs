import express from "express";
import {
  getScans,
  createScans,
  removeScans,
  // updateScans,
  getScansById,
} from "./scanController.mjs";

const scanRoutes = express.Router();

function validUrl(req, res, next) {
  // Ensure a URL was provided.
  const { url } = req.body;
  console.log(req.body);
  if (!url) {
    res.status(404);
    res.json({ success: false, error: "url is required" });
    return;
  }
  next();
}
scanRoutes.get("/scans", getScans);

scanRoutes.post("/scans", validUrl, createScans);

scanRoutes.delete("/scans/:id", removeScans);

// scanRoutes.put("/scans/:id", updateScans);

scanRoutes.get("/scans/:id", getScansById);

export default scanRoutes;
