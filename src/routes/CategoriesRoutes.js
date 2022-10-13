import { Router } from "express";
import {
  getCategories,
  postCategory,
  putCategory,
  deleteCategory,
  getCategory,
  getCategoriesProducts,
} from "../controllers/CategoriesController.js";

const router = Router();

/* Declaración de las rutas Modelo Categories */

router.get("/categories", getCategories);
router.post("/categories", postCategory);
router.put("/categories/:id", putCategory);
router.delete("/categories/:id", deleteCategory);
router.get("/categories/:id", getCategory);
router.get("/categories/:id/products", getCategoriesProducts);

export default router;
