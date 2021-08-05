const { DateTime } = require('luxon')

const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema= new Schema({
    first_name: {type: String, required: true, maxLength: 100},
    last_name: {type: String, required: true, maxLength: 100},
    username: {type: String, required: true, maxLength: 100},
    email: {type: String, require: true, maxLength: 100},
    password: {type: String, require: true, maxLength: 50},
    date_of_birth: {type: Date, require: true},  
});

userSchema
.virtual('name')
.get(function(){
    return this.first_name + ' ' + this.last_name;
});

userSchema
.virtual('url')
.get(function(){
    return '/user/' + this._id;
});

userSchema
.virtual('birthday_formatted')
.get(function(){
    return this.date_of_birth ? DateTime.fromJSDate(this.date_of_birth).toLocaleString(DateTime.DATE_MED) : '';
});

module.exports = mongoose.model('User', userSchema);
