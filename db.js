const mongoose = require("mongoose");

//MongoDB url
// const mongodbURL = "mongodb://127.0.0.1:27017/hotels";

require("dotenv").config();

const mongodbURL = process.env.DB_URL;

//setup mongodb connection
mongoose.connect(mongodbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Get the default connection
//Mongoose maintains a default connection object representing the MongoDB connection
const db = mongoose.connection;

//Define event listeners for the database connection
db.on("error", (error) => console.error(error));

db.on("connected", () => console.log("Connected to MongoDB"));

db.on("diconnected", () => console.log("Diconnected MongoDB"));

module.exports = db;
