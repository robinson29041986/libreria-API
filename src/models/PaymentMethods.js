import { sequelize } from '../database/Database.js';
import { DataTypes } from 'sequelize';



export const PaymentMethods = sequelize.define('payment_methods', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 'true'
  }
}, {
  /* Personalización del timestamps */

  freezeTableName: true,
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});