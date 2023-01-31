const mongoose = require('mongoose');

const MediaSchema = new mongoose.Schema({
    photo:{
        type : String
    },
    video:{
        type : String
    }
}) 

const Media = mongoose.model('Media',mediaSchema);

module.exports = Media;