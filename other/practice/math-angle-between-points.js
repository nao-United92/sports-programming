/**
 * Calculates the angle (in degrees) between three points: A, B, and C.
 * The angle is at point B.
 * @param {Object} a - Point A {x, y}.
 * @param {Object} b - Point B {x, y}.
 * @param {Object} c - Point C {x, y}.
 * @returns {number} The angle in degrees.
 */
function mathAngleBetweenPoints(a, b, c) {
  const ba = { x: a.x - b.x, y: a.y - b.y };
  const bc = { x: c.x - b.x, y: c.y - b.y };

  const dotProduct = ba.x * bc.x + ba.y * bc.y;
  const magBA = Math.sqrt(ba.x * ba.x + ba.y * ba.y);
  const magBC = Math.sqrt(bc.x * bc.x + bc.y * bc.y);

  if (magBA === 0 || magBC === 0) return 0;

  const cosTheta = dotProduct / (magBA * magBC);
  // Handle floating point precision
  const clampedCosTheta = Math.max(-1, Math.min(1, cosTheta));
  
  return (Math.acos(clampedCosTheta) * 180) / Math.PI;
}

module.exports = mathAngleBetweenPoints;
