import { sequelize } from '../database/Database.js';
import { DataTypes } from 'sequelize';

export const CartItems = sequelize.define('cart_items', {
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },

}, {
    /* Personalización del timestamps */
    timestamps: false
});

CartItems.removeAttribute('id');