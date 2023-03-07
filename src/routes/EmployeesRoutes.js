import { Router } from "express";
import {
  deleteEmployee,
  getEmployee,
  getEmployees,
  postEmployee,
  putEmployee
} from "../controllers/EmployeesController.js";

const router = Router();

/* Declaración de las rutas */
router.get('/employees', getEmployees);
router.post('/employees', postEmployee);
router.put('/employees/:id', putEmployee);
router.delete('/employees/:id', deleteEmployee)
router.get('/employees/:id', getEmployee)

export default router;