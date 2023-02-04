const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
//const routesUrls = require('./routes/routes')
//const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const { User } = require('./models/User')
const { auth } = require('./middleware/auth')
// Set the information from the client to be analyzed and retrieved from the server.
// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}))
//application/json
app.use(bodyParser.json())
app.use(cookieParser())


dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () =>console.log("Database connected"))
app.use(express.json())
//app.use(cors())
//app.use('/app', routesUrls)

app.post('/api/users/register', (req, res) => {
   // If you get the necessary information from the client when you sign up for membership, you put them in the database.
    const user = new User(req.body)
    user.save((err, _userInfo) => {
        if (err) return res.json({success: false, err})
        return res.status(200).json({
            success: true
        })
    })
})

app.post('/api/users/login', (req, res) => {
// Locate the requested email in the database.
    User.findOne({ email: req.body.email }, (_err, user) => {
        if (!user) {
            return res.json({
                loginSuccess: false,
                message: "No user corresponds to the email provided."
            })
        }

        // If the requested email is in the database, verify that the password is correct.
        user.comparePassword(req.body.password, (_err, isMatch) => {
            if (!isMatch) return res.json ({ loginSuccess: false, message: "The password is incorrect."})
        
            // If the password is correct, generate a token.
            user.generateToken((err, user) => {
                if (err) return res.status(400).send(err);
            
            // Save the token. Where? Cookies, local storage...
            res.cookie("x_auth", user.token)
                .status(200)
                .json({ loginSuccess: true, userId: user._id })
            })
        })
    })
})

app.get('/api/users/auth', auth, (req, res) => {
    // I've been through middleware so far => Authentication means true
    res.status(200).json({
        _id: req.user._id,
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        lastName: req.user.lastName,
        role: req.user.role,
        image: req.user.image
    })
})

app.get('/api/users/logout', auth, (req, res) => {
    User.findOneAndUpdate({ _id: req.user._id },
        { token: ""},
        (err, _user) => {
            if (err) return res.json({ success: false, err});
            return res.status(200).send({
                success: true
            })
        })
})







app.listen(3000, () => console.log('server is running'))

