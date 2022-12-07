import { Roles } from "../models/Associations.js";

/* Obtener todos los rol */
export const getRoles = async (req, res) => {
  try {
    /* Valores para la paginacion */

    const { page = 0, amount = 10 } = req.query;

    /* buscar todos los rol
 */

    const rol = await Roles.findAll({

      /* Opciones de paginacion */

      product: [['id', 'ASC']],
      limit: amount,
      offset: page * amount

    });

    res.json(rol);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* Obtener un solo Rol */
export const getRole = async (req, res) => {
  try {
    const { id } = req.params;
    const role = await Roles.findOne({
      where: {
        id,
      },
    });

    if (!role)
      return res.status(404).json({ message: "El Rol no existe" });

    res.json(role);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* Crear un nuevo Rol */
export const postRole = async (req, res) => {
  const { name, description } = req.body;

  try {
    const newRole = await Roles.create({
      name,
      description
    });

    res.json(newRole);

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* Actualizar un Rol */
export const putRole = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;

  try {

    const role = await Roles.findByPk(id);

    role.name = name;
    role.description = description;

    await role.save();

    res.json(role);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* Eliminar un Rol */
export const deleteRole = async (req, res) => {
  try {
    const { id } = req.params;

    await Roles.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
