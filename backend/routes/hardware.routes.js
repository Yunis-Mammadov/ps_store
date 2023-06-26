const express = require("express")
const hardware_router = express.Router()
const hardwareController = require("../controllers/hardware.controller")
const hardwarePostMiddleware = require("../middlewares/hardware.middleware")


hardware_router.get("/",hardwareController.getAll)

hardware_router.get("/:id",hardwareController.getOne)

hardware_router.delete("/:id",hardwareController.delete)

hardware_router.post("/",hardwarePostMiddleware,hardwareController.post)

hardware_router.put("/:id",hardwareController.edit)



module.exports = hardware_router