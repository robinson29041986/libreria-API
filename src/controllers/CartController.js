import { Cart } from "../models/Cart.js";
import { } from "../models/CartItems.js";

export const getCarts = async (req, res) => {
  try {
    const carts = await Cart.findAll();
    res.json(carts);
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
      return res.status(404).json({ message: "Cart does nor exits" });

    res.json(cart);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const postCart = async (req, res) => {
  const { name, date, total_price } = req.body;

  try {
    const newCart = await Cart.create({
      name,
      date,
      total_price
    });

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
