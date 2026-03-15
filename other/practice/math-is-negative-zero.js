/**
 * Checks if a value is negative zero (-0).
 * @param {*} value The value to check.
 * @returns {boolean} True if -0, false otherwise.
 */
export const isNegativeZero = (value) => value === 0 && (1 / value === -Infinity);
