var express=require('express');
const router=express.Router();
var mongoose=require("mongoose")
var url="mongodb://localhost/library"
var author=require("../model/author")
mongoose.connect(url,function(err){
    if(err)
    throw err;
    else
    console.log("database connected")
})

router.get("/",function(req,res){
    author.find({},function(err,result){
 console.log(result)
       res.render("author",{pageTitle:"author",nav:[{link:"/book",title:"book"},{link:"/author",title:"author"}],author:result});
    })
  })





module.export=router;