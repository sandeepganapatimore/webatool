"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var db_1 = __importDefault(require("../db/db"));
var scanModel_1 = __importDefault(require("../scans/scanModel"));
var scanDetailModel = db_1.default.define("ScanDetails", {
    // model attributes
    results: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: false,
    },
    isRescan: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
});
// console.log(scanDetailModel === sequelize.models.results); // true
// creates the
scanModel_1.default.hasMany(scanDetailModel);
scanDetailModel.belongsTo(scanModel_1.default);
exports.default = scanDetailModel;
//# sourceMappingURL=scanDetailModel.js.map