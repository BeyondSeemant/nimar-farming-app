const express = require("express");
const router = express.Router();

const { getLiveMandi, getMandiOptions } = require("../controllers/mandiController");

router.get("/live", getLiveMandi);

router.get("/options", getMandiOptions);

module.exports = router;