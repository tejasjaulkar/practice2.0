const express = require("express")

const app = express();

app.use(express.json());


app.get("/",(req,res)=>
{
    res.send("hey hellow from pict");
})
app.get("/about",(req,res)=>
{
    res.send("about");
})
app.post("/submit", (req, res) => {
  const data = req.body;
  res.send(`✅ Data received: ${JSON.stringify(data)}`);
});

app.listen(3000,(req,res)=>
{
    console.log("3000 listening");
})