import { Router } from "express";
import { signIn, signUp } from "../controllers/AuthController.js";

const router = Router();

/* Declaración de rutas*/

/* Ruta de Acceso */
router.post("/login", signIn);

/* Ruta de Registro */
router.post("/register", signUp);

export default router;