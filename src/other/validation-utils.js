/**
 * Checks if a string is a valid email address.
 * @param {string} string The string to check.
 * @returns {boolean} True if the string is a valid email, false otherwise.
 */
export function isEmail(string) {
  // A simple regex for basic email validation
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return emailRegex.test(String(string).toLowerCase());
}

/**
 * Checks if a string contains only alphabetic characters.
 * @param {string} string The string to check.
 * @returns {boolean} True if the string contains only alphabetic characters, false otherwise.
 */
export function isAlpha(string) {
  return /^[a-zA-Z]+$/.test(string);
}

/**
 * Checks if a string contains only alphanumeric characters.
 * @param {string} string The string to check.
 * @returns {boolean} True if the string contains only alphanumeric characters, false otherwise.
 */
export function isAlphanumeric(string) {
  return /^[a-zA-Z0-9]+$/.test(string);
}