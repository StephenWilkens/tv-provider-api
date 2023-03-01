const { provider_package } = require("../../models");

const getAllPackages = async (req, res) => {
  try {
    const packages = await provider_package.findAll();
    return res.status(200).json({
      packages,
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllPackages
}