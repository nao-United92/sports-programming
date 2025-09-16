/**
 * Checks if a string is a valid email address.
 * @param {string} email The email address to check.
 * @returns {boolean} Returns `true` if the email address is valid, else `false`.
 */
const isEmail = (email) => {
  const re = /^(([^<>()[\\]\\.,;:\s@\"]+(\.[^<>()[\\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

/**
 * Checks if a string is a valid URL.
 * @param {string} url The URL to check.
 * @returns {boolean} Returns `true` if the URL is valid, else `false`.
 */
const isURL = (url) => {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
};

/**
 * Checks if a string is a valid phone number.
 * @param {string} phoneNumber The phone number to check.
 * @returns {boolean} Returns `true` if the phone number is valid, else `false`.
 */
const isPhoneNumber = (phoneNumber) => {
  const re = /^\+?[1-9]\d{1,14}$/;
  return re.test(phoneNumber);
};

module.exports = { isEmail, isURL, isPhoneNumber };