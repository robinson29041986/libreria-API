import express from "express";
import dotenv from 'dotenv';
/* Importacion de Rutas */

import Products from "./routes/ProductsRoutes.js";
import Categories from "./routes/CategoriesRoutes.js";
import Users from "./routes/UsersRoutes.js";
import SalesOrder from "./routes/SalesOrderRoutes.js";
import Roles from "./routes/RolesRoutes.js";
import Cart from "./routes/CartRoutes.js";
import PaymentMethods from "./routes/PaymentRoutes.js";
import Auths from "./routes/AuthRoutes.js";

dotenv.config();
const App = express();


// Middlewares
App.use(express.json());

App.use(Auths);
App.use(Products);
App.use(Categories);
App.use(Users);
App.use(Roles);
App.use(SalesOrder);
App.use(Cart);
App.use(PaymentMethods);


/* Error 404 endpoint */

App.use((req, res, next) => {
    res.status(404).json({
        message: 'endpoint not found'
    })
});

export default App;
