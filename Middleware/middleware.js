const jwt = require('jsonwebtoken')
const jwtMiddleware = (req, res, next) => {
    console.log("Inside jwtMiddleware");
    try {
        // get token
        const token = req.headers.authorization.split(" ")[1]
        if (token) {
            // verify token
            const jwtResponse = jwt.verify(token, process.env.jwt_secret)
            // console.log(jwtResponse);
            req.payload = jwtResponse.userId
            next()
        }
        else {
            res.status(401).json("Please provide token")
        }
    }
    catch (err) {
        res.status(403).json("Please login")
    }
}

module.exports = jwtMiddleware