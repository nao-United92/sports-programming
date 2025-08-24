export const clamp = (number, lower, upper) => {
  return Math.max(lower, Math.min(number, upper));
};

/**
 * Checks if a number is between a start and end value (exclusive of end).
 * If end is not specified, start is set to 0.
 *
 * @param {number} number The number to check.
 * @param {number} start The start of the range.
 * @param {number} [end] The end of the range (exclusive).
 * @returns {boolean} Returns true if the number is in the range, else false.
 */
export const inRange = (number, start, end) => {
  if (typeof number !== 'number' || isNaN(number)) {
    return false;
  }

  if (end === undefined) {
    end = start;
    start = 0;
  }

  // Swap start and end if start is greater than end
  if (start > end) {
    [start, end] = [end, start];
  }

  return number >= start && number < end;
};

