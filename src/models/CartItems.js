import { sequelize } from '../database/Database.js';
import { DataTypes } from 'sequelize';

export const CartItems = sequelize.define('cart_item', {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  unit_price: {
    type: DataTypes.DECIMAL,
    allowNull: false
  },

}, {
  /* Personalización del timestamps */

  freezeTableName: true,
  timestamps: false
});

CartItems.removeAttribute('id');