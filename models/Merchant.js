var mongoose = require ("mongoose");

var MerchantSchema = new mongoose.Schema({
    name: {
        type: String,
        //will not create object if "name" isn't entered in.
        required: true,
    },
    category: {
        type: String,
        required: true
    }, 
    logo: {
        type: String,
        required: false
    },
    streetaddress: {
        default: null,
        type: String,
        //property will still be created but will not have anythingn in it.
        required: false
    },
      state: {
        default: null,
        type: String,
        required: false
    },
      zipcode: {
        default: null,
        type: String,
        required: false
    },
     deal: {
        default: null,
        type: String,
        required: false
     }


})

var Merchant = mongoose.model('Merchant', MerchantSchema);
module.exports = Merchant;