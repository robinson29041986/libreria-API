import { sequelize } from '../configs/Database.js';
import { DataTypes } from 'sequelize';


export const Catalogs = sequelize.define('catalog', {
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

}, {
  /* Personalización del timestamps */

  freezeTableName: true,
  timestamps: false
});

Catalogs.removeAttribute('id');