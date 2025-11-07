/**
 * Provides utility functions for interacting with browser cookies.
 */
export const cookieUtils = {
  /**
   * Sets a cookie.
   * @param {string} name The name of the cookie.
   * @param {string} value The value of the cookie.
   * @param {number} [days] The number of days until the cookie expires.
   * @param {string} [path='/'] The path for which the cookie is valid.
   */
  set: (name, value, days, path = '/') => {
    let expires = '';
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = `; expires=${date.toUTCString()}`;
    }
    document.cookie = `${name}=${value}${expires}; path=${path}`;
  },

  /**
   * Gets a cookie's value by name.
   * @param {string} name The name of the cookie to retrieve.
   * @returns {string|null} The cookie's value, or null if not found.
   */
  get: (name) => {
    const nameEQ = `${name}=`;
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  },

  /**
   * Removes a cookie by name.
   * @param {string} name The name of the cookie to remove.
   * @param {string} [path='/'] The path for which the cookie is valid.
   */
  remove: (name, path = '/') => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path}`;
  },

  /**
   * Gets all cookies as an object.
   * @returns {object} An object containing all cookies.
   */
  getAll: () => {
    const cookies = {};
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      const parts = c.split('=');
      if (parts.length === 2) {
        cookies[parts[0]] = parts[1];
      }
    }
    return cookies;
  },
};
