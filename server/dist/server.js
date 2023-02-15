"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./src/app"));
var port = 8000;
app_1.default.get("/api", function (req, res) {
    res.send("App is running");
});
app_1.default.listen(port, function () {
    console.log("Server is running on http://localhost:".concat(port));
});
//# sourceMappingURL=server.js.map