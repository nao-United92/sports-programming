// src/other/validation-utils.js

/**
 * Checks if a string is a valid email address.
 *
 * @param {string} email The string to validate.
 * @returns {boolean} True if the string is a valid email address, false otherwise.
 */
const isEmail = (email) => {
  if (typeof email !== 'string') {
    return false;
  }
  // A simple regex for email validation. More robust validation might be needed for production.
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

module.exports = {
  isEmail,
};