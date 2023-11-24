const items = require("./data");

function find(items, callback, condition) {
  for (let index = 0; index < items.length; index++) {
    let checkCondition = callback(items[index], condition);
    if (checkCondition === true) {
      return items[index];
    }
  }
  return undefined;
}

module.exports = find;
