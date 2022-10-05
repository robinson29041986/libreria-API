import { sequelize } from "../database/Database.js";
import { DataTypes } from "sequelize";
import { OrderDetails } from "./OrderDetails.js";

export const Orders = sequelize.define(
  "orders",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    order_date: {
      type: DataTypes.DATE,
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

Orders.hasMany(OrderDetails, {
  foreignKey: {
    name: "orders_id",
    allowNull: false,
  },
  sourceKey: "id",
  onDelete: "SET NULL",
  onUpdate: "CASCADE",
});

OrderDetails.belongsTo(Orders, {
  foreignKey: "orders_id",
  targetId: "id",
});
