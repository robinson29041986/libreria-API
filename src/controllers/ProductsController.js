import { Products } from "../models/Products.js";

/* Obtener todos los productos */

export const getProducts = async (req, res) => {
  try {
    /* Valores para la paginacion */

    const { page = 0, amount = 10 } = req.query;

    /* buscar todos los productos */

    const products = await Products.findAll({

      /* Opciones de paginacion */

      product: [['id', 'ASC']],
      limit: amount,
      offset: page * amount

    });

    res.json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Products.findOne({
      where: {
        id,
      },
    });

    if (!product)
      return res.status(404).json({ message: "El Producto no existe" });

    res.json(product);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const postProduct = async (req, res) => {
  const { name, description, price, categories_id } = req.body;

  try {
    const newProduct = await Products.create({
      name,
      description,
      price,
      categories_id,
    });

    res.json(newProduct);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const putProduct = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, category_id } = req.body;

  try {
    const products = await Products.findByPk(id);
    products.name = name;
    products.description = description;
    products.price = price;
    products.category_id = category_id;
    await products.save();

    res.json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    await Products.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
