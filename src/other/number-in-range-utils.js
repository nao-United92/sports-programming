/**
 * Checks if `n` is between `start` and up to, but not including, `end`.
 * If `end` is not specified, it's set to `start` with `start` then set to 0.
 * If `start` is greater than `end` the params are swapped to support negative ranges.
 *
 * @param {number} number The number to check.
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
 */
function inRange(number, start, end) {
  if (end === undefined) {
    end = start;
    start = 0;
  }
  return number >= Math.min(start, end) && number < Math.max(start, end);
}

module.exports = { inRange };
