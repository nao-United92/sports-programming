// other/practice/array-sample-utils.js

/**
 * Gets a random element from `array`.
 *
 * @param {Array} arr The array to sample.
 * @returns {*} Returns the random element.
 */
function arraySample(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return undefined;
  }
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

module.exports = arraySample;
