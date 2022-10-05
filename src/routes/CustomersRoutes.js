import { Router } from "express";

import {
  deleteCustomer,
  getCustomer,
  getCustomers,
  postCustomer,
  updateCustomer,
} from "../controllers/CustomersController.js";

const router = Router();

/* Declaración de las rutas Modelo Productos*/

router.get("/customers", getCustomer);
router.post("/customers", postCustomer);
router.put("/customers/:id", updateCustomer);
router.delete("/customers/:id", deleteCustomer);
router.get("/customers/:id", getCustomers);

export default router;
