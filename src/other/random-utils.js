/**
 * Produces a random number between the inclusive `lower` and `upper` bounds.
 *
 * @param {number} lower The lower bound.
 * @param {number} upper The upper bound.
 * @param {boolean} [floating=false] Specify returning a floating-point number.
 * @returns {number} Returns the random number.
 */
export const random = (lower, upper, floating = false) => {
  if (lower > upper) {
    [lower, upper] = [upper, lower];
  }
  if (floating) {
    return Math.random() * (upper - lower) + lower;
  }
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
};