/**
 * Clamps a number within the inclusive lower and upper bounds.
 *
 * @param {number} number The number to clamp.
 * @param {number} lower The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 */
export const clamp = (number, lower, upper) => {
  return Math.max(lower, Math.min(number, upper));
};

/**
 * Checks if a number is between two numbers, inclusive.
 *
 * @param {number} number The number to check.
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @returns {boolean} Returns `true` if the number is in the range, else `false`.
 */
export const inRange = (number, start, end) => {
  if (end === undefined) {
    end = start;
    start = 0;
  }
  if (start > end) {
    [start, end] = [end, start];
  }
  return number >= start && number <= end;
};

/**
 * Generates a random integer within a given range, inclusive.
 *
 * @param {number} min The minimum value.
 * @param {number} max The maximum value.
 * @returns {number} Returns the random integer.
 */
export const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
