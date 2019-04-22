var mongoose = require("mongoose");
var Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;
const Genders = ["male", "female"];
var customerSchema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: Genders
  },
  email: {
    type: String,
    required: true
  },
  address: String,
  city: String,
  state: String,
  ordertotal: Currency
});


var Customers = mongoose.model('customer', customerSchema);

module.exports = Customers;
