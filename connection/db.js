const mongoose = require('mongoose')

const dbString = process.env.db_string

mongoose.connect(dbString).then((res) => {
    console.log("Recipe MongoDb connected successfully");

}).catch((err) => {
    console.log(err)
})