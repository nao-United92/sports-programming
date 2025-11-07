/**
 * Clamps `number` within the inclusive `lower` and `upper` bounds.
 *
 * @param {number} number The number to clamp.
 * @param {number} [lower=0] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 */
export const clamp = (number, lower, upper) => {
  lower = lower == null ? 0 : +lower;
  upper = upper == null ? 0 : +upper;
  if (lower > upper) {
    const temp = lower;
    lower = upper;
    upper = temp;
  }
  if (number < lower) {
    return lower;
  }
  if (number > upper) {
    return upper;
  }
  return number;
};