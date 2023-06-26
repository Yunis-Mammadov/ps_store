const express = require("express")
const login_router = express.Router()
const loginController = require("../controllers/login.controller")


login_router.post('/',loginController.post)


module.exports = login_router