import Sequelize from "sequelize";



export const sequelize = new Sequelize('libreria', 'avengers2024', 'MuS!(@03082024', {
    host: 'libreria.postgres.database.azure.com',
    dialect: 'postgres',
    dialectOptions: {
        port: 5432,
        ssl: {
            require: true,
        },
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        }
    }
});