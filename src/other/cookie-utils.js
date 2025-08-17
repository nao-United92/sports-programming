
/**
 * Sets a cookie.
 *
 * @param {string} name The name of the cookie.
 * @param {string} value The value of the cookie.
 * @param {number} days The number of days until the cookie expires.
 */
export const setCookie = (name, value, days) => {
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = '; expires=' + date.toUTCString();
  }
  document.cookie = name + '=' + (value || '') + expires + '; path=/';
};

/**
 * Gets a cookie by name.
 *
 * @param {string} name The name of the cookie to get.
 * @returns {string | null} The value of the cookie, or null if not found.
 */
export const getCookie = (name) => {
  const nameEQ = name + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

/**
 * Deletes a cookie by name.
 *
 * @param {string} name The name of the cookie to delete.
 */
export const deleteCookie = (name) => {
  document.cookie = name + '=; Max-Age=-99999999;';
};

/**
 * Checks if a cookie with the given name exists.
 *
 * @param {string} name The name of the cookie to check.
 * @returns {boolean} True if the cookie exists, false otherwise.
 */
export const cookieExists = (name) => {
  return getCookie(name) !== null;
};

/**
 * Gets all cookies as an object.
 *
 * @returns {Object} An object containing all cookies.
 */
export const getCookies = () => {
  return document.cookie.split(';').reduce((cookies, cookie) => {
    const [name, value] = cookie.split('=').map(c => c.trim());
    if (name) {
      cookies[name] = decodeURIComponent(value);
    }
    return cookies;
  }, {});
};

/**
 * Updates the value of an existing cookie.
 *
 * @param {string} name The name of the cookie to update.
 * @param {string} newValue The new value for the cookie.
 * @param {number} days The number of days until the cookie expires.
 */
export function updateCookie(name, newValue, days) {
  setCookie(name, newValue, days);
}

/**
 * Deletes all cookies for the current domain.
 */
export function clearAllCookies() {
  document.cookie.split(';').forEach(cookie => {
    const eqPos = cookie.indexOf('=');
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/';
  });
}
