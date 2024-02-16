const mongoose  = require("mongoose");

const mongoURI="mongodb://127.0.0.1/myNoteBook"
// "mongodb://localhost:27017"
// mongodb://127.0.0.1/myNotebook
const connectToMongo=()=>{
    console.log("connectToMongo Called")
    mongoose.connect(mongoURI);
    console.log("connection established");
}
module.exports=connectToMongo;