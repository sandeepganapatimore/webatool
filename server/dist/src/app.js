"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var cors_1 = __importDefault(require("cors"));
var App = /** @class */ (function () {
    function App() {
        this.app = (0, express_1.default)();
        this.app.use(express_1.default.json());
        this.app.use(this.myLogger);
        this.app.use((0, cors_1.default)());
        this.app.use("/api", routes_1.default);
    }
    App.prototype.myLogger = function (req, res, next) {
        console.log("LOGGED");
        next();
    };
    return App;
}());
exports.default = new App().app;
//# sourceMappingURL=app.js.map