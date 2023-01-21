import { DataTypes } from "sequelize";
import sequelize from "../db/db.mjs";
import ScanModel from "../scans/scanModel.mjs";

const scanDetailModel = sequelize.define("ScanDetails", {
  // model attributes
  results: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  isRescan: {
    type: DataTypes.BOOLEAN,
  },
});

// console.log(scanDetailModel === sequelize.models.results); // true
// creates the
ScanModel.hasMany(scanDetailModel);
scanDetailModel.belongsTo(ScanModel);

export default scanDetailModel;
