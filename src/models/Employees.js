import { sequelize } from '../configs/Database.js';
import { DataTypes } from 'sequelize';
import { Auth } from "../configs/Auth.js";
import bcrypt from "bcrypt";

export const Employees = sequelize.define('employees', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [3, 255],
        msg: 'El nombre debe tener mínimo tres letras.'
      },
      is: {
        args: /^[A-Za-zÁ-ú ]+$/u,
        msg: 'Introduzca únicamente letras para el nombre.'
      }
    }
  },
  email: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: {
      args: true,
      msg: 'Uups. Este correo ya se encuentra registrado.',
    },
    validate: {
      isEmail: {
        msg: 'Solo se admiten correos válidos.'
      },
      max: {
        args: 100,
        msg: 'Solo se admiten hasta 100 carácteres'
      }
    }
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      len: {
        args: [8, 255],
        msg: 'La contraseña debe tener minimo 8 carácteres.'
      }
    }
  }
}, {
  /* Personalización del timestamps */
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',

  /* Encripta la contraseña al crear y actualizar */
  hooks: {
    beforeCreate: (employees, options) => {
      employees.password = bcrypt.hashSync(employees.password, Number.parseInt(Auth.rounds));
    },
    beforeUpdate: (employees, options) => {
      employees.password = bcrypt.hashSync(employees.password, Number.parseInt(Auth.rounds));
    }
  }
});