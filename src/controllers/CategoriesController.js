import { Categories } from "../models/Categories.js";
import { Products } from "../models/Products.js";

/* Obtener todas laas categorias */
export const getCategories = async (req, res) => {
  try {
    /* Valores para la paginacion */

    const { page = 0, amount = 10 } = req.query;

    /* buscar todos los usuarios */

    const categories = await Categories.findAll({

      /* Opciones de paginacion */

      user: [['id', 'ASC']],
      limit: amount,
      offset: page * amount

    });

    res.json(categories);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* Obtener una Categoria */
export const getCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Categories.findOne({
      where: {
        id,
      },
    });

    if (!category)
      return res.status(404).json({ message: "La Categoria no existe" });

    res.json(category);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* Crear una Categoria */
export const postCategory = async (req, res) => {
  const { name, description } = req.body;

  try {
    const newCategory = await Categories.create({
      name,
      description,
    });

    res.json(newCategory);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* Actualizar una Categoria */
export const putCategory = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;

  try {
    const categories = await Categories.findByPk(id);
    categories.name = name;
    categories.description = description;

    await categories.save();

    res.json(categories);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* Borrar una Categoria */
export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    await Categories.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* Obtener todo los Productos de una Categoria */
export const getCategoriesProducts = async (req, res) => {
  const { id } = req.params
  const products = await Products.findAll({
    where: { category_id: id }
  });
  res.json(products);
};
