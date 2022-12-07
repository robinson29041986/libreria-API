import { SalesOrder } from "../models/Associations.js";


/* Obtener todas las Ordenes de Venta */
export const getSalesOrder = async (req, res) => {
  try {
    /* Valores para la paginacion */

    const { page = 0, amount = 10 } = req.query;

    /* buscar todas las ordenes de Venta */

    const salesOrder = await SalesOrder.findAll({

      /* Opciones de paginacion */

      product: [['id', 'ASC']],
      limit: amount,
      offset: page * amount

    });

    res.json(salesOrder);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* Obtener una Orden de Venta */
export const getSaleOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const saleOrder = await SalesOrder.findOne({
      where: {
        id,
      },
    });

    if (!saleOrder)
      return res.status(404).json({ message: "La orden de Venta no existe" });

    res.json(saleOrder);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* Crear una Orden de Venta */
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

/* Actualizar una Orden de Venta */
export const putSaleOrder = async (req, res) => {
  const { id } = req.params;
  const { card_id, user_id } = req.body;

  try {
    const saleOrder = await SalesOrder.findByPk(id);
    saleOrder.card_id = card_id;
    saleOrder.user_id = user_id;

    await saleOrder.save();

    res.json(saleOrder);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* Eliminar una Orden de Venta */
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