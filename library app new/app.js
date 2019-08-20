var express=require('express')
var bookrouter=require('./routes/bookrouter')
var userrouter=require('./routes/userrouter')
var user=require('./model/user')
const app=express();
var bodyparser=require('body-parser')
app.use(bodyparser.urlencoded({extended:true}));

const path=require('path')
app.use("/book",bookrouter)
app.use("/user",userrouter)

app.set('views','./src/views');
app.set('view engine','ejs')
app.use(express.static(path.join(__dirname,"/public")));
app.get("/index",function(req,res){
   
    res.render("index",{pageTitle:"library",nav:[{link:"/book",title:"book"},{link:"/author",title:"author"},{link:"/addbook",title:"addbook"}]});
 })
 app.get("/",function(req,res){
   
    res.render("login",{pageTitle:"library",nav:[{link:"/book",title:"book"},{link:"/author",title:"author"}]});
 })
 /* app.get("/singup",function(req,res){
   
    res.render("singup",{pageTitle:"library",nav:[{link:"/book",title:"book"},{link:"/author",title:"author"}]});
 }) */
 /* app.post("/singup1",function(req,res){
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

   }) */

 /*    res.redirect("/index"); */
 /* }) */
/*   app.post("/login",function(req,res){
   
    res.redirect("/index");
 }) */
/*  app.post("/login",function(req,res){
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
 */
 app.get("/book",function(req,res){
   
    res.render("book",{pageTitle:"books",nav:[{link:"/book",title:"book"},{link:"/author",title:"author"},{link:"/user/addbook",title:"addbook"}]});
 })
 app.get("/author",function(req,res){
   
    res.render("author",{pageTitle:"books",nav:[{link:"/book",title:"book"},{link:"/author",title:"author"}]});
 })
 
 app.get("/sp/:id",function(req,res){
     var id=req.params.id;
     console.log(id)
     console.log(book_arr[id].btitle)
     res.render("single",{pageTitle:"books",books:book_arr[req.params.id],nav:[{link:"/book",title:"book"},{link:"/author",title:"author"}]}); 
 })
 
app.listen(8282,function(req,res){
    console.log("server started listening")
})