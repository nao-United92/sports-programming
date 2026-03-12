const randomInt = (min, max) => {
  if (typeof min !== 'number' || typeof max !== 'number') {
    throw new Error('Inputs must be numbers');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports = randomInt;
