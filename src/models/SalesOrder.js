import { sequelize } from '../configs/Database.js';
import { DataTypes } from 'sequelize';

export const SalesOrder = sequelize.define('sale_order', {
},
  {

    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false

    },
    /* Personalización del timestamps */
    freezeTableName: true,
    timestamps: false
  });

