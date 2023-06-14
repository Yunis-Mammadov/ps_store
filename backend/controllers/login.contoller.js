const LoginModel = require("../models/login.model")

const loginContoller = {
    post: async (req, res) => {
        const { username, password } = req.body;
        const existedUsername = await LoginModel.findOne({ username: username });
        if (!existedUsername) {
            res.send({ auth: false, message: 'username not found!' })
        }
        else {
            const isValid = await bcrypt.compare(password, existedUsername.password);
            if (!isValid) {
                res.send({ auth: false, message: 'password is incorrect!' });
            }
            else {
                //username, password +
                const id = existedUsername._id;
                const token = jwt.sign({ id }, process.env.SECRET_KEY, {
                    expiresIn: '1d'
                })
                res.send({
                    auth: true,
                    user: {
                        id: existedUsername._id,
                        username: existedUsername.username,
                        email: existedUsername.email,
                        isAdmin: existedUsername.isAdmin
                    },
                    token: token,
                    message: 'user logged in successfully!'
                })
            }
        }
    }
}

module.exports = loginContoller