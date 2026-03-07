/**
 * Converts radians to degrees.
 * 
 * @param {number} rad - The angle in radians.
 * @returns {number} The angle in degrees.
 */
function radiansToDegrees(rad) {
  return rad * (180 / Math.PI);
}

module.exports = radiansToDegrees;
