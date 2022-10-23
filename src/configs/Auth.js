import dotenv from 'dotenv';

dotenv.config();

/* Configuracion del Modulo Bcrypt y JWT */

export const Auth = {
    rounds: process.env.ROUNDS
}