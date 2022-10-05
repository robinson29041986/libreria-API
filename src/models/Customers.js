import { sequelize } from "../database/Database.js";
import { DataTypes } from "sequelize";
import { Orders } from "./Orders.js";

export const Customers = sequelize.define(
  "customers",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    birthday: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    cellphone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    password: {
      type: DataTypes.TEXT,
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

Customers.hasMany(Orders, {
  /* Declaración de la asociación */
  foreignKey: {
    name: "customers_id",
    allowNull: false,
  },
  sourceKey: "id",
  /* Acciones de actualización y borrado */
  onDelete: "SET NULL",
  onUpdate: "CASCADE",
});

Orders.belongsTo(Customers, {
  /* Declaración de la asociación */
  foreignKey: "customers_id",
  targetId: "id",
});
