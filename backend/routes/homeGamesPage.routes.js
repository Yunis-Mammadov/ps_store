const express = require("express")
const homeGames_router = express.Router()
const homeGamesController = require("../controllers/homeGamesPage.controller")
const gamesPostMiddleware = require("../middlewares/homeGamesPage.middleware")


homeGames_router.get("/",homeGamesController.getAll)

homeGames_router.get("/:id",homeGamesController.getOne)

homeGames_router.delete("/:id",homeGamesController.delete)

homeGames_router.post("/",gamesPostMiddleware,homeGamesController.post)

homeGames_router.put("/:id",homeGamesController.edit)



module.exports = homeGames_router