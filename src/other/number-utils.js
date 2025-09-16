/**
 * Checks if a number is between two numbers.
 * @param {number} number The number to check.
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
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
 * Produces a random number between the inclusive `lower` and `upper` bounds.
 * @param {number} lower The lower bound.
 * @param {number} upper The upper bound.
 * @param {boolean} [floating] Specify returning a floating-point number.
 * @returns {number} Returns the random number.
 */
const random = (lower, upper, floating = false) => {
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

module.exports = { inRange, random };