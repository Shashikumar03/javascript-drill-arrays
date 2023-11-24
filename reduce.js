function reduce(elements, callback, startingValue) {
  if (startingValue === undefined) {
    startingValue = elements[0];
  }
  for (let index = 0; index < elements.length; index++) {
    startingValue = callback(startingValue, elements[index]);
  }

  return startingValue;
}

module.exports = reduce;
