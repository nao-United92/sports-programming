/**
 * Checks if a number is between two numbers.
 * If `end` is not specified, it's set to `start` with `start` becoming `0`.
 * If `start` is greater than `end` the params are swapped to support negative ranges.
 *
 * @param {number} number The number to check.
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @returns {boolean} `true` if the number is in the range, else `false`.
 */
export const inRange = (number, start, end) => {
  if (end === undefined) {
    end = start;
    start = 0;
  }
  if (start > end) {
    [start, end] = [end, start];
  }
  return number >= start && number < end;
};