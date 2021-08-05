const {body, validationResult } = require('express-validator');

const User = require('../model/user');
const Tweet = require('../models/tweet');

var async = require('async');

//Get tweets from an user
exports.tweet_list = function(req, res, next){
    Tweet.find({username: req.body.username})
    .exec(function(err, list_tweets){
        if(err) {return next(err);}
        res.render('tweet_list', {title: 'Tweet List', tweet_list: list_tweets});
    });
};

//Create Tweet GET
exports.tweet_list_create_get = function(req, res, next){
    async.parallel({
        user: function(callback){
            User.find(callback);
        }
    }, function(err, results){
        if(err) {return next(err);}
        res.render('tweet_form', {title: "Create Tweet", user: results.user});
    })
}

exports.tweet_create_post = [
    body('description', 'Description must not be empty.').isLength({min:1, max:240}).escape().withMessage('The tweet must be between 1 and 240 characters'),
    body('user', 'User must not be null').trim().isLength({min:1}).escape(),
    body('date', 'Date must not be null').optional({checkFalsy=true}).isISO8601().toDate(),
    body('retweet', 'retweets must be at least 0').escape(),
    body('likes', 'likes must be at least 0').escape(),

    (req, res, next) => {
        const errors = validationResult(req);

        var tweet = new Tweet(
            {
                description: req.body.description,
                user: req.body.user,
                date: req.body.date,
                retweet: req.body.retweet,
                likes: req.body.likes
            }
        );

        if(!errors.isEmpty()){
            async.parallel({
                user: function(callback){
                    User.find(callback);
                }
            }, function(err, results){
                if(err) {return next(err);}
                res.render('tweet_form', {title: 'Create Tweet', user: results.user, tweet: tweet, errors: erros.array()});
            });
            return;
        }
        else{
            book.save(function(err){
                if(err) {return next(err);}
                res.redirect("http:/localhost:3000/Timeline")
            })
        }
    }
]