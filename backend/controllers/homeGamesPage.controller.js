const homeGamesModel = require("../models/homePageGames.model")

const homeGamesController = {
    getAll: async (req, res) => {
        const { name } = req.query
        const games = await homeGamesModel.find()
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
        const games = await homeGamesModel.findById(id)
        res.status(200).send(games)
    },
    delete: async (req, res) => {
        const id = req.params.id
        const games = await homeGamesModel.findByIdAndDelete(id)
        res.status(203).send({
            message: `${games} deleted successfully!`
        })
    },
    post: async (req, res) => {
        const { name, price, country, year, imageURL, platform, genre, language, coop, vibration } = req.body
        const newGames = new homeGamesModel({
            name: name,
            price: price,
            country: country,
            year: year,
            imageURL: imageURL,
            platform: platform,
            genre: genre,
            language: language,
            coop: coop,
            vibration: vibration
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
            name: name,
            price: price,
            country: country,
            year: year,
            imageURL: imageURL,
            platform: platform,
            genre: genre,
            language: language,
            coop: coop,
            vibration: vibration
        }
        const games = await homeGamesModel.findByIdAndUpdate(id, updatingGames)
        res.status(200).send({
            message: `${games.name} update successfully!`,
        })
    }
}


module.exports = homeGamesController