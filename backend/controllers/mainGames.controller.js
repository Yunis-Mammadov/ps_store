const mainGamesModel = require("../models/mainGames.model");

const mainGamesController = {
    getAll: async (req, res) => {
        const { name } = req.query;
        const games = await mainGamesModel.find();
        if (!name) {
            res.status(200).send(games);
        } else {
            const searchedGames = games.filter((x) =>
                x.name.toLowerCase().trim().includes(name.toLowerCase().trim())
            );
            res.status(200).send(searchedGames);
        }
    },
    getOne: async (req, res) => {
        const { id } = req.params;
        const games = await mainGamesModel.findById(id);
        res.status(200).send(games);
    },
    delete: async (req, res) => {
        const id = req.params.id;
        const games = await mainGamesModel.findByIdAndDelete(id);
        res.status(203).send({
            message: `${games.name} deleted successfully!`
        });
    },
    post: async (req, res) => {
        const {
            name,
            price,
            country,
            year,
            imageURL,
            platform,
            genre,
            language,
            backgroundImage,
            voice,
            release,
            publisher,
            info

        } = req.body;
        const newGames = new mainGamesModel({
            name: name,
            price: price,
            country: country,
            year: year,
            imageURL: imageURL,
            platform: platform,
            genre: genre,
            language: language,
            backgroundImage: backgroundImage,
            voice: voice,
            release: release,
            publisher: publisher,
            info: info
        });
        await newGames.save();
        res.status(201).send({
            message: `${newGames.name} posted successfully!`,
            games: newGames
        });
    },
    edit: async function updateMainGame(req, res) {
        try {
            const id = req.params.id;
            const {
                name,
                price,
                country,
                year,
                imageURL,
                platform,
                genre,
                language,
                backgroundImage,
                voice,
                release,
                publisher,
                info
            } = req.body;

            const updatingGames = {
                name,
                price,
                country,
                year,
                imageURL,
                platform,
                genre,
                language,
                backgroundImage,
                voice,
                release,
                publisher,
                info
            };

            const games = await mainGamesModel.findByIdAndUpdate(
                id,
                updatingGames,
                { new: true }
            );

            if (!games) {
                return res.status(404).send({
                    error: "Game not found."
                });
            }

            res.status(200).send({
                message: `${games.name} updated successfully!`
            });
        } catch (error) {
            res.status(500).send({
                error: "An error occurred while updating the game."
            });
        }
    }
};

module.exports = mainGamesController;
