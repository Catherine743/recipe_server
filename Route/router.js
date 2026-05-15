const express = require('express')
const userController = require('../Controllers/userController')
const recipeController = require('../Controllers/recipeController')
const testimonyController = require('../Controllers/testimonyController')
const jwtMiddleware = require('../Middleware/middleware')
const saveRecipeController = require('../Controllers/saveRecipeController')
const downloadRecipeController = require('../Controllers/downloadController')

const router = new express.Router()

// register
router.post('/register', userController.registerController)

// login
router.post('/login', userController.loginController)

// getAllRecipes
router.get('/all-recipes', recipeController.getAllRecipesController)

// addTestimony
router.post('/testimonials/add', testimonyController.addTestimonials)

// get single recipe
router.get('/view/:id', jwtMiddleware, recipeController.getARecipeController)

// relatedRecipe
router.get('/related-recipes', jwtMiddleware, recipeController.getRelatedRecipeController)

// saverecipe
router.post('/save-recipe/:id', jwtMiddleware, saveRecipeController.addSavedRecipes)

// getsaverecipe
router.get('/save-recipe', jwtMiddleware, saveRecipeController.getUserSavedRecipeController)

// deletesaverecipe
router.delete('/save-recipe/:id/remove', jwtMiddleware, saveRecipeController.removeSavedRecipe)

// downloadrecipe
router.post('/recipe/:id/download', jwtMiddleware, downloadRecipeController.addToDownloadsController)

module.exports = router