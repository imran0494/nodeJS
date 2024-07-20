// // // // function add(a,b){
// // // //     return a + b;
// // // // }

// // // // var add = function(a,b){
// // // //     return a+b;
// // // // }

// // // var add = (a,b,prince)=>{
// // //     console.log(a+b)
// // //     prince()
// // // }

// // // add(4,6, ()=>{console.log("callback function")})

// // // // console.log(add(2,3)); // 5
// // // // console.log(add(4,6))

// // var fs = require("fs");
// // var os = require("os");

// // var user = os.userInfo();
// // // console.log(user);

// // fs.appendFile("greating.txt", "Hello " + user.username + "! \n", () => {
// //   console.log("Good morning");
// // });

// const note = require("./notes.js");
// console.log(note.age);
// console.log(note.addBumber(note.age, 15));

// var _ = require("lodash");

// let arr = [1, 2, 3, 4, 2, 5, 1, 3];
// var filter = _.uniq(arr);
// console.log(filter);

// const jsonString = {
//   name: "Madame Uppercut",
//   age: 39,
//   secretIdentity: "Jane Wilson",
//   powers: "Million tonne punch",
// };
// const json = JSON.stringify(jsonString);
// console.log(json);

// const parsedJson = {
//     "name": "Madame Uppercut",
//       "age": 39,
//       "secretIdentity": "Jane Wilson",
//       "powers":"mirzapur"
// }
// console.log(parsedJson);

// console.log(typeof parsedJson);
// console.log(typeof json);

const express = require("express");
const app = express();
const db = require("./db.js");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Hello, Welcome to our hotel");
});

app.get("/chicken", function (req, res) {
  res.send("give me butter chicken");
});

const menuRoutes = require("./routes/menuRoutes");
app.use("/menuItem", menuRoutes);

const personRoutes = require("./routes/personroutes");
app.use("/person", personRoutes);

app.listen(3000, (req, res) => {
  console.log("server is running on port 3000");
});
