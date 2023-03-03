const { show } = require("../../models");
const { network } = require("../../models");

const getAllShows = async (req, res) => {
  try {
    const shows = await show.findAll();
    return res.status(200).json({
      shows,
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const getShow = async (req, res) => {
  try {
    const { id } = req.params;
    const foundShow = await show.findOne({
      where: { id: id },
    });
    return res.status(200).json({
      foundShow,
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const createShow = async (req, res) => {
  try {
    const { id } = req.params;
    const foundNetwork = await network.findOne({
      where: { id: id },
    });
    const newShow = await foundNetwork.createShow(req.body);
    return res.status(201).json({
      newShow,
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllShows,
  getShow,
  createShow
};
