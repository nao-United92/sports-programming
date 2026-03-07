/**
 * Generates a random float within a specified range.
 * 
 * @param {number} min - Lower boundary.
 * @param {number} max - Upper boundary.
 * @returns {number} The random float.
 */
function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

module.exports = randomFloat;
