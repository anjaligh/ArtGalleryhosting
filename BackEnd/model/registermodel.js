const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/demoArt');
mongoose.connect('mongodb+srv://anjali:anjali1@anjali.5ol6pxz.mongodb.net/demoArt?retryWrites=true&w=majority');
const Schema = mongoose.Schema;



var RegisterSchema = new Schema({
   // _id:{type:String,required:true},
  // profileId : {type:String,required:true},
    name : {type:String,required:true},
    email:{type:String,unique:true},
    userrole:{type:String,required:true},
    password:{type:String,required:true},
    contactno:{type:String,required:true},
    address:{type:String,required:true}

 
  
});

var registerData= mongoose.model('users', RegisterSchema);                        //UserData is the model and NewBookData is the schema

module.exports = registerData;