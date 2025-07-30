
const express = require("express");

const port = 3000;

const app = express();

app.use(express.json());

let users =[];


app.get("/",(req,res)=>
{
    res.send(users);
})

app.get("/users",(req,res)=>{
     return res.status(200).json(users)
})

app.post("/users",(req,res)=>
{
    const newname = req.body.name;
    
    if(users.find(u=>u.email === req.body.email))
    {
        return res.status(409).send("email already exists");
    }
    const newuser = {id:users.length+1, name:newname,email:req.body.email}

    users.push(newuser);
    return res.status(200).json(newuser);
})

//update
app.put("/update/:id",(req,res)=>
{
    const user = users.find(u => u.id == req.params.id)
    
    if(!user)
    {
        return res.status(404).json({ error: "User not found" });
    }
    user.name= req.body.name;
    return res.status(200).json(users);
})

app.delete("/delete/:id",(req,res)=>
{
    const isuser = users.find(u => u.id == req.params.id)
    
    if(!isuser)
    {
        res.status(404)
    }

    users = users.filter(u=>u.id!=req.params.id);
    return res.status(200).json(users);
})
app.listen(port,()=>{

    console.log("server is running on port 3000");
})