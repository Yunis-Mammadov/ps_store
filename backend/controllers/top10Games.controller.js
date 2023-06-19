const top10GamesModel = require("../models/top10Games.model")

const top10GamesController = {
    getAll: async (req, res) => {
        const { name } = req.query
        const games = await top10GamesModel.find()
        if (!name) {
            res.status(200).send(games)
        } else {
            const searchedGames = games.filter((x) =>
                x.name.toLowerCase().trim().includes(name.toLowerCase().trim())
            )
            res.status(200).send(searchedGames)
        }
    },
    getOne: async (req, res) => {
        const { id } = req.params
        const games = await top10GamesModel.findById(id)
        res.status(200).send(games)
    },
    delete: async (req, res) => {
        const id = req.params.id
        const games = await top10GamesModel.findByIdAndDelete(id)
        res.status(203).send({
            message: `${games} deleted successfully!`
        })
    },
    post: async (req, res) => {
        const { imageURL  } = req.body
        const newGames = new top10GamesModel({
            imageURL: imageURL,
        })
        await newGames.save()
        res.status(201).send({
            message: `${newGames.name} posted successfully!`,
            games: newGames
        })
    },
    edit: async (req, res) => {
        const id = req.params.id
        const { name } = req.body
        const updatingGames = {
            imageURL: imageURL,
        }
        const games = await top10GamesModel.findByIdAndUpdate(id, updatingGames)
        res.status(200).send({
            message: `${games.name} update successfully!`,
        })
    }
}


module.exports = top10GamesController