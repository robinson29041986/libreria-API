import { sequelize } from '../configs/Database.js';
import { DataTypes } from 'sequelize';

export const Roles = sequelize.define('roles', {

  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      args: true,
      msg: 'Error. Ya hay un Rol con ese nombre.'
    },
    validate: {
      len: {
        args: [3, 255],
        msg: 'El nombre debe contener solo letras.'
      },
      is: {
        args: /^[A-Za-zÁ-ú-ü ]+$/u,
        msg: 'El nombre solo admite letras',
      }
    }
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [3, 255],
        msg: 'El descripcion puede contener hasta 255 caracteres.'
      }
    }
  }
},
  {
    /* Personalización del timestamps */

    freezeTableName: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',

    hooks: {
      afterCreate: async (roles, options) => {
        if (roles.name === 'Administrador') {
          const mainRoles = await Roles.create(
            {
              name: 'customer',
              description: 'Acceso a la aplicacion de Ventas'
            }
          );
        }
      }
    }

  });