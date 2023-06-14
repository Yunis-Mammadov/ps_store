const { required } = require("joi");
const RegisterModel = require("../models/register.model")
const bcrypt = require("bcrypt")

const registerController = {
    post: async (req, res) => {
        const { name, password, email } = req.body;
        const existedName = await RegisterModel.findOne({ name: name });
        const existedEmail = await RegisterModel.findOne({ email: email });
        if (existedName) {
            res.send({
                auth: false,
                message: 'name already exists!'
            })
            return;
        }
        if (existedEmail) {
            res.send({
                auth: false,
                message: 'email already used!'
            })
            return;
        }
        const salt = await bcrypt.genSalt(10); //500ms
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = await RegisterModel({
            name: name,
            email: email,
            password: hashedPassword,
            isAdmin: false
        })
        await newUser.save();
        res.send({
            auth: true,
            data: newUser,
            message: 'user signed up successfully!',
        })
    }
}

module.exports = registerController