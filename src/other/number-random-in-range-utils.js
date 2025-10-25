
/**
 * Generates a random number within a specified range (inclusive).
 *
 * @param {number} min The minimum value of the range.
 * @param {number} max The maximum value of the range.
 * @returns {number} A random number between min and max.
 */
const randomInRange = (min, max) => {
  if (typeof min !== 'number' || typeof max !== 'number') {
    throw new Error('Both min and max must be numbers.');
  }
  if (min > max) {
    throw new Error('min cannot be greater than max.');
  }
  return Math.random() * (max - min) + min;
};

/**
 * Generates a random integer within a specified range (inclusive).
 *
 * @param {number} min The minimum integer value of the range.
 * @param {number} max The maximum integer value of the range.
 * @returns {number} A random integer between min and max.
 */
const randomIntInRange = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (typeof min !== 'number' || typeof max !== 'number') {
    throw new Error('Both min and max must be numbers.');
  }
  if (min > max) {
    throw new Error('min cannot be greater than max.');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports = { randomInRange, randomIntInRange };
