import { sequelize } from "../configs/Database.js";
import { DataTypes } from "sequelize";

export const Cart = sequelize.define('cart', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  total_price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    defaultValue: 0,
    validate: {
      isInt: {
        args: true,
        msg: 'Solo introduzca valores numericos o decimales.'
      }
    }
  }
}, {
  /* Personalización del timestamps */

  freezeTableName: true,
  timestamps: true,
  createdAt: "created_at",
  updatedAt: "updated_at",

});