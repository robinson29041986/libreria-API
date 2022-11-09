import { Users } from "../models/Users.js";
import { Roles } from "../models/Roles.js";
import { Auth } from "../configs/Auth.js";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';

/* Verificar los datos para acceder */

export const signIn = async (req, res) => {
  const { email, password } = req.body;
  try {

    /* Busqueda de Email del Usuario */
    const user = await Users.findOne({
      where: { email }
    });

    if (!user) {
      /* El Usuario no esta registrado */
      return res.status(404).json({ message: 'El email no es correcto' });
    } else {

      if (await bcrypt.compare(password, user.password)) {

        /* Token Creado Para iniciar sesion */
        const token = jwt.sign({ user: user }, Auth.secret, { expiresIn: '1d' });

        /* Se Devuelve en Token */

        res.json({
          user: user.first_name,
          token: token
        });

      } else {

        return res.status(403).json({ message: 'La contraseña no es Valida' });
      }
    }

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* Un Usuario nuevo se Registra */

export const signUp = async (req, res) => {

  const { id_number, first_name, last_name, birthday, cellphone, address, email, password } = req.body;

  try {

    const roleUser = await Roles.findOne({
      where:
      {
        name: 'Customer'
      }

    });

    if (!roleUser) {

      res.status(404).json({ message: 'No se puede asignar el Rol' });
    } else {

      const newUser = await Users.create({
        id_number,
        first_name,
        last_name,
        birthday,
        cellphone,
        address,
        email,
        password,
        role_id: roleUser.id
      });

      res.json(newUser);

    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};