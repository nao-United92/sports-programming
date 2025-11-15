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

/**
 * Calculates the midpoint between two points.
 *
 * @param {{x: number, y: number}} p1 The first point.
 * @param {{x: number, y: number}} p2 The second point.
 * @returns {{x: number, y: number}} The midpoint.
 */
export const midpoint = (p1, p2) => {
  return {
    x: (p1.x + p2.x) / 2,
    y: (p1.y + p2.y) / 2,
  };
};

/**
 * Calculates the angle in radians between two points.
 *
 * @param {{x: number, y: number}} p1 The first point.
 * @param {{x: number, y: number}} p2 The second point.
 * @returns {number} The angle in radians.
 */
export const angle = (p1, p2) => {
  return Math.atan2(p2.y - p1.y, p2.x - p1.x);
};
