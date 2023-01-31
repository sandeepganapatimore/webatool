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
  // Ensure the URL is valid.
  try {
    new URL(url);
    // const input = new URL(url);
    // input.hostname;
    // console.log(input.hostname);
  } catch (error) {
    res.status(400);
    res.json({ success: false, error: `Invalid URL: ${error?.message}` });
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
