const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const saltRounds = 10
const jwt = require('jsonwebtoken')


const userSchema = mongoose.Schema({
    name:{
        type: String,
        maxLength: 50
    },
    email: {
        type:String,
        required:true,
        unique:1
    },
    password:{
        type:String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})

// Before sava, run function
userSchema.pre('save', function(next){
    var user = this;

    if (user.isModified('password')) {
        // Encrypt the password.
        // The password must be encrypted using salt, and this salt must be generated.
        // SaltRounds indicates how many letters salt is.
        bcrypt.genSalt(saltRounds, function(err, salt) {
            if (err) return next(err)

            bcrypt.hash(user.password, salt, function(err, hash) {
                if (err) return next(err)
                user.password = hash
                next()
            })
        })
    } else {
        // If you change other information, not the password, it will be handed over.
        next()
    }
})

userSchema.methods.comparePassword = function(plainPassword, cb) {
    // plainPassword 1234567    Encrypted password $2b$10...
    bcrypt.compare(plainPassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch)
    })
}

userSchema.methods.generateToken = function(cb) {
    // Create a token using jsonwebtoken.
    var user = this;

    // user._id + 'secretToken' = token
    // 'secretToken' -> user._id
    var token = jwt.sign(user._id.toHexString(), 'secretToken')

    user.token = token
    user.save(function(err, user) {
        if (err) return cb(err)
        cb(null, user)
    })
}

userSchema.statics.findByToken = function(token, cb) {
    var user = this;

    // Decode the token.
    // user._id + '' = token
    jwt.verify(token, 'secretToken', function (_err, decoded) {
            // After finding the user using the user ID, 
            // Verify that the token imported from the client and the token stored in the DB match.
            user.findOne({ "_id": decoded, "token": token }, function (err, user) {
                if (err)
                    return cb(err)
                cb(null, user)
            })
        })
}


//module.exports = mongoose.model('mytable',userSchema)
const User = mongoose.model('firstDB', userSchema)

module.exports = { User }