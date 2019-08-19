var mongoose= require('mongoose')
var scheema =mongoose.Schema;
var libSchema = new scheema(
    {
        btitle:String,
        genere:String,
        author:String,
        img:String
    }
)
var booksmodel=mongoose.model("books",libSchema,"books");
module.exports =booksmodel;