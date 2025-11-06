/**
 * Formats a number with commas as thousands separators.
 *
 * @param {number} num The number to format.
 * @returns {string} The formatted number string.
 */
export const formatNumberWithCommas = (num) => {
  if (typeof num !== 'number' || isNaN(num)) {
    return String(num); // Return original input as string for non-numbers or NaN
  }
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
