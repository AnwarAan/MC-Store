import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

const product = sequelize.define("product", {
  product_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  title: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false },
  category: { type: DataTypes.ENUM("electronic", "food", "beverage", "fashion", "accessories"), allowNull: false },
  stock: { type: DataTypes.INTEGER, allowNull: false },
  weight: { type: DataTypes.INTEGER, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
  image: { type: DataTypes.STRING },
});

export default product;
