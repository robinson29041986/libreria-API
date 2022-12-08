# Online Book Sale RESTful API 

> Servicio API RESTFul para una aplicacion WEB de venta de libros online, creando solicitudes HTTP para realizar funciones estándar de base de datos, como crear, leer, actualizar y suprimir registros (también conocidos como CRUD)



## En el Comienzo 💻

Es una intefaz de Aplicacion que esta Diseñada con tecnologia de Node.js, Manejo de respuesta en JavaScript Object Notation (JSON). Manejo de base de Datos(PostgresSQL), servicios de autorizaciones, carga y almacenamiento de archivos, control acceso de Usuarios y Clientes, encriptado de Datos 

## Requisitos Principales 📉


### Base de Datos

> **Nota**

Se utiliza sequelize como ORM para postgresql

-[PostgresSQL] (https://www.postgresql.org/)

## Dependencias

- [Express] (https://www.expressjs.com/)
- [Sequelize] (https://www.sequelize.com/)
- [Bycrypt] (https://www.npmjs.com/package/bcrypt)
- [dotenv] (https://www.npmjs.com/package/dotenv)
- [multer] (https://www.npmjs.com/package/multer)
- [jwt] (https://www.npmjs.com/package/jwt)
- [pg] (https://www.npmjs.com/package/pg)
- [pg-hstore] (https://www.npmjs.com/package/pg-hstore)
- [cors] (https://www.npmjs.com/package/cors)


## Estructurado de Carpetas

    .
    ├── ...
    ├── public                  
    |   ├── uploads             # Archivos estaticos
    ├── src                     
    │   ├── configs             # configuracion
    │   ├── controllers         # controladores
    │   ├── middlewares         # programas intermedios
    │   └── models              # Modelos.
    │   └── routes              # Rutas.
    └── ...                     # Archivos.


## Configuracion del Desarrollo

### Clonar el Proyecto

git clone https://github.com/robinson29041986/libreria-API.git

### Se Instalan las dependencias

Se llaman y se instalan las dependencias;

npm i

instalamos nodemosn en modo desarrollo

npm i nodemon -D

> **Note** 

Cuando se ejecuta el proceso de instalacion, se incluye nodemon lo mas aconsejable es añadir un script al archivo package.json `dev`: `node src/Index.js` paso seguido nos dirijimos a la terminal y ejecutamos el comando `npm run dev` que evita el reinicio manual del servidor.


## API EndPoints

| ENDPOINTS                       | URL                                        
| --------------------------------| ------------------------------------------ 
| Registro                        | /register           
| Iniciar Sesion                  | /login               
| Usuarios                        | /users       
| Listar/Crear/ Usuarios          | /users             
| Editar/Eliminar Usuarios        | /users/:id          
| Crear/Listar Productos          | /products
| Editar/Eliminar Productos       | /products/:id
| Listar/Crear Categorias         | /category
| Editar/eliminar Categorias      | /category/:id
| Listar/Crear Carrito            | /cart
| Editar/Eliminar Carrito         | /cart/:id
| Listar/Crear Metodos de Pago    | /paymentMethod
| Editar/Eliminar Metodos de Pago | /paymentMethod/:id
| Listar/Crear Roles              | /roles
| Editar/Eliminar Roles           | /roles/:id
| listar/Crear Ordenes de Venta   | /sale_order
| Editar/Eliminar Ordenes de Venta| /sale_order/:id


## Pruebas

### Prerrequisitos

> el tester debe tener experiencia previa en Node, Postgres, Express, Sequelize y Jest

### Dependencia de Prueba

- [jest] (https://jestjs.io/)

**Note**

Para Produccion, se debe eliminar la ejecucion de Pruebas

### Configuracion de Sequelize

### Configuracion de Jets

### Ejecutando Pruebas

## Despliegue

## Puesta en Marcha

## Version

## Licencia

**Warninig**


