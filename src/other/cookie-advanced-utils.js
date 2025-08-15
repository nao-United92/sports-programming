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

/**
 * Stores a JSON object as a cookie.
 *
 * @param {string} name - The name of the cookie.
 * @param {object} value - The JSON object to store.
 * @param {object} [options={}] - Optional settings for the cookie (same as setCookie).
 */
export const setJsonCookie = (name, value, options = {}) => {
  const jsonValue = JSON.stringify(value);
  setCookie(name, jsonValue, options);
};

/**
 * Retrieves and parses a JSON object from a cookie.
 *
 * @param {string} name - The name of the cookie.
 * @returns {object | null} The parsed JSON object, or null if the cookie doesn't exist or is not valid JSON.
 */
export const getJsonCookie = (name) => {
  const nameEQ = name + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) {
      const value = c.substring(nameEQ.length, c.length);
      try {
        return JSON.parse(value);
      } catch (e) {
        return null;
      }
    }
  }
  return null;
};
