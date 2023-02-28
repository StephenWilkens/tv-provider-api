const { network } = require("../../models");

const getAllNetworks = async (req, res) => {
  try {
    const networks = await network.findAll();
    return res.status(201).json({
      networks,
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// const getNetwork = async (req, res) => {
//   try {
//     const {id} = req.params
//     const 
//   }
// }
module.exports = {
  getAllNetworks,
};
