var express=require('express')
const app=express();
app.get("/",function(req,res){
    res.send("welcome to node server")
})
app.get("/books",function(req,res){
res.send("book details   ......")
})
app.get("/author",function(req,res){
res.send("author details.")
})
app.listen(8080,function(req,res){

    console.log("server started listing ...")
})