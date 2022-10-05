import { Router } from "express";
import {
  getCategories,
  postCategory,
  updateCategory,
  deleteCategory,
  getCategory,
} from "../controllers/CategoriesController.js";

const router = Router();

/* Declaración de las rutas Modelo Categories */

router.get("/categories", getCategories);
router.post("/categories", postCategory);
router.put("/categories/:id", updateCategory);
router.delete("/categories/:id", deleteCategory);
router.get("/categories/:id", getCategory);

export default router;
