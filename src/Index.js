import App from "./App.js";
import { sequelize } from "./database/Database.js";

/* función asíncrona para el try catch */

async function main() {
  try {

    /* await sequelize.authenticate();
        console.log('La conexión se ha establecido con éxito.'); */

    await sequelize.sync({ force: true });
    App.listen(process.env.PORT);
    console.log(
      `El servidor esta escuchando en el puerto', ${process.env.PORT}`
    );
  } catch (error) {
    console.error("No se puede conectar a la base de datos:", error);
  }
}

/* Llamamos la función main */
main();
