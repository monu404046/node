var express=require('express')
const app=express();
app.set("view engine","ejs");
app.set("views","./src/views")
var bodyparser=require('body-parser')
app.use(bodyparser.urlencoded({extended:true}));
app.get("/",function(req,res){
    res.render("homepage")
})
app.get("/newppage",function(req,res){
    res.render("newppage",{user:req.body.uname})
    console.log(req.body.uname);
})
app.get("/viewp",function(req,res){
    res.render("viewp")
})
app.get("/remove",function(req,res){
    res.render("remove")
})
app.get("/src/views/addedpd",function(req,res){
    res.render("addedpd")
})
app.listen(7272,function(req,res){
    console.log("server started listening")
})