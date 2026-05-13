const testimonials = require('../Model/testimonyModel')

// addTestimonials
exports.addTestimonials = async (req, res) => {
    console.log("Inside testimony controller");

    const { name, email, message } = req.body

    try {
        const newTestimony = await testimonials({
            name, email, message
        })
        await newTestimony.save()
        res.status(200).json(newTestimony)
    }
    catch (err) {
        res.status(401).json(err)
    }
}