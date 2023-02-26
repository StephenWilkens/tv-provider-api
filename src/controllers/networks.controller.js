const { Network } = require("../../models");

const getAllNetworks = async (req, res) => {
  try {
    const networks = await Network.findAll();
    return res.status(201).json({
      networks,
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllNetworks,
};
