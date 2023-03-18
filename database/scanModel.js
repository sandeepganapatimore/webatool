import { db } from "./db.js";
import { DataTypes } from "sequelize";
// creating the Model.Which interacts with the database.

const scan = db.define(
  "Scan",
  {
    // Model attributes are defined here
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Other model options go here
  }
);

export const scanModel = scan;
