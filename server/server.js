const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const axios = require("axios");
const multer = require("multer");
const FormData = require("form-data");
const fs = require("fs");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Multer setup for file uploads
const upload = multer({ dest: "uploads/" });

app.get("/", (req, res) => {
    res.send("Server is working");
  });

// Routes
const cropRoutes = require("./routes/cropRoutes");
app.use("/api/crops", cropRoutes);

const mandiRoutes = require("./routes/mandiRoutes");
app.use("/api/mandi", mandiRoutes);

// AI Crop Doctor Proxy Route
app.post("/api/diagnose", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No image provided" });
    }

    // Create form-data to send to FastAPI
    const formData = new FormData();
    formData.append("file", fs.createReadStream(req.file.path));

    const response = await axios.post("http://127.0.0.1:8000/predict", formData, {
      headers: formData.getHeaders()
    });

    // Delete temp file after sending
    fs.unlinkSync(req.file.path);

    res.json(response.data);

  } catch (error) {
    console.error("AI ERROR:", error.message);
    res.status(500).json({ error: "AI service failed" });
  }
});

// Database Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Server Start
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});