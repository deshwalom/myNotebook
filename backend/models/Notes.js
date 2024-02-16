const mongoose=require('mongoose')
const NotesSchema=new mongoose.Schema({
    Title:{
        type:String,
        require:true
    },
    Description:{
        type:String,
    },
    Tag:{
        type:String,
        default:'General'
    },
    Date:{
        type:Date,
        default: Date.now
    }
})

module.exports=mongoose.model('notes',NotesSchema);