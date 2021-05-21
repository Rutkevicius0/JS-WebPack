import add from "./js/add.js";
import say from "./js/say.js";
//import "./css/style.css";
// const path = require("path");
// console.log("path", path.resolve(__dirname));

console.log("add", add(1, 2, 3));

console.log(say("whats up biatch"));

const obj = {
  age: 30,
  name: "Bob",
};

const copy = { ...obj, gender: "male" };

console.log(copy);
