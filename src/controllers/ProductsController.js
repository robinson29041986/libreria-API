import { Categories, Products } from "../models/Associations.js";

/* Obtener todos los productos */
export const getProducts = async (req, res) => {
  try {
    /* Valores para la paginacion */

    const { page = 0, amount = 10 } = req.query;

    /* buscar todos los productos */

    const products = await Products.findAll({

      /* Opciones de paginacion */
      include: { model: Categories, as: 'category' },
      product: [['id', 'ASC']],
      limit: amount,
      offset: page * amount

    });

    res.json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* Obtener un solo Producto */
export const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Products.findOne({
      include: { model: Categories, as: 'category', where: { id } },
    });

    if (!product)
      return res.status(404).json({ message: "El Producto no existe" });

    res.json(product);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* Crear un Producto */
export const postProduct = async (req, res) => {

  const { name, description, autor, isbn, price, stock, category_id } = req.body;
  const image = req.file.filename;

  try {
    const newProduct = await Products.create({

      image,
      name,
      description,
      autor,
      isbn,
      price,
      stock,
      category_id
    });

    res.json(newProduct);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


/* Actualizar un Producto */
export const putProduct = async (req, res) => {
  const { id } = req.params;
  const image = req.file.filename;
  const { name, description, category_id, price, autor, isbn, stock } = req.body;

  try {
    const products = await Products.findByPk(id);
    products.image = image;
    products.name = name;
    products.description = description;
    products.category_id = category_id;
    products.price = price;
    products.autor = autor;
    products.isbn = isbn;
    products.stock = stock;
    await products.save();

    res.json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* Eliminar un Producto */
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
