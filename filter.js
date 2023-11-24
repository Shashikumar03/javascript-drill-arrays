function filter(items, callback) {
  const answer = [];
  for (let index = 0; index < items.length; index++) {
    if (callback(items[index]) == true) {
      answer.push(items[index]);
    }
  }
  return answer;
}
module.exports = filter;
