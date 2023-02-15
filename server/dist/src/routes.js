"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var scanRoute_1 = __importDefault(require("./scans/scanRoute"));
var Routes = /** @class */ (function () {
    function Routes() {
        this.routes = express_1.default.Router();
        this.routes.use("/", scanRoute_1.default);
    }
    return Routes;
}());
exports.default = new Routes().routes;
//# sourceMappingURL=routes.js.map