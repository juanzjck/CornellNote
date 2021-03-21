const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const Passwords = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    password: String
}, { timestamps: true });

Passwords.pre('save', function(next) {
    const password = this
    bcrypt.genSalt(13, (err, salt) => {
        if(err) return next(err)
        bcrypt.hash(password.password, salt, function(err, hash) {
            if(err) return next(err)
            password.password = hash
            next()
        })
    })
})

module.exports = mongoose.model('passwords', Passwords);   