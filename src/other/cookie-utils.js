/**
 * Gets a cookie by name.
 * @param {string} name The name of the cookie to get.
 * @returns {string|null} The value of the cookie, or null if not found.
 */
export function getCookie(name) {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match) {
    return decodeURIComponent(match[2]);
  }
  return null;
}

/**
 * Sets a cookie.
 * @param {string} name The name of the cookie.
 * @param {string} value The value of the cookie.
 * @param {object} [options] Options for the cookie.
 * @param {number} [options.days] The number of days until the cookie expires.
 * @param {string} [options.path] The path for the cookie.
 */
export function setCookie(name, value, options = {}) {
  let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

  if (options.days) {
    const date = new Date();
    date.setTime(date.getTime() + (options.days * 24 * 60 * 60 * 1000));
    cookieString += '; expires=' + date.toUTCString();
  } else {
    const date = new Date();
    date.setTime(date.getTime() + (1 * 24 * 60 * 60 * 1000));
    cookieString += '; expires=' + date.toUTCString();
  }

  if (options.path) {
    cookieString += '; path=' + options.path;
  } else {
    cookieString += '; path=/';
  }

  document.cookie = cookieString;
}

/**
 * Deletes a cookie by name.
 * @param {string} name The name of the cookie to delete.
 */
export function deleteCookie(name) {
  setCookie(name, '', { days: -1 });
}
