import { Router } from "express";
import { checkToken } from "../middlewares/CheckAuth.js";
import {
  deleteRole,
  getRole,
  getRoles,
  postRole,
  putRole,
} from "../controllers/RolesController.js";

const router = Router();

/* Declaración de las rutas Modelo Roles*/

router.get("/roles", checkToken, getRoles);
router.post("/roles", checkToken, postRole);
router.put("/roles/:id", checkToken, putRole);
router.delete("/roles/:id", checkToken, deleteRole);
router.get("/roles/:id", checkToken, getRole);

export default router;
