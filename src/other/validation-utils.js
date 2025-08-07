/**
 * Validates if a given string is a valid email address format.
 * @param {string} email The email string to validate.
 * @returns {boolean} True if the email is valid, false otherwise.
 */
export function isValidEmail(email) {
  if (typeof email !== 'string') {
    return false;
  }
  // A simple regex for email validation. More robust validation might be needed for production.
  const emailRegex = /^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}
