const express = require("express");
const router = express.Router({ mergeParams: true });
const authRoutes = require("./authRoutes");

router.use("/auth", authRoutes);

module.exports = router;
