/**
 * Generates a random number between `min` and `max` (inclusive).
 * If `min` is greater than `max`, they are swapped.
 *
 * @param {number} min The minimum value (inclusive).
 * @param {number} max The maximum value (inclusive).
 * @returns {number} A random number within the specified range.
 */
function randomNumberInRange(min, max) {
  if (min > max) {
    [min, max] = [max, min]; // Swap min and max
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = { randomNumberInRange };