
const uniqueByKey = (arr, key) =>
  [...new Map(arr.map(item => [item[key], item])).values()];
module.exports = uniqueByKey;
