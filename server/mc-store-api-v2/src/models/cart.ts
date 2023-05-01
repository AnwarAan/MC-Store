import { BelongsToMany, DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import user from "./user.js";
import product from "./product.js";

const cart = sequelize.define("cart", {
  cart_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING },
  // user_id: { type: DataTypes.INTEGER, references: { model: user, key: "user_id" } },
  // product_id: { type: DataTypes.INTEGER, references: { model: product, key: "product_id" } },
});

// cart.hasMany(user, { foreignKey: "user_id" });
// cart.belongsToMany(user);
user.belongsToMany(product, { through: "cart", foreignKey: "user_id" });
product.belongsToMany(user, { through: "cart", foreignKey: "product_id" });
// user.belongsToMany(product, { through: "cart" });
// product.belongsToMany(user, { through: "cart" });

export default cart;
