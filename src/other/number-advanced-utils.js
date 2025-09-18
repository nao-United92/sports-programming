
/**
 * Clamps a number between an upper and lower bound.
 * @param {number} value The number to clamp.
 * @param {number} min The lower bound.
 * @param {number} max The upper bound.
 * @returns {number} The clamped number.
 */
export function clamp(value, min, max) {
  return Math.max(min, Math.min(value, max));
}

/**
 * Rounds a number to a specified number of decimal places.
 * @param {number} value The number to round.
 * @param {number} decimalPlaces The number of decimal places to round to.
 * @returns {number} The rounded number.
 */
export function roundToDecimal(value, decimalPlaces) {
  if (typeof value !== 'number' || typeof decimalPlaces !== 'number' || decimalPlaces < 0) {
    return NaN;
  }
  const multiplier = Math.pow(10, decimalPlaces);
  return Math.round(value * multiplier) / multiplier;
}

/**
 * Generates a random integer within a specified range (inclusive).
 * @param {number} min The minimum value (inclusive).
 * @param {number} max The maximum value (inclusive).
 * @returns {number} A random integer within the range.
 */
export function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Checks if a number is even.
 * @param {number} num The number to check.
 * @returns {boolean} True if the number is even, false otherwise.
 */
export function isEven(num) {
  return typeof num === 'number' && num % 2 === 0;
}

/**
 * Checks if a number is odd.
 * @param {number} num The number to check.
 * @returns {boolean} True if the number is odd, false otherwise.
 */
export function isOdd(num) {
  return typeof num === 'number' && num % 2 !== 0;
}

/**
 * Linearly interpolates between two numbers.
 * @param {number} a The start value.
 * @param {number} b The end value.
 * @param {number} t The interpolation amount (0.0 to 1.0).
 * @returns {number} The interpolated value.
 */
export function lerp(a, b, t) {
  return a + (b - a) * t;
}
