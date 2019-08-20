var express=require('express');
const router=express.Router();
var mongoose= require('mongoose')
var url="mongodb://localhost/library"
var books=require("../model/books")

mongoose.connect(url,function(err){
   if(err)
   throw err;
   else 
   console.log("database connected")
})

router.get("/",function(req,res){
   books.find({},function(err,result){
console.log(result)
      res.render("book",{pageTitle:"books",nav:[{link:"/book",title:"book"},{link:"/author",title:"author"}],books:result});
   })
 })
 router.get("/author",function(req,res){
   books.find({},function(err,result){
console.log(result)
      res.render("author",{pageTitle:"books",nav:[{link:"/book",title:"book"},{link:"/author",title:"author"}],books:result});
   })
 })
 router.get(":id",function(req,res){
    var id=req.params.id;
    console.log(id)
    console.log(book_arr[id].btitle)
    res.render("single",{pageTitle:"books",books:book_arr[req.params.id],nav:[{link:"/book",title:"book"},{link:"/author",title:"author"}]}); 
})
module.exports=router;