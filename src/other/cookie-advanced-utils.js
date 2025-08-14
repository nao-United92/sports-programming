/**
 * Sets a cookie with advanced options.
 *
 * @param {string} name - The name of the cookie.
 * @param {string} value - The value of the cookie.
 * @param {object} [options={}] - Optional settings for the cookie.
 * @param {number} [options.expires] - The number of days until the cookie expires.
 * @param {string} [options.path='/'] - The path for which the cookie is valid.
 * @param {string} [options.domain] - The domain for which the cookie is valid.
 * @param {boolean} [options.secure] - True if the cookie should only be sent over HTTPS.
 * @param {string} [options.sameSite] - The SameSite attribute for the cookie (e.g., 'Lax', 'Strict', 'None').
 */
export const setCookie = (name, value, options = {}) => {
  let cookieString = `${name}=${value}`;

  if (options.expires !== undefined) {
    const date = new Date();
    date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
    cookieString += `; expires=${date.toUTCString()}`;
  }

  cookieString += `; path=${options.path || '/'}`;

  if (options.domain) {
    cookieString += `; domain=${options.domain}`;
  }

  if (options.secure) {
    cookieString += '; secure';
  }

  if (options.sameSite) {
    cookieString += `; SameSite=${options.sameSite}`;
  }

  document.cookie = cookieString;
};
