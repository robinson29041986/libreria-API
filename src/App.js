import express from 'express';
import ProductsRoutes from './routes/ProductsRoutes.js';
import CategoriesRoutes from './routes/CategoriesRoutes.js';

const App = express();

// Middlewares
App.use(express.json());

App.use(ProductsRoutes);
App.use(CategoriesRoutes);

export default App;