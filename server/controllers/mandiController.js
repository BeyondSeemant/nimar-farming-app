const { getMandiData, getMandiOptions: getMandiOptionsService } = require("../services/mandiServices");

exports.getLiveMandi = async (req, res) => {
  try {
    const { crop, district, state } = req.query;

    if (!crop || !district || !state) {
      return res.status(400).json({
        message: "state, crop and district required",
      });
    }

    const result = await getMandiData(crop, district, state);

    res.json(result);
  } catch (err) {
    res.status(500).json({
      message: "Server error",
      error: err.message,
    });
  }
};

exports.getMandiOptions = async (req, res) => {
  try {
    const { state } = req.query;
    const result = await getMandiOptionsService(state);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({
      message: "Failed to fetch mandi options",
      error: err.message,
    });
  }
};