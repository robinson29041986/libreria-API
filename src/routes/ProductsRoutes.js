import { Router } from "express";
import {
  deleteProduct,
  getProducts,
  getProduct,
  postProduct,
  updateProduct,
} from "../controllers/ProductsController.js";

const router = Router();

/* Declaración de las rutas Modelo Productos*/

router.get("/products", getProducts);
router.post("/products", postProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);
router.get("/products/:id", getProduct);

export default router;
