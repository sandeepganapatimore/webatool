import { DataTypes } from "sequelize";

import sequelize from "../db/db.mjs";

const ScanModel = sequelize.define(
  "Scans",
  {
    // Model attributes are defined here
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

export default ScanModel;
