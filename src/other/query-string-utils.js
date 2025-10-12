/**
 * Parses a URL query string into an object.
 * @param {string} queryString The query string to parse (e.g., '?foo=bar&baz=qux').
 * @returns {object} An object representing the query string.
 */
export const parse = (queryString) => {
  const params = {};
  const sanitizedString = queryString.startsWith('?') ? queryString.slice(1) : queryString;
  if (!sanitizedString) {
    return params;
  }
  const pairs = sanitizedString.split('&');
  for (const pair of pairs) {
    const [key, value] = pair.split('=').map(decodeURIComponent);
    if (key) {
      params[key] = value !== undefined ? value : '';
    }
  }
  return params;
};

/**
 * Stringifies an object into a URL query string.
 * @param {object} obj The object to stringify.
 * @returns {string} The URL query string.
 */
export const stringify = (obj) => {
  const pairs = [];
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      const encodedKey = encodeURIComponent(key);
      const encodedValue = encodeURIComponent(String(value));
      pairs.push(`${encodedKey}=${encodedValue}`);
    }
  }
  return pairs.join('&');
};