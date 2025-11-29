// src/other/dom-utils.js

/**
 * Retrieves the value of a specified cookie by its name.
 *
 * @param {string} name The name of the cookie to retrieve.
 * @returns {string | null} The value of the cookie, or null if not found.
 */
const getCookie = (name) => {
  if (typeof document === 'undefined' || typeof name !== 'string' || name === '') {
    return null;
  }

  const nameEQ = name + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) {
      return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
  }
  return null;
};

module.exports = {
  getCookie,
};