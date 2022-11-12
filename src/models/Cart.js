import { sequelize } from "../configs/Database.js";
import { DataTypes } from "sequelize";
import { CartItems } from "./CartItems.js";
import { SalesOrder } from "./SalesOrder.js";
import { PaymentMethods } from "./PaymentMethods.js";

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

/* Relacion del Detalle del Carrito al Carrito */
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

/* Relacion de la Orden de Venta con el Carrito */
SalesOrder.belongsTo(Cart, {
  foreignKey: "cart_id",
  targetId: "id",
});

/* Relacion Metodo de Pago con el Carrito */
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

/* relacion del Carritocon el Metodo de Pago */
Cart.belongsTo(PaymentMethods, {

  /* Declaración de la asociación */
  foreignKey: "payment_id",
  targetId: "id",
});