function flatten(nestedArray, callback) {
    let flattenArray;
  for (let i = 0; i < nestedArray.length; i++) {
    flattenArray = callback(nestedArray[i]);
  }
  return flattenArray;
}

module.exports = flatten;
