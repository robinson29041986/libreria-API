import { sequelize } from "../database/Database.js";
import { DataTypes } from "sequelize";

export const ShoppingCart = sequelize.define("shopping_cart", {
  id: {
    types: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
});
