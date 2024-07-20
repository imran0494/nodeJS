const mongoose = require("mongoose");

const personShema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  address: {
    street: { type: String },
    city: { type: String },
    state: { type: String },
    zipCode: { type: Number },
  },
  work: { type: String, enum: ["chef", "manager", "waiter"] },
  mobile:{type: Number},
  salary:{type: Number},
  
});

module.exports = mongoose.model("Person", personShema);
