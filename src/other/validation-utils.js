
/**
 * Checks if a string is a valid email address format.
 * @param {string} email The email string to validate.
 * @returns {boolean} True if the email is valid, false otherwise.
 */
export function isValidEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

/**
 * Checks if a string is a valid URL format.
 * @param {string} url The URL string to validate.
 * @returns {boolean} True if the URL is valid, false otherwise.
 */
export function isValidURL(url) {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * Checks if a value is numeric.
 * @param {*} value The value to check.
 * @returns {boolean} True if the value is numeric, false otherwise.
 */
export function isNumeric(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}

/**
 * Checks if a password meets certain strength criteria.
 * Requires at least 8 characters, one uppercase, one lowercase, one number, and one special character.
 * @param {string} password The password string to validate.
 * @returns {boolean} True if the password is strong, false otherwise.
 */
export function isStrongPassword(password) {
  const minLength = 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?\":{}|<>]/.test(password);

  return (
    password.length >= minLength &&
    hasUppercase &&
    hasLowercase &&
    hasNumber &&
    hasSpecialChar
  );
}

/**
 * Checks if a string is not empty and not just whitespace.
 * @param {string} value The string to check.
 * @returns {boolean} True if the string is not blank, false otherwise.
 */
export function isNotBlank(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

/**
 * Checks if a string is a valid phone number format (simple check).
 * @param {string} phoneNumber The phone number string to validate.
 * @returns {boolean} True if the phone number is valid, false otherwise.
 */
export function isPhoneNumber(phoneNumber) {
  const re = /^\+?[0-9]{10,15}$/;
  return re.test(String(phoneNumber));
}

/**
 * Checks if a string is a valid Japanese postal code format (e.g., 123-4567).
 * @param {string} postalCode The postal code string to validate.
 * @returns {boolean} True if the postal code is valid, false otherwise.
 */
export function isPostalCode(postalCode) {
  const re = /^\d{3}-\d{4}$/;
  return re.test(String(postalCode));
}
