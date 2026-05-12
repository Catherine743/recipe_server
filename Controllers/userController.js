const users = require('../Model/userModel')
const jwt = require('jsonwebtoken')
const bCrypt = require('bcrypt')

// registerController
exports.registerController = async (req, res) => {
    console.log("Inside register controller");
    const { username, email, password } = req.body;
    try {
        const existingUser = await users.findOne({ email })
        if (existingUser) {
            res.status(406).json("User already exists")
        }
        else {
            const encryptPassword = await bCrypt.hash(password, 10)
            // console.log(encryptPassword)
            const newUser = await users({
                username, email, password: encryptPassword, profile: ""
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    }
    catch (err) {
        res.status(401).json(err)
    }
}

// loginController
exports.loginController = async (req, res) => {
    console.log("Inside login controller");
    const { email, password } = req.body
    try {
        const existingEmail = await users.findOne({ email })
        if (existingEmail) {
            let isUserPswdMatch = await bCrypt.compare(password, existingEmail.password)
            if (isUserPswdMatch || password == existingEmail.password) {
                const token = jwt.sign({ userId: existingEmail._id }, process.env.jwt_secret)
                res.status(200).json({ user: existingEmail, token })
            }
            else {
                res.status(404).json("Invalid password")
            }
        }
        else {
            res.status(404).json("Invalid email")
        }
    }
    catch (err) {
        res.status(401).json(err)
    }
}