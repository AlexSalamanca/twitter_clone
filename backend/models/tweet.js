const {DateTime} = require("luxon");
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var tweetSchema = new Schema({
    text: {type: String, required: true, maxLength: 240},
    user: {type: Schema.Types.ObjectId, ref: "User", required: true},
    date: {type: Date, require: true},
    retweets: {type: Number, require: true},
    likes: {type: Number, require: true}
});

//Virtual for tweet's URL
tweetSchema
.virtual('url')
.get(function(){
    return '/' + this._id;
});

//Virtual for retweets number
tweetSchema
.virtual('retweets')
.get(function(){
    return this.retweets;
});

//Virtual for likes number
tweetSchema
.virtual('likes')
.get(function(){
    return this.likes;
});

module.exports = mongoose.model('Tweet', tweetSchema);