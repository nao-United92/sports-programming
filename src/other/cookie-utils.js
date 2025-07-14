
/**
 * Sets a cookie.
 * @param {string} name The name of the cookie.
 * @param {string} value The value of the cookie.
 * @param {number} [days] The number of days until the cookie expires. If not provided, it's a session cookie.
 */
export function setCookie(name, value, days) {
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = '; expires=' + date.toUTCString();
  }
  document.cookie = name + '=' + (value || '') + expires + '; path=/';
}

/**
 * Gets the value of a cookie by its name.
 * @param {string} name The name of the cookie to retrieve.
 * @returns {string|null} The value of the cookie, or null if not found.
 */
export function getCookie(name) {
  const nameEQ = name + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

/**
 * Deletes a cookie by its name.
 * @param {string} name The name of the cookie to delete.
 */
export function deleteCookie(name) {
  document.cookie = name + '=; Max-Age=-99999999;';
}
