import { sequelize } from "../database/Database.js";
import { DataTypes } from "sequelize";
import { CartItems } from "./CartItems.js";
import { SalesOrder } from "./SalesOrder.js";
import { PaymentMethods } from "./PaymentMethods.js";

export const Cart = sequelize.define(
  'cart',
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

    freezeTableName: true,
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

/* Relacion Carrito al detalle de carrito */

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

/* Relacion carrito de compras a orden de venta */

Cart.hasMany(SalesOrder, {
  foreignKey: {
    name: "cart_id",
    allowNull: false,
  },
  sourceKey: "id",
  onDelete: "SET NULL",
  onUpdate: "CASCADE",
});

SalesOrder.belongsTo(Cart, {
  foreignKey: "cart_id",
  targetId: "id",
});


/* Declaración de la asociación */
PaymentMethods.hasMany(Cart, {

  foreignKey: {
    name: "payment_id",
    allowNull: false,
  },
  sourceKey: "id",
  /* Acciones de actualización y borrado */

  onDelete: "RESTRICT",
  onUpdate: "CASCADE",
});

Cart.belongsTo(PaymentMethods, {

  /* Declaración de la asociación */
  foreignKey: "payment_id",
  targetId: "id",
});