const { items } = require("../data");
const find = require("../find");

let condition = 0;

const answer = find(items, function (item) {
  if (item > condition) {
    return true;
  }
});
console.log(answer);
