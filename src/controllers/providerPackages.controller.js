const { providerPackage } = require("../../models");
const { network } = require("../../models")

const getAllPackages = async (req, res) => {
  try {
    const packages = await providerPackage.findAll();
    return res.status(200).json({
      packages,
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const getPackage = async (req, res) => {
  try {
    const { id } = req.params;
    const foundPackage = await providerPackage.findByPk(id, {
      include: [
        {
          model: network,
          as: "networks",
          attributes: ["id", "title"],
          through: {
            attributes: [],
          },
        },
      ],
    })
    return res.status(200).json({
      foundPackage,
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const createPackage = async (req, res) => {
  try {
    const newPackage = await providerPackage.create(req.body);
    return res.status(201).json({
      newPackage,
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const updatePackage = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await providerPackage.update(req.body, {
      where: { id: id },
    });
    if (updated) {
      const updatedPackage = await providerPackage.findOne({
        where: { id: id },
      });
      return res.status(200).json({ providerPackage: updatedPackage });
    }
    throw new Error("Package not found");
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const deletePackage = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPackage = await providerPackage.destroy({
      where: { id: id },
    });
    if (deletePackage) {
      return res.status(204).send("Package deleted");
    }
    throw new Error("Package not found");
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

module.exports = {
  getAllPackages,
  getPackage,
  createPackage,
  updatePackage,
  deletePackage
};
