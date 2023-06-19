const express = require("express")
const top10Games_router = express.Router()
const top10GamesController = require("../controllers/top10Games.controller")
const top10GamesPostMiddleware = require("../middlewares/top10Games.middleware")


top10Games_router.get("/",top10GamesController.getAll)

top10Games_router.get("/:id",top10GamesController.getOne)

top10Games_router.delete("/:id",top10GamesController.delete)

top10Games_router.post("/",top10GamesPostMiddleware,top10GamesController.post)

top10Games_router.put("/:id",top10GamesController.edit)



module.exports = top10Games_router