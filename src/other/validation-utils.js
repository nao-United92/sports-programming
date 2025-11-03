/**
 * Checks if a string is a valid email address.
 * @param {string} email The email string to validate.
 * @returns {boolean} True if the email is valid, false otherwise.
 */
export const isValidEmail = (email) => {
  const re = /.+@.+\..+/;
  return re.test(String(email).toLowerCase());
};

/**
 * Checks if a string is a valid URL.
 * @param {string} url The URL string to validate.
 * @returns {boolean} True if the URL is valid, false otherwise.
 */
export const isValidURL = (url) => {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
};

/**
 * Checks if a password meets a minimum strength requirement.
 * (At least 8 characters, one uppercase, one lowercase, one number, one special character)
 * @param {string} password The password string to validate.
 * @returns {boolean} True if the password is strong, false otherwise.
 */
export const isStrongPassword = (password) => {
  const hasMinLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  return hasMinLength && hasUppercase && hasLowercase && hasNumber && hasSpecialChar;
};
