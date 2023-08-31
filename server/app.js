require("dotenv").config()
const express = require('express')
const router = require('./routes')
const app = express()
const PORT = process.env.PORT || 3000
const cors = require('cors')
const { errorHandler } = require("./middlewares/middlewares")

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(router)
app.use(errorHandler)


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})
