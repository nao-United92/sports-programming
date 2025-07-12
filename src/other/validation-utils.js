/**
 * Checks if the given string is a valid email address format.
 * @param {string} email The email address to validate.
 * @returns {boolean} True if the email is valid, false otherwise.
 */
export function isValidEmail(email) {
  if (typeof email !== 'string') {
    return false;
  }
  // A simple regex for email validation. More comprehensive regex might be needed for strict validation.
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

/**
 * Checks if the given string is a valid URL format.
 * @param {string} url The URL to validate.
 * @returns {boolean} True if the URL is valid, false otherwise.
 */
export function isValidURL(url) {
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

/**
 * Checks if the given value is a number.
 * @param {*} value The value to check.
 * @returns {boolean} True if the value is a number, false otherwise.
 */
export function isNumeric(value) {
  return typeof value === 'number' && !isNaN(value);
}

/**
 * Checks if a number is within a specified range (inclusive).
 * @param {number} value The number to check.
 * @param {number} min The minimum allowed value.
 * @param {number} max The maximum allowed value.
 * @returns {boolean} True if the number is within the range, false otherwise.
 */
export function isWithinRange(value, min, max) {
  if (!isNumeric(value) || !isNumeric(min) || !isNumeric(max)) {
    return false;
  }
  return value >= min && value <= max;
}