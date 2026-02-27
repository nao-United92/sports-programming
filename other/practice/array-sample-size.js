const shuffleFisherYates = require('./array-shuffle-fisher-yates');

const sampleSize = (array, n = 1) => {
  if (!Array.isArray(array)) return [];
  const shuffled = shuffleFisherYates(array);
  return shuffled.slice(0, n);
};

module.exports = sampleSize;
