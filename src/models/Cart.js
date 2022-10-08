import { sequelize } from "../database/Database.js";
import { DataTypes } from "sequelize";
import { CartItems } from "./CartItems.js";

export const Cart = sequelize.define(
  'carts',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    total_price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  },
  {
    /* Personalización del timestamps */
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

Cart.hasMany(CartItems, {
  foreignKey: {
    name: "cart_id",
    allowNull: false,
  },
  sourceKey: "id",
  onDelete: "SET NULL",
  onUpdate: "CASCADE",
});

CartItems.belongsTo(Cart, {
  foreignKey: "cart_id",
  targetId: "id",
});
