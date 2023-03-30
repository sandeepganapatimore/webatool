import express from "express";
import { verifyToken } from "../utils/middlewares";
import { ScanController } from "./scanController";

class ScanRouter {
  scanController = new ScanController();
  scanRoutes = express.Router();
  constructor() {
    this.scanRoutes.post("/scans", verifyToken, this.scanController.getScans);
    
    this.scanRoutes.post(
      "/scans/new",
      this.validUrl,
      this.scanController.createScans
    );

    this.scanRoutes.delete("/scans/:id", this.scanController.removeScans);

    // scanRoutes.put("/scans/:id", updateScans);

    this.scanRoutes.get("/scans/:id", this.scanController.getScansById);
  }

  validUrl(req: any, res: any, next: any) {
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
    } catch (error) {
      res.status(400);
      res.json({ success: false, error: `Invalid URL` });
      return;
    }
    next();
  }
}
export default new ScanRouter().scanRoutes;
