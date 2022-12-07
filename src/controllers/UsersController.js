import { Users } from "../models/Associations.js";

/* Obtener todos los usuarios */
export const getUsers = async (req, res) => {

  try {
    /* Valores para la paginacion */

    const { page = 0, amount = 10 } = req.query;

    /* buscar todos los usuarios */

    const users = await Users.findAll({

      /* Opciones de paginacion */

      user: [['id', 'ASC']],
      limit: amount,
      offset: page * amount

    });

    res.json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* Obtener un solo Usuario */
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.findOne({
      where: {
        id
      },
    });

    if (!user)
      return res.status(404).json({ message: "El Usuario no existe" });

    res.json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* Crear un Nuevo Usuario */
export const postUser = async (req, res) => {

  try {

    const { id_number, first_name, last_name, birthday, cellphone, address, email, password, role_id } = req.body;

    const newUser = await Users.create({
      id_number,
      first_name,
      last_name,
      birthday,
      cellphone,
      address,
      email,
      password,
      role_id
    });

    res.json(newUser);

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* Actualizar a un Usuario */
export const putUser = async (req, res) => {

  try {
    const { id } = req.params;
    const { id_number, first_name, last_name, birthday, cellphone, address, email, password, role_id } = req.body;

    const user = await Users.findByPk(id);
    user.id_number = id_number
    user.first_name = first_name;
    user.last_name = last_name;
    user.birthday = birthday;
    user.cellphone = cellphone;
    user.address = address;
    user.email = email;
    user.role_id = role_id;
    user.password = password;

    await user.save();

    res.json(user);

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* Eliminar a un Usuario */
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    await Users.destroy({
      where: {
        id,
      },
    });


    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
