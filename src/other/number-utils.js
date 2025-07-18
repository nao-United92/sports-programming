/**
 * Checks if a value is a number.
 *
 * @param value The value to check.
 * @returns True if the value is a number, false otherwise.
 */
export function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}

/**
 * Clamps a number between a minimum and maximum value.
 *
 * @param num The number to clamp.
 * @param min The minimum allowed value.
 * @param max The maximum allowed value.
 * @returns The clamped number.
 */
export function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
}

/**
 * Generates a random integer within a specified range (inclusive).
 *
 * @param min The minimum value (inclusive).
 * @param max The maximum value (inclusive).
 * @returns A random integer.
 */
export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Formats a number with a specified number of decimal places.
 *
 * @param num The number to format.
 * @param decimals The number of decimal places.
 * @returns The formatted number as a string.
 */
export function formatNumber(num, decimals) {
    if (!isNumber(num)) {
        return '';
    }
    return num.toFixed(decimals);
}

/**
 * Checks if a number is even.
 *
 * @param num The number to check.
 * @returns True if the number is even, false otherwise.
 */
export function isEven(num) {
  return isNumber(num) && num % 2 === 0;
}

/**
 * Checks if a number is odd.
 *
 * @param num The number to check.
 * @returns True if the number is odd, false otherwise.
 */
export function isOdd(num) {
  return isNumber(num) && num % 2 !== 0;
}

/**
 * Converts a number to a percentage string.
 * @param {number} num The number to convert.
 * @param {number} [decimals=0] The number of decimal places to include.
 * @returns {string} The percentage string.
 */
export function toPercentage(num, decimals = 0) {
  if (!isNumber(num)) {
    return '';
  }
  return `${(num * 100).toFixed(decimals)}%`;
}

/**
 * Checks if a number is within a specified range (inclusive).
 * @param {number} num The number to check.
 * @param {number} min The minimum value of the range.
 * @param {number} max The maximum value of the range.
 * @returns {boolean} True if the number is within the range, false otherwise.
 */
export function isInRange(num, min, max) {
  return isNumber(num) && num >= min && num <= max;
}