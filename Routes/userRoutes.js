const express = require("express");

const router = express.Router();

const {register} = require("../Controllers/register.js");
const {login} = require("../Controllers/login.js");


router.post("/register" , register);
router.post("/login" , login);


module.exports = router ;