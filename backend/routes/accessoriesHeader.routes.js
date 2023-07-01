const express = require("express")
const accessoriesHeader_router = express.Router()
const accessoriesHeaderController = require("../controllers/accessoriesHeader.controller")
const AccessoriesHeaderPostMiddleware = require("../middlewares/accessoriesHeader.middleware")


accessoriesHeader_router.get("/",accessoriesHeaderController.getAll)

accessoriesHeader_router.get("/:id",accessoriesHeaderController.getOne)

accessoriesHeader_router.delete("/:id",accessoriesHeaderController.delete)

accessoriesHeader_router.post("/",AccessoriesHeaderPostMiddleware,accessoriesHeaderController.post)

accessoriesHeader_router.put("/:id",accessoriesHeaderController.edit)



module.exports = accessoriesHeader_router