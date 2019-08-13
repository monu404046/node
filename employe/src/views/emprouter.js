var express=require('express')
var mongoose=require('mongoose')
var url:""
var emp=require('./model/employe')
const router=express.Router(); 
/* router.get("/emp",function(req,res){
    res.render('newemploye')
}) */
router.get("/newemploye",function(req,res){
    res.render('newemploye')
})
mongoose.connect(url,function(err){
    if(err)
    throw err;
    console.log(result)
})
router.post("/add",function(req,res){
    res.render("newemploye")
})
router.post("/add",function(req,res){
    var e1= new emp();

})
module.exports=router;