import { sequelize } from '../database/Database.js';
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
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
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