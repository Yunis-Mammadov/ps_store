const express = require("express")
const register_router = express.Router()
const registerController = require("../controllers/register.controller")
const RegisterPostMiddleware = require("../middlewares/register.middleware")

register_router.post('/',RegisterPostMiddleware,registerController.post)

module.exports = register_router