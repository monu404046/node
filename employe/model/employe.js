var mongoose=require('mongoose');
var schema=mongoose.schema;
var empschema=new schema({
    eid:String,
    Name:{type:String,required:true},
})
var empmodel=mongoose.model("employe",empschema);
module.exports=empmodel;