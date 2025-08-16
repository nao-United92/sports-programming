
/**
 * Checks if a string is a valid email address.
 *
 * @param {string} str The string to check.
 * @returns {boolean} True if the string is a valid email address, false otherwise.
 */
export const isEmail = (str) => {
  // A simple regex for email validation
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(str);
};

/**
 * Checks if a string is a valid URL.
 *
 * @param {string} str The string to check.
 * @returns {boolean} True if the string is a valid URL, false otherwise.
 */
export const isUrl = (str) => {
  try {
    new URL(str);
    return true;
  } catch (_) {
    return false;
  }
};
