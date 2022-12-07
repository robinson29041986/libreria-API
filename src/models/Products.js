import { sequelize } from '../configs/Database.js';
import { DataTypes } from 'sequelize';

export const Products = sequelize.define('product', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  image: {
    type: DataTypes.STRING,
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
      msg: 'Error. Ya hay un producto con ese nombre.'
    },
    validate: {
      len: {
        args: [3, 50],
        msg: 'El nombre debe contener minimo 3 letras.'
      },
      is: {
        args: /^[A-Za-z0-9Á-ú-ü ]+$/u,
        msg: 'El nombre admite caracteres alfanumericos',
      }
    }
  },
  description: {
    type: DataTypes.STRING(255),
    allowNull: true,
    validate: {
      max: {
        args: 255,
        msg: 'La descripción debe tener 255 caracteres.'
      },
    }
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    validate: {
      isNumeric: {
        args: true,
        msg: 'Solo introduzca valores numericos o decimales.'
      }
    },
    get() {
      const formatterPeso = new Intl.NumberFormat('es-CO', {

        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0

      })

      return formatterPeso.format(this.getDataValue('price'));
    }
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isNumeric: {
        args: true,
        msg: 'Solo introduzca valores numericos o decimales.'
      },
      min: {
        args: 1,
        msg: 'La Cantidad minima es 1'

      }
    }
  },
},
  {
    /* Personalización del timestamps */

    freezeTableName: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });