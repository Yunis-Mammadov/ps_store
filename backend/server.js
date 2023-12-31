const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const bodyParser = require("body-parser")
const app = express()
const jwt = require('jsonwebtoken');

app.use(cors())
app.use(bodyParser.json())
dotenv.config()
const router = require("./routes")



app.use("/api/accessories",router.accessories_routes)
app.use("/api/accessoriesheader",router.accessoriesHeader_router)
app.use("/api/contact",router.contact_routes)
app.use("/api/homeGames",router.homeGamesPage_routes)
app.use("/api/maingames",router.mainGamesPage_routes)
app.use("/api/top10games",router.top10GamesPage_routes)
app.use("/api/categories",router.category_routes)
app.use("/api/hardware",router.hardware_routes)
app.use("/api/hardwarevideo",router.hardwareVideo_routes)
app.use("/api/slider",router.slider_routes)
app.use("/api/login",router.login_routes)
app.use("/api/user",router.user_routes)


PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`App running on PORT:${PORT}`);
})

DB_CONNECTION = process.env.DB_CONNECTION
mongoose.connect("mongodb+srv://yunis_admin:Admin123@author.osk3d9z.mongodb.net/?retryWrites=true&w=majority").then(() => {
    console.log("Mongo DB connected!");
})