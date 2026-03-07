/**
 * Converts degrees to radians.
 * 
 * @param {number} deg - The angle in degrees.
 * @returns {number} The angle in radians.
 */
function degreesToRadians(deg) {
  return deg * (Math.PI / 180);
}

module.exports = degreesToRadians;
