
import jwt from 'jsonwebtoken';
import { Auth } from "../configs/Auth.js";
import { Roles } from "../models/Roles.js";

export const checkToken = (req, res, next) => {
  if (req.headers.authorization) {

    const token = req.headers.authorization.split(' ')[1];

    jwt.verify(token, Auth.secret, (err, decoded) => {

      if (err) {

        res.status(500).json({ message: 'Token Validado con Error', err });

      } else {

        req.user = decoded.user
        next();
      }
    });

  } else {
    return res.status(401).json({ message: 'Acceso Denegado' })
  }

}

export const CheckPolicy = async (req, res, next) => {

  const role = await Roles.findByPk(req.user.role_id, { attributes: ['name'] });

  if (role.name === 'Administardor') {

    next();

  } else {

    res.status(401).json({ message: 'Acceso no Autorizado' })

  }
}