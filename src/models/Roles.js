import { sequelize } from '../configs/Database.js';
import { DataTypes } from 'sequelize';
import { Users } from './Users.js';

export const Roles = sequelize.define('roles', {

  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    get() {
      const name = this.getDataValue('name');
      return name ? name.toUpperCase() : null;
    },
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
    updatedAt: 'updated_at'

  });

/* Relacion de los Roles a los  Usuario */
Roles.hasMany(Users, {
  foreignKey: {
    name: 'role_id',
    allowNull: false
  },
  sourceKey: 'id',
  onDelete: 'RESTRICT',
  onUpdate: 'CASCADE'
});

/* Relacion de los Roles de Usuario con los Roles */
Users.belongsTo(Roles, {
  foreignKey: 'role_id',
  targetId: 'id'
});