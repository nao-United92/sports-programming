/**
 * Checks if a string is a valid email address.
 * @param {string} email The string to validate.
 * @returns {boolean} True if the string is a valid email, false otherwise.
 */
export function isValidEmail(email) {
  if (typeof email !== 'string') {
    return false;
  }
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailRegex.test(email);
}

/**
 * Checks if a string is a valid URL.
 * @param {string} url The string to validate.
 * @returns {boolean} True if the string is a valid URL, false otherwise.
 */
export function isValidUrl(url) {
  if (typeof url !== 'string') {
    return false;
  }
  try {
    new URL(url);
    return true;
  } catch (_) {
    return false;
  }
}