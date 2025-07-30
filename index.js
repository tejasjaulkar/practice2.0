
const DBconnect = require("./dbconnect.js")
const express = require("express")

const User = require("./models/user.models.js");

const port = 3000;

DBconnect();

const app = express();

app.use(express.json());


app.get("/users",async(req,res)=>
{
   try {

     const users =  await User.find();
    
    return res.status(200).send(JSON.stringify(users));

   } catch (error) {
    
        console.log(error);
        res.status(500).send(error)
   }
});

app.post("/users",async(req,res)=>
{
    const{name,email,password} = req.body;

    try {
         const user= await new User({name:name, email:email,password:password});
          await user.save();
             return res.status(200).json(user)

    } catch (error) {
        
        console.log(error);
        return res.status(404).send(error);
    }
})
app.listen(3000,(req,res)=>{

    console.log("server is listening port 3000");
})

app.put("/users/:id",async(req,res)=>
{
    const {name} = req.body;

    try {
        const user =await  User.findByIdAndUpdate(req.params.id,{name : name},{new:true})

        return res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error);
    }
})