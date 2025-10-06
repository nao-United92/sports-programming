
/**
 * Converts a hexadecimal string to its number representation.
 *
 * @param {string} hexString The hexadecimal string to convert.
 * @returns {number} Returns the number representation of the hexadecimal string.
 */
export const hexToNumber = (hexString) => {
  if (typeof hexString !== 'string' || !/^[0-9a-fA-F]+$/.test(hexString)) {
    throw new Error('Input must be a valid hexadecimal string.');
  }
  return parseInt(hexString, 16);
};
