/**
 * Sets a cookie with the given name, value, and options.
 *
 * @param {string} name The name of the cookie.
 * @param {string} value The value of the cookie.
 * @param {object} [options={}] Options for the cookie (e.g., expires, path, domain, secure, samesite).
 */
export const set = (name, value, options = {}) => {
  let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

  if (options.expires) {
    const expires = new Date();
    expires.setTime(expires.getTime() + options.expires * 24 * 60 * 60 * 1000);
    cookieString += `; expires=${expires.toUTCString()}`;
  }
  if (options.path) {
    cookieString += `; path=${options.path}`;
  }
  if (options.domain) {
    cookieString += `; domain=${options.domain}`;
  }
  if (options.secure) {
    cookieString += `; secure`;
  }
  if (options.samesite) {
    cookieString += `; samesite=${options.samesite}`;
  }

  document.cookie = cookieString;
};

/**
 * Gets the value of a cookie with the given name.
 *
 * @param {string} name The name of the cookie to retrieve.
 * @returns {string|null} The value of the cookie, or null if not found.
 */
export const get = (name) => {
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
};

/**
 * Removes a cookie with the given name.
 *
 * @param {string} name The name of the cookie to remove.
 * @param {object} [options={}] Options for the cookie (e.g., path, domain).
 */
export const remove = (name, options = {}) => {
  set(name, '', { ...options, expires: -1 });
};