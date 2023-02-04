const { User } = require("../models/User");

let auth = (req, res, next) => {
    // Various authentication processes are carried out.
    // Gets the token from the client cookie.
    let token = req.cookies.x_auth;

    // After decrypting the token, locate the user.
    User.findByToken(token, (err, user) => {
        if (err) throw err;
        if (!user) return res.json({ isAuth: false, error: true })

        req.token = token;
        req.user = user;
        next()  // If there is no next, you will be trapped in middleware, so be careful!
    })

    // If there's a user, it's okay

    // If there's no user, no proof!
}

module.exports = { auth };