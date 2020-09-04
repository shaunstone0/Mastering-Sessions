const express = require("express");
// const { protect, authorize } = require('../middleware/auth');
const { register } = require("../controllers/auth/register");
const { login } = require("../controllers/auth/login");
const { logout } = require("../controllers/auth/logout");
const { checkSession } = require("../controllers/auth/checkSession");

const router = express.Router();

// Register User
router.post("/register", register);
router.post("/login", login);
router.delete("/logout", logout);
router.get("/session", checkSession);
module.exports = router;
