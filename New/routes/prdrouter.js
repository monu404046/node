var express=require('express')
const router=express.Router();


router.get("/",function(req,res){
 res.render('prdhome')
})
router.get("/new",function(req,res){
    res.send('products added')
   })
   router.get("/view",function(req,res){
    res.send('products viewed')
   })
   router.get("/edit",function(req,res){
    res.send('edited')
   })
   router.get("/delete",function(req,res){
    res.send('deleted')
   })
   
module.exports=router;
