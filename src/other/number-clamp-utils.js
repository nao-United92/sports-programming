/**
 * Clamps `number` within the inclusive `lower` and `upper` bounds.
 *
 * @param {number} number The number to clamp.
 * @param {number} lower The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 */
export const clamp = (number, lower, upper) => {
  if (number === undefined) {
    return 0;
  }
  if (upper === undefined) {
    upper = lower;
    lower = 0;
  }
  if (lower > upper) {
    [lower, upper] = [upper, lower];
  }
  return Math.max(lower, Math.min(number, upper));
};
