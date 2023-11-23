const map = require("../map");

const items = [1, 2, 3, 4, 5, 5];

const answers1 = map(items, function (item) {
  return item * item;
});
console.log(answers1);
