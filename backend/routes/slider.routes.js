const express = require("express")
const slider_router = express.Router()
const sliderController = require("../controllers/slider.controller")
const sliderPostMiddleware = require("../middlewares/slider.middleware")


slider_router.get("/",sliderController.getAll)

slider_router.get("/:id",sliderController.getOne)

slider_router.delete("/:id",sliderController.delete)

slider_router.post("/",sliderPostMiddleware,sliderController.post)

slider_router.put("/:id",sliderController.edit)



module.exports = slider_router