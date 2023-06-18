const express = require("express")
const mainGames_router = express.Router()
const mainGamesController = require("../controllers/mainGames.controller")
const mainGamesPostMiddleware = require("../middlewares/mainGames.middleware")


mainGames_router.get("/",mainGamesController.getAll)

mainGames_router.get("/:id",mainGamesController.getOne)

mainGames_router.delete("/:id",mainGamesController.delete)

mainGames_router.post("/",mainGamesPostMiddleware,mainGamesController.post)

mainGames_router.put("/:id",mainGamesController.edit)



module.exports = mainGames_router