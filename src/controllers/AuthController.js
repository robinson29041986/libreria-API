import { Roles, Users } from "../models/Associations.js";
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
      return res.status(400).json({ message: 'El email no es correcto' });
    } else {

      if (await bcrypt.compare(password, user.password)) {

        /* Token Creado Para iniciar sesion */
        const token = jwt.sign({ user: user }, Auth.secret, { expiresIn: '7d' });

        /* Se Devuelve en Token */

        res.json({
          email: user.email,
          password: password,
          token: token
        });

      } else {

        return res.status(400).json({ message: 'La contraseña no es Valida' });
      }
    }

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* Un Usuario nuevo se Registra */

export const signUp = async (req, res) => {

  const { card, name, email, password } = req.body;

  try {

    const [role, created] = await Roles.findOrCreate({
      where:
      {
        name: 'Administrador',
        description: 'Acceso a todas la funciones del sistema'
      }

    });

    if (!created) {

      const newUser = await Users.create({
        name,
        card,
        email,
        password,
        role_id: 2
      });

      res.json(newUser);
    } else {

      const newAdmin = await Users.create({
        name,
        card,
        email,
        password,
        role_id: role.id
      });

      res.json(newAdmin);

    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};