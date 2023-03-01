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

module.exports = {
  getAllNetworks,
  getNetwork,
};
