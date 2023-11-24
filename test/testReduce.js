const { items } = require("../data");
const reduce = require("../reduce");

const answer = reduce(items, function (accumudator, current) {
  return accumudator + current;
},0);

console.log(answer);
