const map = require("../map");

const items = [1, 2, 3, 4, 5, 5];

const answer = map(items, function (item) {
  return item * item;
});
console.log(answer);
