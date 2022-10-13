import { sequelize } from '../database/Database.js';
import { DataTypes } from 'sequelize';


export const Catalogs = sequelize.define('catalog', {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

}, {
  /* Personalización del timestamps */

  freezeTableName: true,
  timestamps: false
});

Catalogs.removeAttribute('id');