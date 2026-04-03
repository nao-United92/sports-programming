/**
 * Checks if a number is a perfect cube.
 * A perfect cube is an integer that can be expressed as the cube of another integer.
 *
 * @param {number} n - The number to check.
 * @returns {boolean} - True if the number is a perfect cube, false otherwise.
 */
function isCubeNumber(n) {
  if (!Number.isInteger(n)) return false;
  const root = Math.round(Math.pow(Math.abs(n), 1 / 3));
  const cube = root * root * root;
  return cube === Math.abs(n);
}

module.exports = isCubeNumber;
