import sequelize from "../db/db";
import { DataTypes } from "sequelize";
import bcrypt from "bcrypt";

const UserModel = sequelize.define("User", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  allowExtraEmails: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
});

UserModel.prototype.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};
export default UserModel;
