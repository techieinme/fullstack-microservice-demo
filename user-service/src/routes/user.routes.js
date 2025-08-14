const express = require("express");
const router = express.Router();
const { getAllUsers, createUser } = require("../controllers/user.controller");
const verifyToken = require("../middleware/verifyToken");

router.get("/", verifyToken,getAllUsers);
router.post("/", verifyToken, createUser);

module.exports = router;
