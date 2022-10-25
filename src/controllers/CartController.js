import { Cart } from "../models/Cart.js";
import { CartItems } from "../models/CartItems.js";


/* Obtener todo el Contenido del carrito */

export const getCarts = async (req, res) => {
  try {

    /* Valores de la paginacion*/
    const { page = 0, amount = 10 } = req.query;

    /* Busqueda de todo el contenido del carrito */
    const cart = await Cart.findAll({

      /* opciones de paginacion */
      cart: [['id', 'ASC']],
      limit: amount,
      offset: page * amount
    });

    res.json(cart);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


export const getCart = async (req, res) => {
  try {
    const { id } = req.params;
    const cart = await Cart.findOne({
      where: {
        id,
      },
    });

    if (!category)
      return res.status(404).json({ message: "El Contenido del Carrito de Compras no existe" });

    res.json(cart);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const postCart = async (req, res) => {
  const { date, total_price, payment_id, customer_id, items } = req.body;

  try {
    const newCart = await Cart.create({
      date,
      total_price,
      payment_id,
      customer_id
    });

    items.forEach(v => { v.cart_id = newCart.id });


    const newCartItems = await CartItems.bulkCreate(items);

    res.json(newCart);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const putCart = async (req, res) => {
  const { id } = req.params;
  const { name, date, total_price } = req.body;

  try {
    const cart = await Cart.findByPk(id);
    cart.name = name;
    cart.date = date;
    cart.total_price = total_price; {

    }

    await cart.save();

    res.json(cart);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteCart = async (req, res) => {
  try {
    const { id } = req.params;

    await Cart.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
