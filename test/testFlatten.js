const { items, nestedArray } = require("../data");
const flatten = require("../flatten");

const array = [];
function callback(arr) {
  if (typeof arr == "number") {
    array.push(arr);
  } else {
    for (let index = 0; index < arr.length; index++) {
      callback(arr[index]);
    }
  }
  
  return array;
}

const answer = flatten(nestedArray, callback);

console.log(answer);
