/**
 * Clamps a number within the inclusive lower and upper bounds.
 * @param {number} number The number to clamp.
 * @param {number} lower The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 */
const clamp = (number, lower, upper) => {
  const min = Math.min(lower, upper);
  const max = Math.max(lower, upper);
  return Math.max(min, Math.min(number, max));
};

module.exports = { clamp };
