/**
 * Produces a random number between the inclusive `lower` and `upper` bounds.
 * If only one argument is provided, a number between 0 and that number is returned.
 * If `floating` is `true`, or either `lower` or `upper` are floats, a floating-point number is returned.
 *
 * @param {number} [lower=0] The lower bound.
 * @param {number} [upper=1] The upper bound.
 * @param {boolean} [floating] Specify returning a floating-point number.
 * @returns {number} Returns the random number.
 */
export const random = (lower = 0, upper = 1, floating) => {
  if (upper === undefined) {
    upper = lower;
    lower = 0;
  }

  if (floating || lower % 1 || upper % 1) {
    const rand = Math.random();
    return Math.min(lower + (rand * (upper - lower + parseFloat('1e-' + ((rand + '').length - 1)))), upper);
  }

  return lower + Math.floor(Math.random() * (upper - lower + 1));
};