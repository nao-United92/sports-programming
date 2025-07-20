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

/**
 * Checks if a string is a strong password.
 * Requires at least 8 characters, one uppercase, one lowercase, one number, and one special character.
 * @param {string} password The string to validate.
 * @returns {boolean} True if the string is a strong password, false otherwise.
 */
export function isStrongPassword(password) {
  if (typeof password !== 'string') {
    return false;
  }
  const hasMinLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  return hasMinLength && hasUppercase && hasLowercase && hasNumber && hasSpecialChar;
}
