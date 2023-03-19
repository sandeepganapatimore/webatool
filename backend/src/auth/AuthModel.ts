import sequelize from "../db/db";
import { DataTypes } from "sequelize";
import bcrypt from "bcrypt";

const AuthModel = sequelize.define("User", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

AuthModel.prototype.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};
export default AuthModel;
