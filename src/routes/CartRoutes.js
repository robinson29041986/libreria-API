import { Router } from "express";
import {
    deleteCart,
    getCarts,
    getCart,
    postCart,
    updateCart,
} from "../controllers/CartController.js";

const router = Router();

/* Declaración de las rutas Modelo Productos*/

router.get("/cart", getCarts);
router.post("/cart", postCart);
router.put("/cart/:id", updateCart);
router.delete("/cart/:id", deleteCart);
router.get("/cart/:id", getCart);


export default router;