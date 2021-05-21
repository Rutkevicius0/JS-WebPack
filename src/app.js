import add from "./js/add.js";
import say from "./js/say.js";
import "./css/style.css";
import banner from "./components/banner/ban";
import aside from "./components/aside/aside";
import modal from "./components/modal/modal";

import wz from "./img/download.jpeg";
// const path = require("path");
// console.log("path", path.resolve(__dirname));
console.log("wz", wz);

console.log("add", add(1, 2, 3));

console.log(say("whats up biatch"));

const obj = {
  age: 30,
  name: "Bob",
};

const copy = { ...obj, gender: "male" };

console.log(copy);

const bestBanner = banner("Laba diena", "Click me!");
document.body.append(bestBanner);

const bestAside = aside("List", "Click me!");
document.body.append(bestAside);

document.querySelector(".aside__button").addEventListener("click", (event) => {
  console.log(event.target.previousSibling.previousSibling.textContent);
});

document.querySelector(".modal-open__button").addEventListener("click", () => {
  console.log("veikia");
  modal();
});
