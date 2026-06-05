const Crop = require("../models/Crop");

// GET all crops
exports.getCrops = async (req, res) => {
  try {
    const crops = await crops.find();
    res.json(crops);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ADD new crop
exports.addCrop = async (req, res) => {
  try {
    const { name, season, price } = req.body;

    if (!name || !season || !price) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const crop = new Crop({ name, season, price });
    const savedCrop = await crop.save();
    res.status(201).json(savedCrop);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

/**
 * UPDATE crop
 */
exports.updateCrop = async (req, res) => {
  try {
    const updatedCrop = await Crop.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedCrop) {
      return res.status(404).json({ message: "Crop not found" });
    }

    res.json(updatedCrop);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

/**
 * DELETE crop
 */
exports.deleteCrop = async (req, res) => {
  try {
    const deletedCrop = await Crop.findByIdAndDelete(req.params.id);

    if (!deletedCrop) {
      return res.status(404).json({ message: "Crop not found" });
    }

    res.json({ message: "Crop deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
