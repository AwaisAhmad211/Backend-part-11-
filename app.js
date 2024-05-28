const express = require('express') ;
const app = express() ;
const userModel = require('./userModel')
app.get("/",(req,res)=>{
    res.send("Working")
})
app.get("/create",async (req,res)=>{
let createdUser =   await userModel.create({
        name : "Awais" ,
        age : 18 ,
        username : "Awais@gmail.com"
    })
    res.send(createdUser);
})
app.get("/read",async (req,res)=>{
    let users = await userModel.find()
    res.send(users)
})
app.get("/update",async (req,res)=>{
    let updatedUser = await userModel.findOneAndUpdate({name : "Awais"},{name : "Hamza"},{new : true})
    res.send(updatedUser);
})
app.get("/delete", async (req,res)=>{
    let deletedUser = await userModel.findOneAndDelete({name : "Hamza"},{new:true})
    res.send(deletedUser)
})
app.listen(3000)