/**
 * Clamps a number within the inclusive lower and upper bounds.
 *
 * @param {number} number The number to clamp.
 * @param {number} lower The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 */
function clamp(number, lower, upper) {
  return Math.max(lower, Math.min(number, upper));
}

module.exports = { clamp };