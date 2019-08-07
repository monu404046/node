var express=require('express')
var bookrouter=require('./routes/bookrouter')

const app=express();
const path=require('path')
app.use("/book",bookrouter)
/* var book_arr=[
    {
        btitle:"love and life",
        genere:"romance",
        author:"ruskin bond",
        img:"https://rukminim1.flixcart.com/image/416/416/jtsz3bk0/book/5/7/7/unf-ck-yourself-original-imaeuqkgysyynrqj.jpeg?q=70"

     },
     {
        btitle:"underworld",
        genere:"thrilleer",
        author:"matt dan",
        img:"https://m.media-amazon.com/images/M/MV5BMTk1OTc2ZmUtODU0Yy00NGJiLWJmNmQtODI0MzBjODk3MjI4L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX182_CR0,0,182,268_AL_.jpg"

     },
     {
        btitle:"godzila king of monsters",
        genere:"sci fi",
        author:"mathew hayden",
        img:"https://irs.www.warnerbros.com/keyart-jpeg/movies/media/browser/Godzilla_keyart_4114x6000.jpg"

     },
     {
        btitle:"planet of the apes",
        genere:"fiction",
        author:"mad man",
        img:"https://m.media-amazon.com/images/M/MV5BNDNmYTQzMDEtMmY0MS00OTNjLTk4MjItMDZhMzkzOGI3MzA0XkEyXkFqcGdeQXVyNjk5NDA3OTk@._V1_UX182_CR0,0,182,268_AL_.jpg"

     },

] */

app.use(express.static(path.join(__dirname,"/public")));
app.set('views','./src/views');
app.set('view engine','ejs')
app.get("/",function(req,res){
   
    res.render("index",{pageTitle:"library",nav:[{link:"/book",title:"book"},{link:"/author",title:"author"}]});
 })
 /* 
 app.get("/book",function(req,res){
   
    res.render("book",{pageTitle:"books",books:book_arr,nav:[{link:"/book",title:"book"},{link:"/author",title:"author"}]});
 })
 app.get("/sp/:id",function(req,res){
     var id=req.params.id;
     console.log(id)
     console.log(book_arr[id].btitle)
     res.render("single",{pageTitle:"books",books:book_arr[req.params.id],nav:[{link:"/book",title:"book"},{link:"/author",title:"author"}]}); 
 }) */
 
app.listen(8282,function(req,res){
    console.log("server started listening")
})