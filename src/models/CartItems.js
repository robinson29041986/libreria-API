import { sequelize } from '../configs/Database.js';
import { DataTypes } from 'sequelize';

export const CartItems = sequelize.define('cart_item', {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isInt: {
        args: true,
        msg: 'Debe introducir solo numeros'
      },
      min: {
        args: 1,
        msg: 'el Valor minimo es uno'
      }
    }
  },

  unit_price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    validate: {
      isNumeric: {
        args: true,
        msg: 'Solo se admiten numeros.'
      }
    }
  },

}, {
  /* Personalización del timestamps */

  freezeTableName: true,
  timestamps: false
});

CartItems.removeAttribute('id');