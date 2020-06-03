var express = require('express');

var router = express.Router();

var auth = require("../middleware/auth");

var userController = require("../controller/userController");

// Routes for Auth anf login and signup
router.post("/register", userController.register);

router.post("/login", userController.login);

router.get("/user", auth, userController.getUser);

router.get('/allusers',userController.allUsers)

module.exports = router;
