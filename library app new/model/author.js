var mongoose= require('mongoose')
var scheema =mongoose.Schema;
var libSchema = new scheema(
    {
        name:String,
        genere:String,
        img:String,
    }
)
var booksmodel=mongoose.model("author",libSchema,"author");
module.exports =booksmodel;
