// models/Location.js
const mongoose = require('mongoose');



const LocationSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String }
});

  

const Location = mongoose.model("Location",LocationSchema)
module.exports = Location;

