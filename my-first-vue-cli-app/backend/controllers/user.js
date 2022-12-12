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
exports.login = (req, res, next) => {
    db.User.findOne({ userName: req.body.userName }).then(
      (user) => {
        console.log(user);
        if (!user) {
          return res.status(401).json({
            error: new Error('User not found!')
          });
        }
        bcrypt.compare(req.body.password, user.passwordHash).then(
          (valid) => {
            if (!valid) {
              return res.status(401).json({
                error: new Error('Incorrect password!')
              });
            }
            const token = jwt.sign(
              { userId: user._id },
              'RANDOM_TOKEN_SECRET',
              { expiresIn: '24h' });
            res.status(200).json({
              userId: user.userName,
              token: token,
              email: user.email
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
    ).catch(
      (error) => {
        res.status(500).json({
          error: error
        });
      }
    );
  };

exports.deleteUser = (req, res, next) => {
  db.User.findOne({ userName: req.params.id }).then((user) =>{
  user.destroy()
    .then(() => {
      res.status(200).json({
        message: 'User was succerfully deleted'
      });
    });
  });
};

