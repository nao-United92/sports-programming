/**
 * Clamps `number` within the inclusive `lower` and `upper` bounds.
 *
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

/**
 * Checks if `number` is between `start` and up to, but not including, `end`.
 * If `end` is not specified, it's set to `start` with `start` then set to `0`.
 *
 * @param {number} number The number to check.
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
 */
const inRange = (number, start = 0, end) => {
  if (end === undefined) {
    end = start;
    start = 0;
  }

  // Swap if start is greater than end
  if (start > end) {
    [start, end] = [end, start];
  }

  return number >= start && number < end;
};

module.exports = { clamp, inRange };