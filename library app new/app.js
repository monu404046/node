var express=require('express')
var bookrouter=require('./routes/bookrouter')

const app=express();
const path=require('path')
app.use("/book",bookrouter)
app.use(express.static(path.join(__dirname,"/public")));
app.set('views','./src/views');
app.set('view engine','ejs')
app.get("/",function(req,res){
   
    res.render("index",{pageTitle:"library",nav:[{link:"/book",title:"book"},{link:"/author",title:"author"}]});
 })
 
 app.get("/book",function(req,res){
   
    res.render("book",{pageTitle:"books",books:book_arr,nav:[{link:"/book",title:"book"},{link:"/author",title:"author"}]});
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