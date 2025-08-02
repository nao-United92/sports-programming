/**
 * Parses a query string into an object.
 * @param {string} queryString The query string to parse (e.g., 'key1=value1&key2=value2').
 * @returns {object} An object representation of the query string.
 */
export function parseQueryString(queryString) {
  if (!queryString) {
    return {};
  }
  if (queryString.startsWith('?')) {
    queryString = queryString.substring(1);
  }
  const params = {};
  if (!queryString) {
    return params;
  }
  queryString.split('&').forEach(pair => {
    const [key, value] = pair.split('=').map(decodeURIComponent);
    if (key) {
      params[key] = value || '';
    }
  });
  return params;
}

/**
 * Converts an object into a URL query string.
 * @param {object} obj The object to convert.
 * @returns {string} The resulting query string.
 */
export function stringifyQueryString(obj) {
  if (!obj) {
    return '';
  }
  return Object.keys(obj)
    .map(key => {
      const value = obj[key];
      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    })
    .join('&');
}