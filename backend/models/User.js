const mongoose=require('mongoose')
const UserSchema=new mongoose.Schema({
    Name:{
        type:String,
        require:true
    },
    Email:{
        type:String,
        require:true,
        unique:true
    },
    Password:{
        type:String,
        require:true,
    },
    Date:{
        type:Date,
        default: Date.now
    }
})

module.exports=mongoose.model('user',UserSchema);