import { sequelize } from "../database/Database.js";
import { DataTypes } from "sequelize";
import { Cart } from "./Cart.js";
import { SalesOrder } from "./SalesOrder.js";

export const Customers = sequelize.define(
  'customer',
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
    /* Opciones De Sequelize */

    freezeTableName: true,
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
);

/* Relacion Cliente al Carrito */
Customers.hasMany(Cart, {
  /* Declaración de la asociación */
  foreignKey: {
    name: "customer_id",
    allowNull: false,
  },
  sourceKey: "id",
  /* Acciones de actualización y borrado */
  onDelete: "RESTRICT",
  onUpdate: "CASCADE",
});

Cart.belongsTo(Customers, {
  /* Declaración de la asociación */
  foreignKey: "customer_id",
  targetId: "id",
});