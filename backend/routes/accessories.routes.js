const express = require("express")
const accessories_router = express.Router()
const accessoriesController = require("../controllers/accessories.controller")
const accessoriesPostMiddleware = require("../middlewares/accessories.middleware")


accessories_router.get("/",accessoriesController.getAll)

accessories_router.get("/:id",accessoriesController.getOne)

accessories_router.delete("/:id",accessoriesController.delete)

accessories_router.post("/",accessoriesPostMiddleware,accessoriesController.post)

accessories_router.put("/:id",accessoriesController.edit)



module.exports = accessories_router