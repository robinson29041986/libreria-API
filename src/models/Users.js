import { sequelize } from "../configs/Database.js";
import { DataTypes } from "sequelize";
import { Cart } from "./Cart.js";
import { SalesOrder } from "./SalesOrder.js";

export const Users = sequelize.define(
  'users',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING(50),
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
    last_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        len: {
          args: [3, 50],
          msg: 'El apellido debe tener minimo 3 caracteres.'
        },
        is: {
          args: /^[A-Za-z0-9Á-ú ]+$/u,
          msg: 'El apellido solo admite letras',
        }
      }
    },
    birthday: {
      type: DataTypes.DATEONLY,
      allowNull: false,
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
      allowNull: false,
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
      allowNull: false,
      validate: {
        is: {
          args: /^[0-9 ]+$/u,
          msg: 'Solo se Admten numeros'
        },
        max: {
          args: 15,
          msg: 'El Numero de Telefono puede contener 15 cracteres'
        }
      }
    },
    email: {
      type: DataTypes.TEXT(100),
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
      type: DataTypes.TEXT(50),
      allowNull: false,
      validate: {
        len: {
          args: [8, 50],
          msg: 'La contraseña debe tener minimo una longitud de 8 caracteres.'
        },
        is: {
          args: /^[A-Za-z0-9 ]+$/u,
          msg: 'La Contraseña debe contener como minimo una mayuscula, una minuscula, un numero y un caracter especial',
        },
      }
    },
  },

  {
    /* Opciones De Sequelize */

    freezeTableName: true,
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
);

/* Relacion Cliente al Carrito */
Users.hasMany(Cart, {
  /* Declaración de la asociación */
  foreignKey: {
    name: "user_id",
    allowNull: false,
  },
  sourceKey: "id",
  /* Acciones de actualización y borrado */
  onDelete: "RESTRICT",
  onUpdate: "CASCADE",
});

Cart.belongsTo(Users, {
  /* Declaración de la asociación */
  foreignKey: "user_id",
  targetId: "id",
});

Users.hasMany(SalesOrder, {
  foreignKey: {
    name: 'user_id',
    allowNull: false,
  },
  sourceKey: 'id',

  onDelete: 'RESTRICT',
  onUpdate: 'CASCADE',
});

SalesOrder.belongsTo(Users, {
  foreignKey: 'user_id',
  targetId: 'id'
});

