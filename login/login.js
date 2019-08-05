var express=require('express')
const app=express();
app.get("/",function(req,res){
   res.sendFile(__dirname+"/src/views/login.html") 
})
app.get("/home",function(req,res){
    res.sendFile(__dirname+"/src/views/home.html") 
 })
app.listen(8282,function(req,res){
    console.log("server started listening")
})