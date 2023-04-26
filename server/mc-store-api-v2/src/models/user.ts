import mongoose, { InferSchemaType } from "mongoose";
import { DataTypes, NUMBER } from "sequelize";
import { sequelize } from "../config/db.js";

//Mongo Model
const userSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
  },
  { timestamps: true }
);
type User = InferSchemaType<typeof userSchema>;
const userMongoose = mongoose.model("user", userSchema);

//Postgres Model
const userSequelize = sequelize.define("user", {
  user_id: { type: DataTypes.NUMBER, allowNull: false, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  balance: { type: DataTypes.NUMBER, allowNull: false, defaultValue: 0 },
});

export default { userMongoose, userSequelize };
