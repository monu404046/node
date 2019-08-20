var mongoose= require('mongoose')
var scheema =mongoose.Schema;
var libSchema = new scheema(
    {
        name:String,
        username:String,
        password:String,
        mobile:Number,
        role:String

    
    
    }
)
var usermodel=mongoose.model("user",libSchema,"user");
module.exports =usermodel;