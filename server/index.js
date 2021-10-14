const express = require('express')
require('dotenv').config()
const cors = require("cors")
const bodyParser = require("body-parser")
const blogRoute = require('./routes/routes.js')


const app = express()

const PORT = process.env.PORT

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ extended: true }))

app.use('/api/blog', blogRoute )




app.listen(PORT, ()=>{
    console.log(`app is running on port number ${PORT}`)
})