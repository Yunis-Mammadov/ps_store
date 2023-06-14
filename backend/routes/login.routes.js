const express = require("express")
const login_router = express.Router()
const loginController = require("../controllers/login.contoller")
const LoginPostMiddleware = require("../middlewares/login.middleware")

login_router.post('/',LoginPostMiddleware,loginController.post)

module.exports = login_router