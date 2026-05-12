const express = require('express')
const userController = require('../Controllers/userController')
const recipeController = require('../Controllers/recipeController')

const router = new express.Router()

// register
router.post('/register', userController.registerController)

// login
router.post('/login', userController.loginController)

// getAllRecipes
router.get('/all-recipes', recipeController.getAllRecipesController)

module.exports = router