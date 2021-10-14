const mongoose = require("mongoose");
require("dotenv").config();

const URL = process.env.MONGO_URL;

const Connection = mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
    console.log("DB connected")
}).catch((error)=>{
    console.log(error)
})

module.exports = Connection
