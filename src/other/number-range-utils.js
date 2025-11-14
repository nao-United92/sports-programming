/**
 * Checks if `number` is between `start` and `end` (exclusive of `end`).
 * If `end` is not specified, it's set to `start` and `start` is set to `0`.
 * If `start` is greater than `end`, the arguments are swapped to ensure the range is always valid.
 *
 * @param {number} number The number to check.
 * @param {number} [start=0] The start of the range.
 * @param {number} [end] The end of the range.
 * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
 */
export const inRange = (number, start = 0, end) => {
  if (typeof number !== 'number' || isNaN(number)) {
    return false;
  }

  if (end === undefined) {
    end = start;
    start = 0;
  }

  if (typeof start !== 'number' || isNaN(start) || typeof end !== 'number' || isNaN(end)) {
    return false; // If start or end are not valid numbers after defaulting
  }

  // Ensure start is always less than or equal to end
  if (start > end) {
    [start, end] = [end, start];
  }

  return number >= start && number < end;
};