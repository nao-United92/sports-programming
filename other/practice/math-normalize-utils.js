/**
 * Normalizes a value from a specific range to the 0-1 range.
 * 
 * @param {number} value - The value to normalize.
 * @param {number} min - The lower boundary of the source range.
 * @param {number} max - The upper boundary of the source range.
 * @returns {number} The normalized value.
 */
function normalize(value, min, max) {
  if (max === min) return 0;
  return (value - min) / (max - min);
}

module.exports = normalize;
