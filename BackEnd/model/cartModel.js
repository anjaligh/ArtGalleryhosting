const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://anjali:anjali1@anjali.5ol6pxz.mongodb.net/demoArt?retryWrites=true&w=majority');
// mongoose.connect('mongodb://localhost:27017/demoArt');
const Schema = mongoose.Schema;



var CartSchema = new Schema({
    buyeremail : String,
    paintingname : String,
    category : String,
    price : String,
    dimension : String,
    image : String

});

var cartData= mongoose.model('cart', CartSchema);                    

module.exports = cartData;