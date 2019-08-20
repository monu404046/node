var express=require('express');
const router=express.Router();
var mongoose= require('mongoose')
var url="mongodb://localhost/library"
var user=require("../model/user")


mongoose.connect(url,function(err){
   if(err)
   throw err;
   else 
   console.log("database connected")
})

/* app.get("/",function(req,res){
   
    res.render("login",{pageTitle:"library",nav:[{link:"/book",title:"book"},{link:"/author",title:"author"}]});
 }) */
 router.get("/singup",function(req,res){
   
    res.render("singup",{pageTitle:"library",nav:[{link:"/book",title:"book"},{link:"/author",title:"author"}]});
 })
 router.get("/addbook",function(req,res){
   
    res.render("addbook",{pageTitle:"library",nav:[{link:"/book",title:"book"},{link:"/author",title:"author"}]});
 })
 router.post("/singup1",function(req,res){
   var u1= new user();
   u1.username=req.body.unr;
   u1.password=req.body.pwr;
   u1.mobile=req.body.mr;
   u1.role=req.body.er;
   u1.save(function(err){
       if(err) 
       throw err;
       else
       res.redirect('/')

   })
 })

 router.post("/login",function(req,res){
    console.log("hello")
    user.find({username:req.body.un,password:req.body.pw},function(err,result){
        console.log(result)
        if(err)
        throw err;
        else if (result.length==0){
            
            res.redirect("/")
           
        }
        else{
           res.redirect("/index")
        }



    })
  
   
})


module.exports=router;