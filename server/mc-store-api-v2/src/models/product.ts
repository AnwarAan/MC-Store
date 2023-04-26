import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

const product = sequelize.define("product", {
  product_id: { type: DataTypes.NUMBER, allowNull: false, autoIncrement: true, primaryKey: true },
  title: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.NUMBER, allowNull: false },
  category: {
    type: DataTypes.ENUM("electronic", "food", "beverage", "fashion", "accessories"),
    allowNull: false,
  },
  stock: { type: DataTypes.NUMBER, allowNull: false },
  weight: { type: DataTypes.NUMBER, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
  image: { type: DataTypes.STRING },
});

export default product;
