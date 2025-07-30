
const mongoose = require("mongoose");


const DBconnect = async()=>
{
    try {

        await mongoose.connect("mongodb+srv://root:Tej%40s476@cluster0.r1ok0.mongodb.net/PracticeDB",{

          useNewUrlParser: true,
         useUnifiedTopology: true,
        });
        
        console.log("Succefully connected to mongo db");
        
    } catch (err) {
        
        console.log("mongodb err"+err);
        process.exit(1);
    }
}

module.exports = DBconnect;
