// src/other/validation-helpers.js

/**
 * Checks if a string meets the criteria for a strong password.
 * Criteria:
 * - Minimum 8 characters long
 * - Contains at least one uppercase letter
 * - Contains at least one lowercase letter
 * - Contains at least one number
 * - Contains at least one special character (non-alphanumeric)
 *
 * @param {string} password The password string to validate.
 * @returns {boolean} True if the password is strong, false otherwise.
 */
const isStrongPassword = (password) => {
  if (typeof password !== 'string') {
    return false;
  }

  // Minimum 8 characters long
  if (password.length < 8) {
    return false;
  }

  // Contains at least one uppercase letter
  if (!/[A-Z]/.test(password)) {
    return false;
  }

  // Contains at least one lowercase letter
  if (!/[a-z]/.test(password)) {
    return false;
  }

  // Contains at least one number
  if (!/[0-9]/.test(password)) {
    return false;
  }

  // Contains at least one special character (non-alphanumeric)
  if (!/[^A-Za-z0-9]/.test(password)) {
    return false;
  }

  return true;
};

module.exports = {
  isStrongPassword,
};
