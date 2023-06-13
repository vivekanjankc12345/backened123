const express=require("express");
const app=express();
var cors = require('cors')
const {connection}=require("./Config/db")
const {postrouter}=require("./Router/Jobpostingrouter")
app.use(cors({
  origin:"*"
}))
app.use(express.json());
app.get("/",async(req,res)=>{
  res.send("hiiii")
})
app.use("/user",postrouter);
app.listen(8080,async()=>{
  try
  {
    await connection
    console.log("connected to database")
  }
  catch (err)
  {
    console.log(err)
  }
console.log("8080 port is working");
})