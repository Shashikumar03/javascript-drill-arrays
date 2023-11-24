const { items } = require("../data");
const map = require("../map");

const answers = map(items, function (item) {
  return item * item;
});
console.log(answers);
