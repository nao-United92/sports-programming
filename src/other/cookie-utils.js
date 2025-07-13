/**
 * Sets a cookie with the given name, value, and options.
 * @param {string} name The name of the cookie.
 * @param {string} value The value of the cookie.
 * @param {object} [options={}] Options for the cookie (expires, path, domain, secure, samesite).
 * @param {Date} [options.expires] The expiration date of the cookie.
 * @param {string} [options.path='/'] The path for which the cookie is valid.
 * @param {string} [options.domain] The domain for which the cookie is valid.
 * @param {boolean} [options.secure] If true, the cookie will only be sent over HTTPS.
 * @param {string} [options.samesite] Controls when cookies are sent with cross-site requests (e.g., 'Lax', 'Strict', 'None').
 */
export function setCookie(name, value, options = {}) {
  let updatedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);

  for (const optionKey in options) {
    updatedCookie += '; ' + optionKey;
    const optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += '=' + optionValue;
    }
  }

  document.cookie = updatedCookie;
}

/**
 * Gets the value of a cookie by its name.
 * @param {string} name The name of the cookie to retrieve.
 * @returns {string|null} The value of the cookie, or null if not found.
 */
export function getCookie(name) {
  const nameEQ = encodeURIComponent(name) + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) {
      return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
  }
  return null;
}

/**
 * Deletes a cookie by its name.
 * @param {string} name The name of the cookie to delete.
 */
export function deleteCookie(name) {
  setCookie(name, '', { 'max-age': -1 });
}