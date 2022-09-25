
import App from './App.js';
import { sequelize } from './database/Database.js';

import './models/Customers.js';
import './models/Orders.js';




console.log('El servidor esta escuchando en el puerto', 5000);


// función asíncrona para el try catch

async function main() {
    try {
        /* await sequelize.authenticate(); */
        /* console.log('La conexión se ha establecido con éxito.'); */
        await sequelize.sync({ alter: true })
        App.listen(5000);
        console.log('El Servidor esta escuchando en el puerto', 5000);
    } catch (error) {
        console.error('No se puede conectar a la base de datos:', error);
    }
}

// Lllamamos la función main
main();