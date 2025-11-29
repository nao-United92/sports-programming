// src/other/number-formatting-utils.js

/**
 * Formats a number with commas as thousands separators.
 *
 * @param {number} num The number to format.
 * @returns {string} The formatted number string.
 */
const formatNumberWithCommas = (num) => {
  if (typeof num !== 'number' || isNaN(num)) {
    return String(num); // Return original value as string for non-numbers or NaN
  }
  return num.toLocaleString();
};

module.exports = {
  formatNumberWithCommas,
};
