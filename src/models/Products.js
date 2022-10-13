import { sequelize } from '../database/Database.js';
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
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
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