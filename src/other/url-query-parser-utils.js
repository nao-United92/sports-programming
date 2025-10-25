
/**
 * Parses a URL query string into an object of key-value pairs.
 *
 * @param {string} queryString The query string to parse (e.g., '?name=John&age=30').
 * @returns {Object} An object containing the key-value pairs.
 */
const parseQueryString = (queryString) => {
  if (typeof queryString !== 'string') {
    return {};
  }

  const params = {};
  const query = queryString.startsWith('?') ? queryString.substring(1) : queryString;

  if (!query) {
    return params;
  }

  const pairs = query.split('&');
  for (const pair of pairs) {
    const parts = pair.split('=');
    if (parts.length === 2) {
      const key = decodeURIComponent(parts[0]);
      const value = decodeURIComponent(parts[1] || '');
      params[key] = value;
    } else if (parts.length === 1 && parts[0]) {
      const key = decodeURIComponent(parts[0]);
      params[key] = ''; // Handle keys without values
    }
  }

  return params;
};

module.exports = { parseQueryString };
