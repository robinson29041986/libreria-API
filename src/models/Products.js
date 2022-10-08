import { sequelize } from '../database/Database.js';
import { DataTypes } from 'sequelize';
import { CartItems } from './CartItems.js';

export const Products = sequelize.define('products', {
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
    }
}, {
    /* Personalización del timestamps */
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

Products.hasMany(CartItems, {
    foreignKey: {
        name: 'products_id',
        allowNull: false
    },
    sourceKey: 'id',
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE'
});

CartItems.belongsTo(Products, {
    foreignKey: 'products_id',
    targetId: 'id'
});