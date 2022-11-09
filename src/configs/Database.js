import Sequelize from "sequelize";
import dotenv from "dotenv";

dotenv.config();

/* Definicion de Variables de entorno */

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    port: process.env.PG_PORT,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
      },
      pool: {
        max: 5,
        min: 0,
        idle: 10000,
      },
    },
  }
);
