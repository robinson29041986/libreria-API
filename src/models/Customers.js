
import { sequelize } from '../database/Database.js';
import { DataTypes } from "sequelize";

export const Customers = sequelize.define('customers', {
    customersId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },

    lastName: {
        type: DataTypes.STRING(50),
        allowNull: false
    },

    birthday: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },

    email: {
        type: DataTypes.TEXT,
        allowNull: false
    },
});