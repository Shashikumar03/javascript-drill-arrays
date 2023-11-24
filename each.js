function each(arr, callback) {
  for (let index = 0; index < arr.length; index++) {
    callback(arr[index], index);
  }
}

module.exports = { each };
