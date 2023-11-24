const items = require("./data");

function find(items, callback) {
  for (let index = 0; index < items.length; index++) {
    let checkCondition = callback(items[index]);
    if (checkCondition === true) {
      return items[index];
    }
  }
  return undefined;
}

module.exports = find;
