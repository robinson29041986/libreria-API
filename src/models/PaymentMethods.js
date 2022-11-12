import { sequelize } from '../configs/Database.js';
import { DataTypes } from 'sequelize';



export const PaymentMethods = sequelize.define('payment_methods', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(50),
    get() {
      const name = this.getDataValue('name');
      return name ? name.toUpperCase() : null;
    },
    allowNull: false,
    unique: {
      args: true,
      msg: 'Ya hay un metodo de pago con ese nombre'
    },
    validate: {
      is: {
        args: /^[A-Za-z0-9 ]+$/i,
        msg: 'No se admiten caracteres especiales',
      }
    }
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