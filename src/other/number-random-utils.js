/**
 * Generates a random number between `lower` and `upper` (inclusive).
 * If only one argument is provided, it generates a random number between `0` and that argument.
 * If `floating` is `true`, a floating-point number is returned instead of an integer.
 *
 * @param {number} [lower=0] The lower bound.
 * @param {number} [upper=1] The upper bound.
 * @param {boolean} [floating=false] Specify returning a floating-point number.
 * @returns {number} Returns the random number.
 */
const random = (lower = 0, upper = 1, floating = false) => {
  if (upper === 1 && typeof lower === 'boolean') {
    floating = lower;
    lower = 0;
    upper = 1;
  } else if (upper === undefined || typeof upper === 'boolean') {
    floating = upper === true;
    upper = lower;
    lower = 0;
  }

  if (lower > upper) {
    [lower, upper] = [upper, lower];
  }

  const rand = Math.random();
  if (floating) {
    return lower + rand * (upper - lower);
  }

  // For integers, upper is inclusive
  return Math.floor(lower + rand * (upper - lower + 1));
};

module.exports = { random };
