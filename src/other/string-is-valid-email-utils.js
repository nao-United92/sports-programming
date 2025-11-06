/**
 * Checks if a string is a valid email address.
 *
 * @param {string} email The email string to validate.
 * @returns {boolean} True if the email is valid, false otherwise.
 */
export const isValidEmail = (email) => {
  if (typeof email !== 'string') {
    return false;
  }
  // A common regex for email validation. Not 100% perfect for all edge cases,
  // but covers most common valid email formats.
  const emailRegex = /^[^s@]+@[^s@]+\.[^s@]+$/;
  return emailRegex.test(email);
};
