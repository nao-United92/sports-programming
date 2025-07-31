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

/**
 * Rounds a number to a specified number of decimal places.
 * @param {number} num The number to round.
 * @param {number} decimalPlaces The number of decimal places to round to.
 * @returns {number} The rounded number.
 */
export function roundToDecimalPlace(num, decimalPlaces) {
  if (!isNumber(num) || !isNumber(decimalPlaces) || decimalPlaces < 0) {
    return NaN;
  }
  const factor = Math.pow(10, decimalPlaces);
  return Math.round(num * factor) / factor;
}

/**
 * Checks if a number is divisible by another number.
 * @param {number} num The number to check.
 * @param {number} divisor The number to divide by.
 * @returns {boolean} True if the number is divisible by the divisor, false otherwise.
 */
export function isDivisibleBy(num, divisor) {
  return isNumber(num) && isNumber(divisor) && divisor !== 0 && num % divisor === 0;
}

/**
 * Formats a number as a currency string.
 * @param {number} num The number to format.
 * @param {string} currency The currency symbol (e.g., '$', '€').
 * @param {number} [decimals=2] The number of decimal places.
 * @returns {string} The formatted currency string.
 */
export function toCurrency(num, currency = '$', decimals = 2) {
  if (!isNumber(num)) {
    return '';
  }
  return `${currency}${num.toFixed(decimals)}`;
}

/**
 * Formats a number as a currency string.
 * @param {number} num The number to format.
 * @param {string} currency The currency symbol (e.g., '$', '€').
 * @param {number} [decimals=2] The number of decimal places.
 * @returns {string} The formatted currency string.
 */
export function formatCurrency(num, currency = '$', decimals = 2) {
  if (!isNumber(num)) {
    return '';
  }
  return `${currency}${num.toFixed(decimals)}`;
}

/**
 * Adds commas to a number for thousands separation.
 * @param {number} num The number to format.
 * @returns {string} The number with commas.
 */
export function addCommas(num) {
  if (!isNumber(num)) {
    return '';
  }
  const parts = num.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
}

/**
 * Checks if a value is an integer.
 * @param {*} value The value to check.
 * @returns {boolean} True if the value is an integer, false otherwise.
 */
export function isInteger(value) {
  return Number.isInteger(value);
}

/**
 * Checks if a number is positive.
 * @param {number} num The number to check.
 * @returns {boolean} True if the number is positive, false otherwise.
 */
export function isPositive(num) {
  return typeof num === 'number' && num > 0;
}

/**
 * Checks if a number is negative.
 * @param {number} num The number to check.
 * @returns {boolean} True if the number is negative, false otherwise.
 */
export function isNegative(num) {
  return typeof num === 'number' && num < 0;
}

/**
 * Converts a number to its ordinal representation (e.g., 1st, 2nd, 3rd).
 * @param {number} num The number to convert.
 * @returns {string} The ordinal string.
 */
export function toOrdinal(num) {
  if (typeof num !== 'number' || !Number.isInteger(num)) {
    return String(num);
  }
  const s = ['th', 'st', 'nd', 'rd'];
  const v = num % 100;
  return num + (s[(v - 20) % 10] || s[v] || s[0]);
}

/**
 * Calculates the sum of numbers.
 * @param {...number} numbers The numbers to sum.
 * @returns {number} The sum of the numbers.
 */
export function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + (isNumber(num) ? num : 0), 0);
}

/**
 * Checks if a number is a power of two.
 * @param {number} num The number to check.
 * @returns {boolean} True if the number is a power of two, false otherwise.
 */
export function isPowerOfTwo(num) {
  return num > 0 && (num & (num - 1)) === 0;
}

/**
 * Checks if a number is between two other numbers (inclusive).
 *
 * @param {number} num The number to check.
 * @param {number} a The first bound.
 * @param {number} b The second bound.
 * @returns {boolean} True if the number is between the bounds, false otherwise.
 */
export function isBetween(num, a, b) {
  if (!isNumber(num) || !isNumber(a) || !isNumber(b)) {
    return false;
  }
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  return num >= min && num <= max;
}