const items = require("../data");
const find = require("../find");

let condition = 10;

const answer = find(items, function (item) {
  if (item > condition) {
    return true;
  }
});
console.log(answer);
