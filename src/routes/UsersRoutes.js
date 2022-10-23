import { Router } from "express";

import {
  deleteUser,
  getUser,
  getUsers,
  postUser,
  putUser,
} from "../controllers/UsersController.js";
const router = Router();

/* Declaración de las rutas Modelo Usuarios*/

router.get("/users", getUsers);
router.post("/users", postUser);
router.put("/users/:id", putUser);
router.delete("/users/:id", deleteUser);
router.get("/users/:id", getUser);

export default router;
