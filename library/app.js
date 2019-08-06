var express=require('express')
var prdrouter=require("./router/prdrouter")
const app=express();
/* app.set("view engine","ejs");
app.set("views","./src/views") */
app.use("/prd",prdrouter);

app.get("/",function(req,res){
    res.sendFile(__dirname+"/views/home.html")
})
app.listen(7171,function(req,res){
    console.log("server started")
})