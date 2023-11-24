const items = require("../data");
const find = require("../find");

let condition = 20;

const answer = find(items, function (item, condition) {
  if (item > condition) {
    return true;
  }
},condition);
console.log(answer);
