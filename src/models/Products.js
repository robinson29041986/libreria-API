import { sequelize } from '../configs/Database.js';
import { DataTypes } from 'sequelize';
import { CartItems } from './CartItems.js';
import { Categories } from './Categories.js';

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

/* Relacion del Detalle del Carrito a los Productos */
CartItems.belongsTo(Products, {
  foreignKey: 'product_id',
  targetId: 'id'
});


/* Relacion de la Categoria con los Productos */
Categories.hasMany(Products, {
  foreignKey: {
    name: 'category_id',
    allowNull: false
  },
  sourceKey: 'id',
  onDelete: 'NO ACTION',
  onUpdate: 'CASCADE'
});

/* Relacion de los Productoscon la Categoria */
Products.belongsTo(Categories, {
  foreignKey: 'category_id',
  targetId: 'id'
});