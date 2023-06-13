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
postrouter.get("/sort",async(req,res)=>{
  let que=req.body;
  let sortby=req.query.sortby;
  console.log(sortby)
  let order=req.query.order;
  console.log(order);
  let get=await postmodel.find(que);
  if(sortby==="postedAt" &&order==="asc")
  {
    get.sort((a,b)=>{
      return a.postedAt-b.postedAt;
    })
    res.send(get)
  }
  if(sortby==="postedAt" &&order==="desc")
  {
    get.sort((a,b)=>{
      return b.postedAt-a.postedAt;
    })
    res.send(get)
  }
})
module.exports={
  postrouter
}