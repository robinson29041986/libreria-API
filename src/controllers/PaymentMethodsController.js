import { PaymentMethods } from "../models/PaymentMethods.js";

export const getPayments = async (req, res) => {
  try {
    /* Valores para la paginacion */

    const { page = 0, amount = 10 } = req.query;

    /* buscar todos los metodos de pago */

    const paymentMethods = await PaymentMethods.findAll({

      /* Opciones de paginacion */

      product: [['id', 'ASC']],
      limit: amount,
      offset: page * amount

    });

    res.json(paymentMethods);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getPayment = async (req, res) => {
  try {
    const { id } = req.params;
    const paymentMethods = await PaymentMethods.findOne({
      where: {
        id,
      },
    });

    if (!paymentMethods)
      return res.status(404).json({ message: "El Metodo de Pago no existe" });

    res.json(paymentMethods);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const postPayment = async (req, res) => {
  const { name } = req.body;

  try {
    const newPaymentMethod = await PaymentMethods.create({
      name
    });

    res.json(newPaymentMethod);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const putPayment = async (req, res) => {
  const { id } = req.params;
  const { name, status } = req.body;

  try {
    const paymentMethod = await PaymentMethods.findByPk(id);
    paymentMethod.name = name;
    paymentMethod.status = status;

    await paymentMethod.save();

    res.json(paymentMethod);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deletePayment = async (req, res) => {
  try {
    const { id } = req.params;

    await PaymentMethods.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
