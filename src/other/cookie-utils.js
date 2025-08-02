/**
 * Sets a cookie with the given name, value, and options.
 *
 * @param {string} name The name of the cookie.
 * @param {string} value The value of the cookie.
 * @param {object} [options={}] Optional settings for the cookie.
 * @param {number} [options.days] The number of days until the cookie expires.
 * @param {string} [options.path] The path for the cookie.
 */
export function setCookie(name, value, options = {}) {
  let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

  if (options.days) {
    const date = new Date();
    date.setTime(date.getTime() + (options.days * 24 * 60 * 60 * 1000));
    cookieString += `; expires=${date.toUTCString()}`;
  }

  if (options.path) {
    cookieString += `; path=${options.path}`;
  }

  document.cookie = cookieString;
}

/**
 * Gets the value of a cookie by its name.
 *
 * @param {string} name The name of the cookie to retrieve.
 * @returns {string|null} The value of the cookie, or null if not found.
 */
export function getCookie(name) {
  const nameEQ = `${encodeURIComponent(name)}=`;
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) === 0) {
      return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
  }
  return null;
}

/**
 * Deletes a cookie by its name.
 *
 * @param {string} name The name of the cookie to delete.
 */
export function deleteCookie(name) {
  setCookie(name, '', { days: -1 });
}