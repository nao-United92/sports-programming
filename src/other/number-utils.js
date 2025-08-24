/**
 * Clamps a number within the inclusive lower and upper bounds.
 * @param {number} number The number to clamp.
 * @param {number} lower The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 */
export function clamp(number, lower, upper) {
  return Math.max(lower, Math.min(number, upper));
}

/**
 * Checks if a number is between two numbers (inclusive).
 * @param {number} number The number to check.
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @returns {boolean} Returns true if the number is in the range, else false.
 */
export function inRange(number, start, end) {
  if (end === undefined) {
    end = start;
    start = 0;
  }
  return number >= Math.min(start, end) && number <= Math.max(start, end);
}
