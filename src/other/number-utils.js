/**
 * Checks if a number is even.
 *
 * @param {number} num The number to check.
 * @returns {boolean} True if the number is even, false otherwise.
 */
export const isEven = (num) => num % 2 === 0;

/**
 * Checks if a number is odd.
 *
 * @param {number} num The number to check.
 * @returns {boolean} True if the number is odd, false otherwise.
 */
export const isOdd = (num) => num % 2 !== 0;

/**
 * Generates a random number within a given range.
 *
 * @param {number} min The minimum value of the range.
 * @param {number} max The maximum value of the range.
 * @returns {number} A random number between min and max (inclusive).
 */
export const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * Clamps `number` within the inclusive `lower` and `upper` bounds.
 *
 * @param {number} number The number to clamp.
 * @param {number} lower The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 */
export function clamp(number, lower, upper) {
  return Math.max(lower, Math.min(number, upper));
}

/**
 * Checks if `number` is between `start` and `end` (exclusive of `end`).
 *
 * @param {number} number The number to check.
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
 */
export function inRange(number, start, end) {
  return number >= start && number < end;
}
