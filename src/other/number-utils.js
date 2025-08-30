/**
 * Checks if a number is between a start and end number.
 * The start is inclusive, and the end is exclusive.
 * If `end` is not specified, the range is from 0 to `start`.
 * @param {number} number The number to check.
 * @param {number} start The start of the range.
 * @param {number} [end] The end of the range.
 * @returns {boolean} Returns `true` if the number is in the range, else `false`.
 */
const inRange = (number, start, end) => {
  if (end === undefined) {
    end = start;
    start = 0;
  }
  return number >= Math.min(start, end) && number < Math.max(start, end);
};

/**
 * Produces a random number between the inclusive lower and upper bounds.
 * If only one argument is provided, a number between 0 and the given number is returned.
 * If `floating` is true, or if either `lower` or `upper` are floats, a floating-point number is returned.
 * @param {number} [lower=0] The lower bound.
 * @param {number} [upper=1] The upper bound.
 * @param {boolean} [floating=false] Specify returning a floating-point number.
 * @returns {number} Returns the random number.
 */
const random = (lower = 0, upper = 1, floating = false) => {
  if (floating || String(lower).includes('.') || String(upper).includes('.')) {
    const min = Math.min(lower, upper);
    const max = Math.max(lower, upper);
    return Math.random() * (max - min) + min;
  }

  const min = Math.ceil(Math.min(lower, upper));
  const max = Math.floor(Math.max(lower, upper));
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports = {
  inRange,
  random,
};