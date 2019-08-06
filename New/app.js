var express=require('express')
var prdrouter=require('./routes/prdrouter')
var emprouter=require('./routes/emprouter')
const app=express();
app.set("view engine","ejs");
app.set("views","./src/views")
app.use("/prd",prdrouter)
app.use("/emp",emprouter)
   
app.get("/",function(req,res){
    res.render("home")
})
app.listen(8282,function(req,res){
    console.log("server started listening")
})