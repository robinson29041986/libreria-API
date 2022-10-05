import { sequelize } from '../database/Database.js';
import { DataTypes } from 'sequelize';
import { Products } from './Products.js'

export const Categories = sequelize.define('categories', {
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
    }
}, {
    /* Personalización del timestamps */
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

Categories.hasMany(Products,{
    /* Declaración de la asociación */
    foreignKey: {
        name: 'categories_id',
        allowNull: false,
    },
    sourceKey: 'id',
    /* Acciones de actualización y borrado */
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE'
});

Products.belongsTo(Categories, {
    /* Declaración de la asociación */
    foreignKey: 'categories_id',
    targetId: 'id'
});