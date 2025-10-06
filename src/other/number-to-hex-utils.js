
/**
 * Converts a number to its hexadecimal string representation.
 *
 * @param {number} num The number to convert.
 * @returns {string} Returns the hexadecimal string representation of the number.
 */
export const numberToHex = (num) => {
  if (!Number.isInteger(num) || num < 0) {
    throw new Error('Input must be a non-negative integer.');
  }
  return num.toString(16).toUpperCase();
};
