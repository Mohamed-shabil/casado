const mongoose = require('mongoose');


const folderSchema = new mongoose.Schema({
    name:{
        type:String,
        minlength:[6,'Name Must Contain Atleast 8 Characters !'],
        required:[true,'Please provide a name']
    },
    user: {
        type:mongoose.Schema.Types.objectId,
        ref:'User',
    }
}) 


folderSchema.pre(/^find/,function(next){
    this.populate({
      path:'user',
      select:'_id phone'
    })

    next();
});


const Folder = mongoose.model('Folder',folderSchema);
 
module.exports = Folder