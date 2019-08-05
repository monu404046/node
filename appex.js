var express=require('express')
const app=express();
app.get("/",function(req,res){
   res.sendFile(__dirname+"/src/views/home.html") 
})
app.get("/emp",function(req,res){
    res.sendFile(__dirname+"/src/views/emp.html")
})
app.get("/emp/pemp",function(req,res){
    res.sendFile(__dirname+"/src/views/pemp.html")
})
app.get("/emp/pemp/:id",function(req,res){
    res.send("selected employ is"+req.params.id)
})
app.get("/emp/demp",function(req,res){
    res.sendFile(__dirname+"/src/views/demp.html")
})
app.get("/prd",function(req,res){
    res.sendFile(__dirname+"/src/views/prd.html")
})
app.get("/prd/ws",function(req,res){
    res.sendFile(__dirname+"/src/views/ws.html")
})
app.get("/prd/rs",function(req,res){
    res.sendFile(__dirname+"/src/views/rs.html")
})
app.get("/prd/ws/:id",function(req,res){
    res.send("selected employ is"+req.params.id)
})
app.get("/details",function(req,res){
    res.send("details being loaded")
})
app.get("/ab?cd",function(req,res){
    res.send("getting")
})
/* app.get("/ab+cd",function(req,res){
    res.send("plus")
}) */
/* app.get("/ab*cd",function(req,res){
    res.send("star")
}) */
/* app.get("/ab(cd)?e",function(req,res){
    res.send("star")
}) */
/* app.get(/a/,function(req,res){
    res.send("/a/")
}) */
/* app.get(/.*fly$/,function(req,res){
    res.send("butterfly")
}) */
/* app.get(/fly/,function(req,res){
    res.send("butterfly")
}) */
app.get("/books",function(req,res){
    res.send("book id :");
})
app.get("/books/poems",function(req,res){
    res.send("<html><head></head><body><h1>poems....</h1></body></html>");
    res.send("malayalam poems....");
})
app.listen(8282,function(req,res){
    console.log("server started listening")
})