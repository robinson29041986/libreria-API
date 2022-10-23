import express from "express";
import dotenv from "dotenv";
import ProductsRoutes from "./routes/ProductsRoutes.js";
import CategoriesRoutes from "./routes/CategoriesRoutes.js";
import UsersRoutes from "./routes/UsersRoutes.js";
import SalesOrderRoutes from "./routes/SalesOrderRoutes.js";
import CartRoutes from "./routes/CartRoutes.js"
import PaymentRoutes from "./routes/PaymentRoutes.js"

dotenv.config();
const App = express();

// Middlewares
App.use(express.json());

App.use(ProductsRoutes);
App.use(CategoriesRoutes);
App.use(UsersRoutes);
App.use(SalesOrderRoutes);
App.use(CartRoutes);
App.use(PaymentRoutes);

/* Error 404 endpoint */

App.use((req, res, next) => {
    res.status(404).json({
        message: 'endpoint not found'
    })
});

export default App;
