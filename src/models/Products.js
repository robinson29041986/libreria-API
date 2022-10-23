import { sequelize } from '../configs/Database.js';
import { DataTypes } from 'sequelize';
import { CartItems } from './CartItems.js';
import { Catalogs } from './Catalogs.js';

export const Products = sequelize.define('product', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(50),
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
    }
  },
  stock_qty: {
    type: DataTypes.INTEGER,
    defaultValue: '0',
    allowNull: false,
    validate: {
      isNumeric: {
        args: true,
        msg: 'Solo introduzca valores numericos o decimales.'
      },
      min: {
        args: 0,
        msg: 'La Cantidad minima es 1'

      }
    }
  }
},
  {
    /* Personalización del timestamps */

    freezeTableName: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });

/* Relacion de los Productos con el detalle de carrito */
Products.hasMany(CartItems, {
  foreignKey: {
    name: 'product_id',
    allowNull: false
  },
  sourceKey: 'id',
  onDelete: 'SET NULL',
  onUpdate: 'CASCADE'
});

CartItems.belongsTo(Products, {
  foreignKey: 'product_id',
  targetId: 'id'
});

/* Relacion de los Productos con el Catalogo */
Products.hasMany(Catalogs, {
  foreignKey: {
    name: 'product_id',
    allowNull: false
  },
  sourceKey: 'id',
  onDelete: 'SET NULL',
  onUpdate: 'CASCADE'
});

Catalogs.belongsTo(Products, {
  foreignKey: 'product_id',
  targetId: 'id'
});