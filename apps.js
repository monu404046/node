var express=require('express')
const app=express();
app.get("/",function(req,res){
    res.send("welcome to node server")
})
app.listen(8080,function(req,res){

    console.log("server started listing ...")
})