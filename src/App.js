import express from "express";
import dotenv from "dotenv";
import ProductsRoutes from "./routes/ProductsRoutes.js";
import CategoriesRoutes from "./routes/CategoriesRoutes.js";
import CustomersRoutes from "./routes/CustomersRoutes.js";
import SalesOrderRoutes from "./routes/SalesOrderRoutes.js";
import CartRoutes from "./routes/CartRoutes.js"
import PaymentRoutes from "./routes/PaymentRoutes.js"

dotenv.config();
const App = express();

// Middlewares
App.use(express.json());

App.use(ProductsRoutes);
App.use(CategoriesRoutes);
App.use(CustomersRoutes);
App.use(SalesOrderRoutes);
App.use(CartRoutes);
App.use(PaymentRoutes);

export default App;
