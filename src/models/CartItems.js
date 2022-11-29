import { sequelize } from '../configs/Database.js';
import { DataTypes } from 'sequelize';

export const CartItems = sequelize.define('cart_item', {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isInt: {
        args: true,
        msg: 'Debe introducir solo numeros'
      },
      min: {
        args: 1,
        msg: 'el Valor minimo es uno'
      }
    }
  },
  unit_price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    validate: {
      isNumeric: {
        args: true,
        msg: 'Solo se admiten numeros.'
      }
    }
  },
  subtotal: {
    type: DataTypes.VIRTUAL,
    get() {
      return this.getDataValue('unit_price') * this.getDataValue('quantity');
    }
  }
}, {
  /* Personalización del timestamps */
  timestamps: false,
  freezeTableName: true,

  /*   hooks: {
      afterBulkCreate: (cart_item) => {
  
        cart_item.map(async (item) => {
           Se Guarda el id del producto y la cantidad 
          const id = item.product_id;
          const quantity = item.quantity;
  
          const product = await Products.findByPk(id);
  
          product.stock = product.stock - quantity;
          product.save()
        });
      },
    } */
});

CartItems.removeAttribute('id');