const mongoose = require('mongoose');
const slugify = require('slugify');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    phone:{
        type:Number,
        minlength:[10,'Mobile Number Must be 10 Digits !'],
    }
}) 

const User = mongoose.model('User',userSchema);

module.exports = User;