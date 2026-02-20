/**
 * Clamps a number within the inclusive lower and upper bounds.
 *
 * @param {number} number - The number to clamp.
 * @param {number} lower - The lower bound.
 * @param {number} upper - The upper bound.
 * @returns {number} The clamped number.
 */
export const clamp = (number, lower, upper) => {
  return Math.max(lower, Math.min(number, upper));
};
