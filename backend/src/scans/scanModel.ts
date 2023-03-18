import { DataTypes } from "sequelize";
import sequelize from "../db/db";

// By using define()
const ScanModel = sequelize.define("Scans", {
  // Model attributes are defined here
  url: {
    type: DataTypes.STRING,
    allowNull: false,   
  },
});

export default ScanModel;
