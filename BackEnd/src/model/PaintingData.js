const mongoose= require('mongoose');
// mongoose.connect('mongodb://localhost:27017/demoArt');
mongoose.connect('mongodb+srv://anjali:anjali1@anjali.5ol6pxz.mongodb.net/demoArt?retryWrites=true&w=majority');
const Schema=mongoose.Schema;
var PaintingSchema=new Schema({
    name : String,
    email : String,
    contact : Number,
    address : String,
    artistimage: String,
    paintingname : String,
    category : String,
    price : String,
    dimension : String,
    description : String,
    image : String
});
var PaintingData=mongoose.model('painting',PaintingSchema);
module.exports=PaintingData;