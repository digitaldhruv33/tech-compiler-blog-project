const express = require('express')
require('dotenv').config()
const cors = require("cors")
const bodyParser = require("body-parser")
const blogRoute = require('./routes/routes.js')
const Connection = require('./connection/db.js')


const app = express()

const PORT = process.env.PORT

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ extended: true }))

app.use('/api/blog', blogRoute )

Connection


app.listen(PORT, ()=>{
    console.log(`app is running on port number ${PORT}`)
})