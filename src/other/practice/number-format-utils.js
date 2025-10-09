/**
 * Formats a number by adding commas as thousands separators.
 * @param {number} num The number to format.
 * @returns {string} The formatted number as a string.
 */
export const formatNumber = (num) => {
  if (typeof num !== 'number') {
    return String(num);
  }
  return num.toLocaleString();
};
