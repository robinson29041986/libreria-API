import { Router } from "express";
import { CheckPolicy, checkToken } from "../middlewares/CheckAuth.js";
import {
  deleteProduct,
  getProducts,
  getProduct,
  postProduct,
  putProduct,
} from "../controllers/ProductsController.js";

const router = Router();

/* Declaración de las rutas Modelo Productos*/

router.get("/products", checkToken, CheckPolicy, getProducts);
router.post("/products", checkToken, postProduct);
router.put("/products/:id", checkToken, putProduct);
router.delete("/products/:id", checkToken, deleteProduct);
router.get("/products/:id", checkToken, CheckPolicy, getProduct);

export default router;