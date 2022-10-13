import { Router } from "express";
import {
  deleteCart,
  getCarts,
  getCart,
  postCart,
  putCart,
} from "../controllers/CartController.js";

const router = Router();

/* Declaración de las rutas Modelo Carrito*/

router.get("/cart", getCarts);
router.post("/cart", postCart);
router.put("/cart/:id", putCart);
router.delete("/cart/:id", deleteCart);
router.get("/cart/:id", getCart);


export default router;