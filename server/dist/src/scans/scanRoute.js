"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var scanController_1 = require("./scanController");
var ScanRouter = /** @class */ (function () {
    function ScanRouter() {
        this.scanController = new scanController_1.ScanController();
        this.scanRoutes = express_1.default.Router();
        this.scanRoutes.get("/scans", this.scanController.getScans);
        this.scanRoutes.post("/scans", 
        // this.validUrl(),
        this.scanController.createScans);
        this.scanRoutes.delete("/scans/:id", this.scanController.removeScans);
        // scanRoutes.put("/scans/:id", updateScans);
        this.scanRoutes.get("/scans/:id", this.scanController.getScansById);
    }
    ScanRouter.prototype.validUrl = function (req, res, next) {
        // Ensure a URL was provided.
        var url = req.body.url;
        console.log(req.body);
        if (!url) {
            res.status(404);
            res.json({ success: false, error: "url is required" });
            return;
        }
        // Ensure the URL is valid.
        try {
            new URL(url);
        }
        catch (error) {
            res.status(400);
            res.json({ success: false, error: "Invalid URL" });
            return;
        }
        next();
    };
    return ScanRouter;
}());
exports.default = new ScanRouter().scanRoutes;
//# sourceMappingURL=scanRoute.js.map