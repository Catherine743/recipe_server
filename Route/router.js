const express = require('express')
const userController = require('../Controllers/userController')
const recipeController = require('../Controllers/recipeController')
const testimonyController = require('../Controllers/testimonyController')

const router = new express.Router()

// register
router.post('/register', userController.registerController)

// login
router.post('/login', userController.loginController)

// getAllRecipes
router.get('/all-recipes', recipeController.getAllRecipesController)

// addTestimony
router.post('/testimonials/add', testimonyController.addTestimonials)

module.exports = router