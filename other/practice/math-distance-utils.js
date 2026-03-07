/**
 * Calculates the Euclidean distance between two points in 2D or 3D space.
 * 
 * @param {Array<number>} p1 - Coordinates of first point [x, y, z...].
 * @param {Array<number>} p2 - Coordinates of second point [x, y, z...].
 * @returns {number} The distance.
 */
function distance(p1, p2) {
  if (p1.length !== p2.length) return 0;
  const squaredSum = p1.reduce((acc, val, i) => acc + Math.pow(val - p2[i], 2), 0);
  return Math.sqrt(squaredSum);
}

module.exports = distance;
