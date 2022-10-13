import { Router } from "express";
import {
  deleteSaleOrder,
  getSaleOrder,
  getSalesOrder,
  postSaleOrder,
  putSaleOrder,
} from "../controllers/SalesOrderController.js";

const router = Router();

/* Declaracion de Ruta */

router.get("sales_order", getSalesOrder);
router.post("/sales_order", postSaleOrder);
router.put("/sales_order/:id", putSaleOrder);
router.put("/sales_order/:id", deleteSaleOrder);
router.get("/sales_order/:id", getSaleOrder);


export default router;