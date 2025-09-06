/**
 * Generates a random floating-point number within a specified range.
 * @param {number} [min=0] The minimum value (inclusive).
 * @param {number} [max=1] The maximum value (exclusive).
 * @returns {number} The random number.
 */
export function random(min = 0, max = 1) {
  return Math.random() * (max - min) + min;
}

/**
 * Generates a random integer within a specified range.
 * @param {number} min The minimum value (inclusive).
 * @param {number} max The maximum value (inclusive).
 * @returns {number} The random integer.
 */
export function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Formats a number with commas as thousands separators.
 * @param {number} num The number to format.
 * @returns {string} The formatted number string.
 */
export function formatNumberWithCommas(num) {
  if (typeof num !== 'number') {
    throw new TypeError('Expected a number');
  }
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * Rounds a number to a specified number of decimal places.
 * @param {number} num The number to round.
 * @param {number} decimalPlaces The number of decimal places to round to.
 * @returns {number} The rounded number.
 */
export function roundToDecimalPlaces(num, decimalPlaces) {
  if (typeof num !== 'number' || typeof decimalPlaces !== 'number') {
    throw new TypeError('Expected number for both arguments');
  }
  const factor = 10 ** decimalPlaces;
  return Math.round(num * factor) / factor;
}
