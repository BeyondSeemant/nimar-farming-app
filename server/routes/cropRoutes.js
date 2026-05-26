const express = require("express");
const router = express.Router();

const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage });

const { getCrops, addCrop, updateCrop, deleteCrop } = require("../controllers/cropController");

// GET
router.get("/", getCrops);

// POST
router.post("/", addCrop);

// UPDATE
router.put("/:id", updateCrop);

// DELETE
router.delete("/:id", deleteCrop);

// AI Crop Diagnose (Image Upload)
const axios = require("axios");
const FormData = require("form-data");

router.post("/crop-diagnose", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No image uploaded" });
    }

    const formData = new FormData();

    formData.append("file", req.file.buffer, req.file.originalname);

    const response = await axios.post(
      "http://localhost:8000/predict",
      formData,
      {
        headers: formData.getHeaders(),
        timeout: 30000, // 30 sec
      }
    );

    console.log("PYTHON RESPONSE:", response.data);

    res.json(response.data);

  } catch (err) {
    console.error("FULL ERROR:", err.response?.data || err.message);
    res.status(500).json({ error: "AI failed" });
  }
});

module.exports = router;