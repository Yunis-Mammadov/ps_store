const express = require("express")
const hardwareVideo_router = express.Router()
const hardwareVideoController = require("../controllers/hardwareVideo.controller")
const hardwarePostMiddleware = require("../middlewares/hardwareVideo.middleware")


hardwareVideo_router.get("/",hardwareVideoController.getAll)

hardwareVideo_router.get("/:id",hardwareVideoController.getOne)

hardwareVideo_router.delete("/:id",hardwareVideoController.delete)

hardwareVideo_router.post("/",hardwarePostMiddleware,hardwareVideoController.post)

hardwareVideo_router.put("/:id",hardwareVideoController.edit)



module.exports = hardwareVideo_router