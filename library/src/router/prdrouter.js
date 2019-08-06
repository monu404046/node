var express=require('express')
const router=express.Router();
router.get("/",function(req,res){
res.sendFile(__dirname+'/prds.html')
})
router.get("/new",function(req,res){
    res.send("")
})

module.exports=router;