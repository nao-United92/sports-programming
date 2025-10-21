/**
 * Checks if a string is a valid email address.
 * @param {string} str The string to check.
 * @returns {boolean} True if the string is a valid email, false otherwise.
 */
export const isEmail = (str) => {
  if (typeof str !== 'string') {
    return false;
  }
  // A simple regex for email validation, not fully RFC 5322 compliant but good enough for most cases.
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(str);
};

/**
 * Checks if a string is a valid URL.
 * @param {string} str The string to check.
 * @returns {boolean} True if the string is a valid URL, false otherwise.
 */
export const isURL = (str) => {
  if (typeof str !== 'string') {
    return false;
  }
  try {
    new URL(str);
    return true;
  } catch (e) {
    return false;
  }
};