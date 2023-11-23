const { each } = require("../each");
const items = [1, 2, 3, 4, 5, 5];

each(items, function (item, index) {
  console.log(`Item: ${item}, Index: ${index}`);
});
