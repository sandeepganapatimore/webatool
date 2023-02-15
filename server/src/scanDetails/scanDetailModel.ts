import { DataTypes } from "sequelize";
import sequelize from "../db/db";
import ScanModel from "../scans/scanModel";


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
