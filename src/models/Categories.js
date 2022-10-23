import { sequelize } from '../configs/Database.js';
import { DataTypes } from 'sequelize';
import { Catalogs } from './Catalogs.js';

export const Categories = sequelize.define('category', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: {
      args: true,
      msg: 'Error. Ya hay una categoria con ese nombre.'
    },
    validate: {
      len: {
        args: [3, 50],
        msg: 'El nombre debe contener minimo 3 letras.'
      },
      is: {
        args: /^[A-Za-z0-9Á-ú-ü ]+$/u,
        msg: 'No se admiten caracteres especiales',
      }
    }
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      max: {
        args: 255,
        msg: 'La descripcion debe tener 255 caracteres.'
      },
    }
  }
}, {
  /* Personalización del timestamps */

  freezeTableName: true,
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

/* Relacion de la Categoria con el Catalogo */
Categories.hasMany(Catalogs, {
  foreignKey: {
    name: 'category_id',
    allowNull: false
  },
  sourceKey: 'id',
  onDelete: 'NO ACTION',
  onUpdate: 'CASCADE'
});

Catalogs.belongsTo(Categories, {
  foreignKey: 'category_id',
  targetId: 'id'
});