const express = require("express")
const Category_router = express.Router()
const CategoryController = require("../controllers/categories.controller")
const CategoryPostMiddleware = require("../middlewares/categories.middleware")


Category_router.get("/",CategoryController.getAll)

Category_router.get("/:id",CategoryController.getOne)

Category_router.delete("/:id",CategoryController.delete)

Category_router.post("/",CategoryPostMiddleware,CategoryController.post)

Category_router.put("/:id",CategoryController.edit)



module.exports = Category_router