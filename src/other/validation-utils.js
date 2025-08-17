/**
 * Checks if a string is a valid email address.
 *
 * @param {string} email The string to check.
 * @returns {boolean} True if the string is a valid email address, false otherwise.
 */
export function isEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Checks if a string is a strong password (e.g., at least 8 characters, contains uppercase, lowercase, number, and special character).
 *
 * @param {string} password The string to check.
 * @returns {boolean} True if the string is a strong password, false otherwise.
 */
export function isStrongPassword(password) {
  const minLength = 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  return (
    password.length >= minLength &&
    hasUppercase &&
    hasLowercase &&
    hasNumber &&
    hasSpecialChar
  );
}