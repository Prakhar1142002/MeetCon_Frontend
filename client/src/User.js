const mongoose  = require('mongoose');

const { Schema }  = mongoose;

const UserSchema = new Schema({
    fname: String,
    lname: String,
    eMail: String,
    pword: String,
    age : String,
    gender: String,
    username: String,
    url: { type: String, default: '' },
    image: { type: String, default: 'default.png' },
    description: { type: String, default: '' },
    posts: Array,
    followers: Array,
    following: Array

},{collection: 'users'});

const User = mongoose.model("User", UserSchema);
module.exports = User;