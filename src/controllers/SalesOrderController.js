import { SalesOrder } from '../models/SalesOrder.js';

export const getSalesOrder = async (req, res) => {
  try {
    const salesOrder = await SalesOrder.findAll();

    res.json(salesOrder);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getSaleOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const saleOrder = await SalesOrder.findOne({
      where: {
        id,
      },
    });

    if (!saleOrder)
      return res.status(404).json({ message: "SaleOrder does nor exits" });

    res.json(saleOrder);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const postSaleOrder = async (req, res) => {
  const { id } = req.body;

  try {
    const newsaleOrder = await SalesOrder.create({
      id
    });

    res.json(newsaleOrder);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const putSaleOrder = async (req, res) => {
  const { id } = req.params;
  const { card_id } = req.body;

  try {
    const saleOrder = await SalesOrder.findByPk(id);
    saleOrder.card_id = card_id;
    await saleOrder.save();

    res.json(saleOrder);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteSaleOrder = async (req, res) => {
  try {
    const { id } = req.params;

    await SalesOrder.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};