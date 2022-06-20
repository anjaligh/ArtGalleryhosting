const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/demoArt');
mongoose.connect('mongodb+srv://anjali:anjali1@anjali.5ol6pxz.mongodb.net/demoArt?retryWrites=true&w=majority');
const Schema = mongoose.Schema;



var OrderSchema = new Schema({
    buyeremail : String,
    paintingname : String,
    category : String,
    price : String,
    dimension : String,
    image : String

});

var orderData= mongoose.model('order', OrderSchema);                    

module.exports = orderData;