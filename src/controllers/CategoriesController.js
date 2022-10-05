import { Categories } from "../models/Categories.js";

export const getCategories = async (req, res) => {
  try {
    const categories = await Categories.findAll();
    res.json(categories);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Categories.findOne({
      where: {
        id,
      },
    });

    if (!category)
      return res.status(404).json({ message: "Category does nor exits" });

    res.json(category);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

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

export const updateCategory = async (req, res) => {
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
