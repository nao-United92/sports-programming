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

/**
 * Checks if a string is a valid credit card number (basic Luhn algorithm check).
 * @param {string} cardNumber The string to validate.
 * @returns {boolean} True if the string is a valid credit card number, false otherwise.
 */
export function isCreditCard(cardNumber) {
  if (typeof cardNumber !== 'string') {
    return false;
  }
  const cleaned = cardNumber.replace(/\D/g, '');
  if (cleaned.length < 13 || cleaned.length > 19) {
    return false;
  }
  let sum = 0;
  let double = false;
  for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit = parseInt(cleaned.charAt(i), 10);
    if (double) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
    double = !double;
  }
  return (sum % 10) === 0;
}

/**
 * Checks if a string is a valid date in YYYY-MM-DD format.
 * @param {string} dateString The string to validate.
 * @returns {boolean} True if the string is a valid date, false otherwise.
 */
export function isDate(dateString) {
  if (typeof dateString !== 'string') {
    return false;
  }
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(dateString)) {
    return false;
  }
  const date = new Date(dateString);
  return !isNaN(date.getTime()) && date.toISOString().slice(0, 10) === dateString;
}

/**
 * Checks if a string is a valid time in HH:MM or HH:MM:SS format.
 * @param {string} timeString The string to validate.
 * @returns {boolean} True if the string is a valid time, false otherwise.
 */
export function isTime(timeString) {
  if (typeof timeString !== 'string') {
    return false;
  }
  const regex = /^(?:2[0-3]|[01][0-9]):[0-5][0-9](?::[0-5][0-9])?$/;
  return regex.test(timeString);
}

/**
 * Validates password strength based on a set of criteria.
 * @param {string} password The password string to validate.
 * @returns {Array<string>} An array of strings describing unmet requirements. Returns an empty array if the password is strong.
 */
export function validatePassword(password) {
  const errors = [];

  if (typeof password !== 'string') {
    errors.push('Password must be a string.');
    return errors;
  }

  if (password.length < 8) {
    errors.push('Password must be at least 8 characters long.');
  }
  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter.');
  }
  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter.');
  }
  if (!/[0-9]/.test(password)) {
    errors.push('Password must contain at least one number.');
  }
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errors.push('Password must contain at least one special character.');
  }

  return errors;
}
