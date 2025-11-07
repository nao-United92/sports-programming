/**
 * Validates if a given string is a valid email address format.
 *
 * @param {string} email The string to validate.
 * @returns {boolean} True if the string is a valid email format, false otherwise.
 */
export const isValidEmail = (email) => {
  if (typeof email !== 'string' || email.length === 0) {
    return false;
  }
  // A common regex for email validation. Not 100% perfect for all edge cases,
  // but covers most common valid formats.
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
