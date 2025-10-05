/**
 * Checks if a string is a valid email address.
 * @param {string} str The string to check.
 * @returns {boolean} Returns true if the string is a valid email, else false.
 */
export const isEmail = (str) => {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(String(str).toLowerCase());
};

/**
 * Checks if a string is a valid URL.
 * @param {string} str The string to check.
 * @returns {boolean} Returns true if the string is a valid URL, else false.
 */
export const isURL = (str) => {
  try {
    new URL(str);
    return true;
  } catch (e) {
    return false;
  }
};

