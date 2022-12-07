import { Router } from "express";
import {
  deleteRole,
  getRole,
  getRoles,
  postRole,
  putRole,
} from "../controllers/RolesController.js";

const router = Router();

/* Declaración de las rutas Modelo Roles*/

router.get("/roles", getRoles);
router.post("/roles", postRole);
router.put("/roles/:id", putRole);
router.delete("/roles/:id", deleteRole);
router.get("/roles/:id", getRole);

export default router;
