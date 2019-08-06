var express=require('express')
const app=express();
var book_array=[{name:"book1",author:"author1",price:"100"},{name:"book2",author:"author2",price:"10"},{name:"book3",author:"author3",price:"110"}]
app.set("view engine","ejs");
app.set("views","./src/views")
var bodyparser=require('body-parser')
app.use(bodyparser.urlencoded({extended:true}));
app.get("/",function(req,res){
    res.render("login");
   res.sendFile(__dirname+"/src/views/login.html") 
})
app.get("/books",function(req,res){
   
   res.render("books",{books:book_array});
})
app.post("/home",function(req,res){
    if(req.body.pass=="12345"){

   res.render("home",{user:req.body.uname});
    console.log(req.body.uname)
    res.sendFile(__dirname+"/src/views/home.html") 
}
else
{
    res.redirect("/")
}
})
app.listen(8282,function(req,res){
    console.log("server started listening")
})