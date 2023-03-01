const { network } = require("../../models");

const getAllNetworks = async (req, res) => {
  try {
    const networks = await network.findAll();
    return res.status(200).json({
      networks,
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const getNetwork = async (req, res) => {
  try {
    const { id } = req.params;
    const foundNetwork = await network.findOne({
      where: { id: id },
    });
    return res.status(200).json({
      foundNetwork,
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const createNetwork = async (req, res) => {
  try {
    const newNetwork = await network.create(req.body);
    return res.status(201).json({
      newNetwork,
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const updateNetwork = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await network.update(req.body, {
      where: { id: id },
    });
    if (updated) {
      const updatedNetwork = await network.findOne({ where: { id: id } });
      return res.status(200).json({ network: updatedNetwork });
    }
    throw new Error("Network not found");
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const deleteNetwork = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedNetwork = await network.destroy({
      where: { id: id },
    });
    if (deletedNetwork) {
      return res.status(204).send("Network deleted");
    }
    throw new Error("User not found");
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

module.exports = {
  getAllNetworks,
  getNetwork,
  createNetwork,
  updateNetwork,
  deleteNetwork,
};
