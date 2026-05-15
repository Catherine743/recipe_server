const downloads = require('../Model/downloadModel')

// addToDownloadsController
exports.addToDownloadsController = async (req, res) => {
    console.log("Inside add To Downloads");
    const { id } = req.params
    const { name, cuisine } = req.body
    try {
        const existingRecipe = await downloads.findOne({ recipeId: id })
        if (existingRecipe) {
            existingRecipe.count += 1
            await existingRecipe.save()
            res.status(200).json(existingRecipe)
        }
        else {
            const newRecipe = new downloads({
                recipeId: id, recipeName: name, cuisine, count: 1
            })
            await newRecipe.save()
            res.status(200).json(newRecipe)
        }
    }
    catch (err) {
        res.status(401).json(err)
    }
}