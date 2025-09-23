/**
 * Checks if a value is an array containing only strings.
 *
 * @param {any} value The value to check.
 * @returns {boolean} True if the value is an array of strings, false otherwise.
 */
export function isArrayOfStrings(value) {
  return Array.isArray(value) && value.every(item => typeof item === 'string');
}

/**
 * Checks if a value is an array containing only numbers.
 *
 * @param {any} value The value to check.
 * @returns {boolean} True if the value is an array of numbers, false otherwise.
 */
export function isArrayOfNumbers(value) {
  return Array.isArray(value) && value.every(item => typeof item === 'number');
}
