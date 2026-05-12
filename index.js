// Loads .env file contents into process.env by default
require('dotenv').config()

// express, cors, router
const express = require('express')
const cors = require('cors')
const router = require('./Route/router')
require('./connection/db')

// server creation
const recipeHubServer = express()

// use cors
recipeHubServer.use(cors())

// use middleware
recipeHubServer.use(express.json())

// use router
recipeHubServer.use(router)

// PORT
const PORT = 4000

// listen the port
recipeHubServer.listen(PORT, () => {
    console.log(`Recipe server started running at PORT ${PORT}`)
})

recipeHubServer.get('/',(req,res) => {
    res.status(200).send(`<h1 style="color:red">recipe-server started running...</h1>`)
})