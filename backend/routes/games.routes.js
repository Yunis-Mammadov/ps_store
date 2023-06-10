const express = require("express")
const games_router = express.Router()
const gamesController = require("../controllers/games.controller")
const gamesPostMiddleware = require("../middlewares/games.middleware")


games_router.get("/",gamesController.getAll)

games_router.get("/:id",gamesController.getOne)

games_router.delete("/:id",gamesController.delete)

games_router.post("/",gamesPostMiddleware,gamesController.post)

games_router.put("/:id",gamesController.edit)



module.exports = games_router