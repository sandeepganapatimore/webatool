"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var db_1 = __importDefault(require("../db/db"));
// By using define()
var ScanModel = db_1.default.define("Scans", {
    // Model attributes are defined here
    url: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
});
exports.default = ScanModel;
//# sourceMappingURL=scanModel.js.map