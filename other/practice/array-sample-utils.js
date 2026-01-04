const { shuffle } = require('./array-shuffle-utils');

const sample = (arr) => arr[Math.floor(Math.random() * arr.length)];

const sampleSize = (arr, n = 1) => {
  const shuffled = shuffle(arr);
  return shuffled.slice(0, Math.max(0, n));
};

module.exports = { sample, sampleSize };