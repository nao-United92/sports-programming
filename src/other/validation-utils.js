/**
 * Checks if a string is a valid email address.
 * @param {string} str The string to check.
 * @returns {boolean} True if the string is a valid email, false otherwise.
 */
export const isEmail = (str) => {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(String(str).toLowerCase());
};

/**
 * Checks if a string is a valid URL.
 * @param {string} str The string to check.
 * @returns {boolean} True if the string is a valid URL, false otherwise.
 */
export const isURL = (str) => {
  try {
    new URL(str);
    return true;
  } catch (e) {
    return false;
  }
};

/**
 * Checks if a value is a number.
 * @param {*} value The value to check.
 * @returns {boolean} True if the value is a number, false otherwise.
 */
export const isNumber = (value) => {
  return typeof value === 'number' && isFinite(value);
};

