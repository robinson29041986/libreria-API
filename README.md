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

> **Nota** 

Cuando se ejecuta la instalacion viene con nodemon


## API EndPoints

| RESTFul API                     | URL                                        
| --------------------------------| ------------------------------------------ 
| Registro                        | /register                    
| Iniciar Sesion                  | /login                       
| Usuarios                        | /users             
| Listar/Crear/ Usuario           | /users                   
| Editar/Eliminar Usuario         | /users/:id             
 

## Pruebas

## Despliegue

## Puesta en Marcha

## Version

## Licencia

npm start


