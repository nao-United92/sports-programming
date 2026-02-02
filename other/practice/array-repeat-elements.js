const repeatElements = (arr, times) =>
  arr.flatMap(item => Array(times).fill(item));

module.exports = repeatElements;
