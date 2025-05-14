const express =require('express')
const route = express.Router()
const verifytoken=require("../middleware/verifytoken")
const ConnectionData =require('../config/Connection')
const { ObjectId } = require('mongodb')
route.get("/getuserchats",verifytoken,async(req,res)=>{
    try{
        const chats = await ConnectionData('chat')
        const chatdata= await chats.find({ common_id: new ObjectId(req.userdata._id) }).toArray()
        console.log(req.userdata._id)
        res.send({
            ok:true,
            data:chatdata
        })
 }catch(error){
   console.log(error)
   res.send({
    ok:false,
    error:error
   })
 }
})

  

route.post("/create-chat",verifytoken,async(req,res)=>{
  try{
 const chats = await ConnectionData('chat')
 var data= await chats.insertOne({common_id:new ObjectId(req.userdata._id),related_id:new ObjectId(req.body.id),messageCount:0});
 res.send({
  ok:true,
  result:data
 })
  }catch (error){
    res.send({
      ok:false,
      error:error,
    })
  }
})

module.exports=route;

