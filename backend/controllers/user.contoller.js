const UserModel = require("../models/user.model");

const userController = {
    getAll: async (req, res) => {
        try {
            const users = await UserModel.find();

            res.json({
                data: users,
                message: 'Data retrieved successfully!'
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error retrieving data!' });
        }
    }
};

module.exports = userController;
