/**
 * Produces a random number between the inclusive `lower` and `upper` bounds.
 * If only one argument is provided, a number between 0 and the given number is returned.
 * If `floating` is `true`, or either `lower` or `upper` are floats, a floating-point
 * number is returned instead of an integer.
 *
 * @param {number} [lower=0] The lower bound.
 * @param {number} [upper=1] The upper bound.
 * @param {boolean} [floating] Specify returning a floating-point number.
 * @returns {number} Returns the random number.
 */
export const random = (lower = 0, upper = 1, floating = false) => {
  if (upper === undefined) {
    upper = lower;
    lower = 0;
  }

  if (floating || String(lower).includes('.') || String(upper).includes('.')) {
    const value = Math.random() * (upper - lower) + lower;
    return value;
  }

  const intLower = Math.ceil(lower);
  const intUpper = Math.floor(upper);
  return Math.floor(Math.random() * (intUpper - intLower + 1)) + intLower;
};