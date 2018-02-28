var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var CodesSchema = new Schema({
  code: {
    type: String,
    required: true,
    index: true
  },
  available: {
    type: Boolean,
    required: true,
    default: true
  }
});

// This creates our model from the above schema, using mongoose's model method
var Codes = mongoose.model("Codes", CodesSchema);

// Export the Codes model
module.exports = Codes;
