

import { sequelize } from '../database/Database.js';
import { DataTypes } from "sequelize";

export const Orders = sequelize.define('orders', {
    OrdersId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },

});