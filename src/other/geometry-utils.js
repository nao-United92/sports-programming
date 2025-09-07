/**
 * Calculates the distance between two points.
 * @param {number} x1 The x-coordinate of the first point.
 * @param {number} y1 The y-coordinate of the first point.
 * @param {number} x2 The x-coordinate of the second point.
 * @param {number} y2 The y-coordinate of the second point.
 * @returns {number} The distance between the two points.
 */
export const distance = (x1, y1, x2, y2) => {
  const xDist = x2 - x1;
  const yDist = y2 - y1;
  return Math.sqrt(xDist * xDist + yDist * yDist);
};

/**
 * Converts degrees to radians.
 * @param {number} degrees The angle in degrees.
 * @returns {number} The angle in radians.
 */
export const degToRad = (degrees) => {
  return degrees * (Math.PI / 180);
};
