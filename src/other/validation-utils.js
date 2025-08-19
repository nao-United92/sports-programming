/**
 * Checks if a string is a valid email address format.
 * @param {string} email The string to validate.
 * @returns {boolean} True if the string is a valid email, false otherwise.
 */
function isEmail(email) {
  if (typeof email !== 'string') {
    return false;
  }
  // A common regex for email validation. Not 100% perfect for all edge cases,
  // but covers most common scenarios.
  const emailRegex = /^[^\s@]+@^[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Checks if a string is a valid URL format.
 * @param {string} url The string to validate.
 * @returns {boolean} True if the string is a valid URL, false otherwise.
 */
function isURL(url) {
  if (typeof url !== 'string') {
    return false;
  }
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = {
  isEmail,
  isURL
};