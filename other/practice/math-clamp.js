/**
 * Clamps a number within the inclusive lower and upper bounds.
 * @param {number} number - The number to clamp.
 * @param {number} lower - The lower bound.
 * @param {number} upper - The upper bound.
 * @returns {number} - The clamped number.
 */
function clamp(number, lower, upper) {
  return Math.min(Math.max(number, lower), upper);
}

module.exports = clamp;
