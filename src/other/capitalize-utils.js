export const capitalizeFirstLetter = (string) => {
  if (typeof string !== 'string' || string.length === 0) {
    return '';
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
};

/**
 * Capitalizes the first letter of each word in a string.
 * @param {string} str The string to capitalize.
 * @returns {string} The capitalized string.
 */
export const capitalizeWords = (str) => {
  if (typeof str !== 'string' || str.length === 0) {
    return '';
  }
  return str.replace(/\b\w/g, char => char.toUpperCase());
};

/**
 * Decapitalizes the first letter of a string.
 * @param {string} string The string to decapitalize.
 * @returns {string} The decapitalized string.
 */
export const decapitalizeFirstLetter = (string) => {
  if (typeof string !== 'string' || string.length === 0) {
    return '';
  }
  return string.charAt(0).toLowerCase() + string.slice(1);
};
