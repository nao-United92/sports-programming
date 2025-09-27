/**
 * Parses the cookies and returns them as an object.
 * @returns {Object} An object with all the cookies.
 */
const getCookies = () =>
  document.cookie.split(';').reduce((cookies, cookie) => {
    if (!cookie) return cookies;
    const [name, value] = cookie.split('=').map(c => c.trim());
    cookies[decodeURIComponent(name)] = decodeURIComponent(value);
    return cookies;
  }, {});

/**
 * Gets the value of a specific cookie.
 * @param {string} name The name of the cookie.
 * @returns {string|undefined} The value of the cookie or undefined if not found.
 */
const getCookie = (name) => getCookies()[name];

/**
 * Sets a cookie.
 * @param {string} name The name of the cookie.
 * @param {string} value The value of the cookie.
 * @param {Object} [options] Options for the cookie.
 * @param {number} [options.days] The number of days until the cookie expires.
 * @param {string} [options.path] The path for the cookie.
 */
const setCookie = (name, value, options = {}) => {
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
};

/**
 * Deletes a cookie.
 * @param {string} name The name of the cookie to delete.
 */
const deleteCookie = (name) => {
  document.cookie = `${encodeURIComponent(name)}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
};

/**
 * Parses a cookie string into an object.
 * @param {string} str The cookie string.
 * @returns {Object} The parsed object.
 */
const parseCookie = (str) =>
  str
    .split(';')
    .map(v => v.split('='))
    .reduce((acc, v) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
      return acc;
    }, {});

module.exports = { getCookies, getCookie, setCookie, deleteCookie, parseCookie };
