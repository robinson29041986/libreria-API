import App from "./App.js";
import { sequelize } from "./configs/Database.js";

/* función asíncrona para el try catch */

const main = async () => {
  try {

    /* await sequelize.authenticate();
        console.log('La conexión se ha establecido con éxito.'); */

    await sequelize.sync({ alter: true });
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
