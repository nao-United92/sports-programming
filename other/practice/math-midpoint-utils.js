/**
 * Calculates the midpoint between two points in 2D or 3D space.
 * 
 * @param {Array<number>} p1 - Coordinates of first point [x, y, z...].
 * @param {Array<number>} p2 - Coordinates of second point [x, y, z...].
 * @returns {Array<number>} The coordinates of the midpoint. Returns empty array if dimensions differ.
 */
function midpoint(p1, p2) {
  if (p1.length !== p2.length) return [];
  return p1.map((val, i) => (val + p2[i]) / 2);
}

module.exports = midpoint;
