import { Employees, Roles } from "../models/Associations.js";

/* Obtiene todos los empleados */
export const getEmployees = async (req, res) => {
  try {
    /* Valores para la paginación */
    const { page = 0, amount = 100 } = req.query;

    /* Busca todos los empleados */
    const employees = await Employees.findAll({
      include: { model: Roles, as: 'role' },
      order: [['id', 'ASC']],
      limit: amount,
      offset: page * amount
    });
    res.json(employees);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* Obtiene un solo empleado */
export const getEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employees.findOne({
      where: { id }
    });

    if (!employee) return res.status(404).json({ message: 'El empleado no existe.' })

    res.json(employee);
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
};

/* Crea un nuevo empleado*/
export const postEmployee = async (req, res) => {
  const { id_card, name, email, password, role_id } = req.body;

  try {
    const newEmployee = await Employees.create({
      id_card,
      name,
      email,
      password,
      role_id
    });

    res.json(newEmployee);

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
};

/* Actualiza un empleado */
export const putEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password, role_id } = req.body;

    const employee = await Employees.findByPk(id);
    employee.name = name;
    employee.email = email;
    employee.password = password;
    employee.role_id = role_id;

    await employee.save();
    res.json(employee);

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
};

/* Elimina un empleado */
export const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    await Employees.destroy({
      where: { id }
    });

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }

};