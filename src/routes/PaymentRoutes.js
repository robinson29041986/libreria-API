import { Router } from "express";
import {
    getPayments,
    postPayment,
    putPayment,
    deletePayment,
    getPayment,
} from "../controllers/PaymentMethodsController.js";

const router = Router();

/* Declaración de las rutas Modelo Metodos de Pago */

router.get("/payments", getPayments);
router.post("/payments", postPayment);
router.put("/payments/:id", putPayment);
router.delete("/payments/:id", deletePayment);
router.get("/payments/:id", getPayment);

export default router;