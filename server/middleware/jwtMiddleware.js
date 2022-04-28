const jwt = require('jsonwebtoken')
function verifyJWT(req, res, next) {
    const token = req.headers["x-access-token"]?.split(' ')[1]
    if (token) {
        jwt.verify(token, process.env.JWT_Key, (err, decoded) => {
            if (err) return res.json({
                isLoggedIn: false,
                message: "Failed to Authenticate"
            })
            console.Console.log
            req.user = {}
            req.user.id = decoded.id
            next()
        })
    } else {
        res.json({message: "Incorrect Token Given", isLoggedIn: false})
    }
}
module.exports = verifyJWT