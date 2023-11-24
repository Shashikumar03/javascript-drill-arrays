const items = require("../data");
const { each } = require("../each");

each(items, function (item, index) {
  console.log(`Item: ${item}, Index: ${index}`);
});

