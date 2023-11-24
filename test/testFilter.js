const { items } = require("../data");
const filter = require("../filter");
const condition = 3;

const answer = filter(items, function (item) {
  return item > condition ? true : false;
});
console.log(answer);
