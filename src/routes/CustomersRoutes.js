import { Router } from "express";

import {
  deleteCustomer,
  getCustomer,
  getCustomers,
  postCustomer,
  putCustomer,
} from "../controllers/CustomersController.js";

const router = Router();

/* Declaración de las rutas Modelo Productos*/

router.get("/customers", getCustomer);
router.post("/customers", postCustomer);
router.put("/customers/:id", putCustomer);
router.delete("/customers/:id", deleteCustomer);
router.get("/customers/:id", getCustomers);

export default router;
