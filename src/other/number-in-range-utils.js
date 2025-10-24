/**
 * Checks if `number` is between `start` and `end` (exclusive of `end`).
 * If `end` is not specified, it's set to `start` and `start` is set to `0`.
 * If `start` is greater than `end` the parameters are swapped to support negative ranges.
 *
 * @param {number} number The number to check.
 * @param {number} start The start of the range.
 * @param {number} [end] The end of the range.
 * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
 */
export const inRange = (number, start, end) => {
  if (typeof number !== 'number' || typeof start !== 'number') {
    return false;
  }

  if (end === undefined) {
    end = start;
    start = 0;
  }

  if (start > end) {
    const temp = start;
    start = end;
    end = temp;
  }

  return number >= start && number < end;
};