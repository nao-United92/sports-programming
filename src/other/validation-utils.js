/**
 * Checks if a string is a valid email address.
 * @param {string} email The string to validate.
 * @returns {boolean} True if the string is a valid email, false otherwise.
 */
export function isEmail(email) {
  if (typeof email !== 'string') {
    return false;
  }
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

/**
 * Checks if a string is a valid phone number (simple validation).
 * @param {string} phoneNumber The string to validate.
 * @returns {boolean} True if the string is a valid phone number, false otherwise.
 */
export function isPhoneNumber(phoneNumber) {
  if (typeof phoneNumber !== 'string') {
    return false;
  }
  const phoneRegex = /^\+?[0-9]{10,15}$/;
  return phoneRegex.test(phoneNumber.replace(/[^0-9+]/g, ''));
}

/**
 * Checks if a string is a valid URL.
 * @param {string} url The string to validate.
 * @returns {boolean} True if the string is a valid URL, false otherwise.
 */
export function isUrl(url) {
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