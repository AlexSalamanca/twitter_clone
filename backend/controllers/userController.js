const { body, validationResult } = require('express-validator');

var async = require('async');

var User = require('../models/user');

//Display all users
exports.user_list = function(req,res,next){
    User.find()
    .populate('user')
    .sort([['username', 'ascending']])
    .exec(function(err, list_users){
        if(err) {return next(err);}
        res.render('user_list', {title: 'User List', user_list: list_user});
    });
};

//Display User create form on GET
exports.user_create_get = function(req, res, next){
    res.render('user_form', {title: 'Create User'});
}

//Handle User create on POST
exports.user_create_post = [
    body('first_name').trim().isLength({min:1}).escape().withMessage('First name must be specified')
    .isAlphanumeric().withMessage('First name has non-alphanumeric characters'),
    body('last_name').trim().isLength({min:1}).escape().withMessage('Last name must be specified')
    .isAlphanumeric().withMessage('Last name has non-alphanumeric characters'),
    body('username').trim().isLength({min:8, max:20}).escape().withMessage('Username must be specified and between 8 and 20 characters')
    .isAlphanumeric().withMessage('Username has non-alphanumeric characters'),
    body('password').trim().isLength({min:8, max:20}).escape().withMessage('Password must be specified and between 8 and 20 characters'),
    body('email').trim.isLength({min: 1, max: 30}).escape().withMessage('Email must be specified'),
    body('birthdate', 'Invali date of birth').optional({checkFalsy: true }).isISO8601().toDate(),

    (req, res, next) => {
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            res.render('Errors: ' + errors);
        }
        else{
            var User = new User(
                {
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    username: req.body.username,
                    password: req.body.password,
                    email: req.body.email,
                    birthdate: req.body.birthdate
                }
            );

            User.save(function(err){
                if(err) {return next(err);}
                res.redirect("/Signup");
            });
        }
    }
];
