require('dotenv').config()
const cors = require ("cors")
const passport = require("passport")
const express = require("express")


require('./config/database')
const Router = require("./routs/routes")

const PORT = 4000

const app = express()

app.use(cors())
app.use(express.json())
app.use(passport.initialize())
app.use("/api", Router)
 

app.listen(PORT, () => console.log("server ready on port" + PORT))
