import { Categories, Products } from "../models/Associations.js";
/* import multer from 'multer';
import path from 'path'; */

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

/* Crear un Producto */
export const postProduct = async (req, res) => {

  const { image, name, description, autor, isbn, price, stock, category_id } = req.body;

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

/* Configuracion de Almacenamiento
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname))
  }
});


Subida de Imagen
export const upload = multer({
  storage: storage,
  limits: { fileSize: '1000000' },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png/
    const mimeType = fileTypes.test(file.mimetype)
    const extname = fileTypes.test(path.extname(file.originalname))

    if (mimeType && extname) {
      return cb(null, true)
    }
    cb('Eliga un formato compatible de imagen para cargar.')
  }
}).single('image') */

/* Actualizar un Producto */
export const putProduct = async (req, res) => {
  const { id } = req.params;
  const { image, name, description, autor, isbn, price, stock, category_id } = req.body;

  try {
    const products = await Products.findByPk(id);
    products.image = image;
    products.name = name;
    products.description = description;
    products.autor = autor;
    products.isbn = isbn;
    products.price = price;
    products.stock = stock;
    products.category_id = category_id;
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
