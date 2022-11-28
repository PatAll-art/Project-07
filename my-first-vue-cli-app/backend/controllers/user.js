const bcrypt = require('bcrypt');
const { use } = require('../app');
const User = require('../models/users');
const jwt = require('jsonwebtoken');
const db = require('../helpers/db');

console.log('first hello');

exports.signup = (req, res, next) => {
    db.User.findOne({ where: { email: req.body.email } })
    .then(user => {
        if (user) {
            throw 'Email "' + req.body.email + '" is already registered';
        }
    });
    

    bcrypt.hash(req.body.password, 10).then(
        (hash) => {
            const user = new db.User({
                email: req.body.email,
                passwordHash: hash,
                userName: req.body.userName
            }); 
            user.save().then(
                () => {
                    res.status(201).json({
                        message: 'User added succesfully!'
                    });
                }
            ).catch(
                (error) => {
                    res.status(500).json({
                        error: error
                    });
                }
            );
        }
    );
};