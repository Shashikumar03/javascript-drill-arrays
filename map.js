function map(item, callback) {
  let answer = [];
  for (let index = 0; index < item.length; index++) {
    answer.push(callback(item[index]));
  }
  return answer;
}
module.exports = map;
