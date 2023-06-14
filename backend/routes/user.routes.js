const express = require("express")
const user_router = express.Router()
const userController = require("../controllers/user.contoller");

user_router.get("/", userController.getAll);


module.exports = user_router