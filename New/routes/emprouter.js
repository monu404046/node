var express=require('express')
const router=express.Router(); 
router.get("/",function(req,res){
    res.render('emphome')
})
router.get("/permemp",function(req,res){
    res.render("permemp")
})
router.get("/dem",function(req,res){
    res.send("daily wage employ")
})
module.exports=router;