/**
 * Checks if a string is a valid email address.
 * @param {string} email The email string to validate.
 * @returns {boolean} True if the email is valid, false otherwise.
 */
export function isValidEmail(email) {
  if (typeof email !== 'string') {
    return false;
  }
  // More robust regex for email validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/;
  return emailRegex.test(email);
}

/**
 * Checks if a string is a strong password.
 * A strong password must:
 * - Be at least 8 characters long
 * - Contain at least one uppercase letter
 * - Contain at least one lowercase letter
 * - Contain at least one number
 * - Contain at least one special character (e.g., !@#$%^&*)
 * @param {string} password The password string to validate.
 * @returns {boolean} True if the password is strong, false otherwise.
 */
export function isStrongPassword(password) {
  if (typeof password !== 'string') {
    return false;
  }
  // At least 8 characters long
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
  // Contains at least one special character
  if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
    return false;
  }
  return true;
}
