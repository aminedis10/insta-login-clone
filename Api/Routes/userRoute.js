const express = require("express");
const router = express.Router();
const userController = require("../controlers/userController");

router.post("/signup", userController.signup);
router.get("/", userController.getusers);
router.post("/login", userController.login);

module.exports = router;
