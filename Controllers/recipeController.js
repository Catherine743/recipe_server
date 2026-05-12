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