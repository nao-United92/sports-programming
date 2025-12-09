/**
 * Clamps a number within an inclusive range.
 * @param {number} number The number to clamp.
 * @param {number} lower The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 */
function clamp(number, lower, upper) {
  return Math.max(lower, Math.min(number, upper));
}

/**
 * Checks if `number` is between `start` and `end` (exclusive, by default inclusive of start).
 * The `end` value is excluded from the range unless `inclusive` is true.
 * If `end` is not specified, it's defaulted to `start` and `start` is defaulted to `0`.
 * If `start` is greater than `end` the arguments are swapped to ensure the range is valid.
 *
 * @param {number} number The number to check.
 * @param {number} start The start of the range.
 * @param {number} [end] The end of the range.
 * @param {boolean} [inclusive=false] Specify whether the `end` of the range is inclusive.
 * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
 */
function inRange(number, start, end, inclusive = false) {
  if (end === undefined) {
    end = start;
    start = 0;
  }

  const actualStart = Math.min(start, end);
  const actualEnd = Math.max(start, end);

  if (inclusive) {
    return number >= actualStart && number <= actualEnd;
  } else {
    return number >= actualStart && number < actualEnd;
  }
}

module.exports = {
  clamp,
  inRange,
};