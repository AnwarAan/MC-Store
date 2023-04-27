import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

//Postgres Model
const user = sequelize.define("user", {
  user_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  balance: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: Date },
  updatedAt: { type: DataTypes.DATE, allowNull: false, defaultValue: Date },
});

export default user;
