import { sequelize } from '../database/Database.js';
import { DataTypes } from 'sequelize';

export const OrderDetails = sequelize.define('order_details', {
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    /* Personalización del timestamps */
    timestamps: false
});

OrderDetails.removeAttribute('id');