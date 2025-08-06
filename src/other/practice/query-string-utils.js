
/**
 * Parses a URL query string into an object.
 * @param {string} queryString The URL query string to parse.
 * @returns {object} An object representation of the query string.
 */
export function parseQueryString(queryString) {
  if (typeof queryString !== 'string') {
    return {};
  }
  const params = new URLSearchParams(queryString);
  const result = {};
  for (const [key, value] of params.entries()) {
    result[key] = value;
  }
  return result;
}

/**
 * Converts an object to a URL query string.
 * @param {object} obj The object to convert.
 * @returns {string} The URL query string.
 */
export function stringifyQueryString(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return '';
  }
  return new URLSearchParams(obj).toString();
}
