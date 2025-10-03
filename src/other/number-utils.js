/**
 * Clamps a number within an inclusive range.
 *
 * @param {number} number The number to clamp.
 * @param {number} lower The lower bound of the range.
 * @param {number} upper The upper bound of the range.
 * @returns {number} The clamped number.
 */
export const clamp = (number, lower, upper) => {
  return Math.max(lower, Math.min(number, upper));
};

/**
 * Checks if `number` is between `start` and `end` (exclusive of `end`).
 *
 * @param {number} number The number to check.
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
 */
export const inRange = (number, start, end) => {
  return number >= start && number < end;
};
