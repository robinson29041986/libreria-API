import { Products } from "../models/Products.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Products.findAll();

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
      return res.status(404).json({ message: "Product does nor exits" });

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

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, categories_id } = req.body;

  try {
    const products = await Products.findByPk(id);
    products.name = name;
    products.description = description;
    products.price = price;
    products.categories_id = categories_id;
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
