const recipes = require('../Model/recipeModel')

// getAllRecipesController
exports.getAllRecipesController = async (req, res) => {
    console.log("Inside get AllRecipes Controller");
    try {
        const allRecipes = await recipes.find()
        res.status(200).json(allRecipes)
    }
    catch (err) {
        res.status(404).json(err)
    }
}

// getARecipeController
exports.getARecipeController = async (req, res) => {
    console.log("Inside get A Recipe Controller");
    const { id } = req.params
    try {
        const recipeDetails = await recipes.findById({ _id: id })
        res.status(200).json(recipeDetails)
    }
    catch (err) {
        res.status(404).json(err)
    }
}

// getRelatedRecipeController
exports.getRelatedRecipeController = async (req, res) => {
    console.log("Inside get Related Recipe Controller");
    const cuisine = req.query.cuisine
    try {
        const relatedRecipes = await recipes.find({ cuisine })
        res.status(200).json(relatedRecipes)
    }
    catch (err) {
        res.status(404).json(err)
    }
}