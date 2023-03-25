import { sequelize } from "../configs/Database.js";
import { DataTypes } from "sequelize";
import { Auth } from "../configs/Auth.js";
import bcrypt from 'bcrypt';

export const Users = sequelize.define('users', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  card: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: {
      args: true,
      msg: 'Esta persona ya esta registrada',
    },
    validate: {
      isInt: {
        args: [10, 15],
        msg: 'Debe introducir numeros en este campo'
      }
    }
  },
  name: {
    type: DataTypes.STRING,
    get() {
      const name = this.getDataValue('name');
      return name ? name.toUpperCase() : null;
    },
    allowNull: false,
    validate: {
      len: {
        args: [3, 50],
        msg: 'El nombre debe contener minimo 3 letras.'
      },
      is: {
        args: /^[A-Za-z0-9Á-ú ]+$/u,
        msg: 'El nombre solo admite letras',
      }
    }
  },
  birthday: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    validate: {
      isDate: {
        msg: 'el formato es similar a AAAA-MM-DD.'
      },
      isAfter: {
        args: '1940/01/01',
        msg: 'El rango de edad es Alto, Verifique nuevamente.'
      }
    }
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      max: {
        args: 255,
        msg: 'La direccion puede extender los 255 caracteres'
      },
      min: {
        args: '3',
        msg: 'La dirección debe contener minimo 3 caracteres'
      }
    }
  },
  cellphone: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      is: {
        args: /^[0-9 ]+$/u,
        msg: 'Solo se Admiten numeros'
      },
      len: {
        args: [0, 15],
        msg: 'El Numero de Telefono puede contener hasta 15 caracteres'
      }
    }
  },
  email: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: {
      args: true,
      msg: 'Error. el Correo que escribio ya esta registrado.',
    },
    validate: {
      isEmail: {
        msg: 'Digite un correo Electronico Válido'
      }
    }
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      len: {
        args: [8, 255],
        msg: 'La contraseña debe tener minimo 8 caracteres.'
      }
    },
  }
}, {
  /* Opciones De Sequelize */
  freezeTableName: true,
  timestamps: true,
  createdAt: "created_at",
  updatedAt: "updated_at",

  hooks: {
    beforeCreate: (user, options) => {
      user.password = bcrypt.hashSync(user.password, Number.parseInt(Auth.rounds));
    },

    beforeUpdate: (user, options) => {
      user.password = bcrypt.hashSync(user.password, Number.parseInt(Auth.rounds));
    },
  }
});
