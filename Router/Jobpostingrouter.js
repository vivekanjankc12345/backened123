const express=require("express");
const {postmodel}=require("../Model/Postmodel");
const { get } = require("mongoose");
const postrouter=express.Router();
postrouter.post("/post",async(req,res)=>{
  const payload=req.body;
  try{
        const postdata=new postmodel(payload);
        await postdata.save();
        res.send("Data added sucessfully")
  }
  catch (err)
  {
    res.send(err)
  }
})
postrouter.get("/get",async(req,res)=>{
  try{
    let query=req.query;
    const getdata=await postmodel.find(query);
    res.send(getdata)
  }
  catch (err)
  {
    res.send(err)
  }
})
module.exports={
  postrouter
}