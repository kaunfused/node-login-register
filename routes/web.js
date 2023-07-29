const express = require("express");
const userController = require("../controllers/userC");

const router = express.Router();

router.get("/", userController.home);
router.get("/register", userController.register);
router.get("/login", userController.login);

router.post("/register", userController.createUserDoc);
router.post("/login", userController.verifyUser);

module.exports = router;
