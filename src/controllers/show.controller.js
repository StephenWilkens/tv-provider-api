const { show } = require("../../models");

const getAllShows = async (req, res) => {
  try {
    const shows = await show.findAll();
    return res.status(200).json({
      shows,
    });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

module.exports = {
  getAllShows
}