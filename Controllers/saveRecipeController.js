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
                recipeId: id, name, image, cuisine, userId
            })
            await newRecipe.save()
            res.status(200).json(newRecipe)
        }
    }
    catch (err) {
        res.status(401).json(err)
    }
}