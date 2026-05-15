const saverecipes = require('../Model/saveRecipeModel')

// addSavedRecipes
exports.addSavedRecipes = async (req, res) => {
    console.log("Inside saved recipes");
    const { id } = req.params
    const userId = req.userId
    const { name, image, cuisine } = req.body
    try {
        const existingRecipe = await saverecipes.findOne({ recipeId: id, userId })
        if (existingRecipe) {
            res.status(406).json("Selected recipe already exists...")
        }
        else {
            const newRecipe = new saverecipes({
                recipeId: id, recipeName: name, image, cuisine, userId
            })
            await newRecipe.save()
            res.status(200).json(newRecipe)
        }
    }
    catch (err) {
        res.status(401).json(err)
    }
}

// getUserSavedRecipeController
exports.getUserSavedRecipeController = async (req, res) => {
    console.log("Inside get User Saved Recipe Controller");
    const userId = req.userId
    try {
        const userSavedRecipe = await saverecipes.find({ userId })
        res.status(200).json(userSavedRecipe)
    }
    catch (err) {
        res.status(401).json(err)
    }
}

// removeSavedRecipe

exports.removeSavedRecipe = async (req, res) => {
    console.log("Inside get Remove Saved Recipe Controller");
    const { id } = req.params
    try {
        const removeRecipe = await saverecipes.findByIdAndDelete({ _id: id })
        res.status(200).json(removeRecipe)
    }
    catch (err) {
        res.status(401).json(err)
    }
}