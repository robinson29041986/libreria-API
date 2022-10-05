import { Customers } from "../models/Customers.js";

export const getCustomers = async (req, res) => {
  try {
    const customers = await Customers.findAll();
    res.json(customers);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await Customers.findOne({
      where: {
        id,
      },
    });

    if (!customer)
      return res.status(404).json({ message: "Customer does nor exits" });

    res.json(customer);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const postCustomer = async (req, res) => {
  const { name, last_name, birthday, cellphone, email, password } = req.body;

  try {
    const newCostumer = await Customers.create({
      name,
      last_name,
      birthday,
      cellphone,
      email,
      password,
    });

    res.json(newCostumer);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateCustomer = async (req, res) => {
  const { id } = req.params;
  const { name, last_name, birthday, cellphone, email, password } = req.body;

  try {
    const customer = await Customers.findByPk(id);
    customer.name = name;
    customer.last_name = last_name;
    customer.birthday = birthday;
    customer.cellphone = cellphone;
    customer.email = email;
    customer.password = password;
    await customer.save();

    res.json(customer);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteCustomer = async (req, res) => {
  try {
    const { id } = req.params;

    await Customers.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
