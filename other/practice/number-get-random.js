const getRandomNumber = (min, max) => {
  if (typeof min !== 'number' || typeof max !== 'number') {
    throw new TypeError('Expected min and max to be numbers');
  }
  if (min > max) {
    throw new Error('Min cannot be greater than max');
  }
  // Math.floor(Math.random() * (max - min + 1)) + min
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports = { getRandomNumber };
