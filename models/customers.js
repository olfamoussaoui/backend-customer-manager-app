var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//require('mongoose-currency').loadType(mongoose);
//const Currency = mongoose.Types.Currency;
const Genders = ["male", "female"];
var customerSchema = new Schema({
  firstname: {
    type: String,
   
  },
  lastname: {
    type: String,
   
  },
  gender: {
    type: String,
    enum: Genders
  },
  email: {
    type: String,
   
  },
  address: String,
  city: String,
  state: String,
  ordertotal: String
});


var Customers = mongoose.model('customer', customerSchema);

module.exports = Customers;
