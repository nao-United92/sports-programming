/**
 * Validates if a given string is a valid email address format.
 *
 * @param {string} email The email string to validate.
 * @returns {boolean} True if the email is valid, false otherwise.
 */
export function isValidEmail(email) {
  if (typeof email !== 'string' || email === null || email === undefined) {
    return false;
  }
  // A common regex for email validation. Not exhaustive but covers most cases.
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}
