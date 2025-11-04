/**
 * Formats a number with commas as thousands separators.
 * @param {number} number The number to format.
 * @returns {string} The formatted number string.
 */
export const formatWithCommas = (number) => {
  if (typeof number !== 'number') {
    return String(number);
  }
  const parts = number.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
};
