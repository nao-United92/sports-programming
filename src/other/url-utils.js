/**
 * Converts an object to a URL query string.
 * @param {object} params The object to convert.
 * @returns {string} The URL query string.
 */
export function objectToQueryString(params) {
  if (!params || typeof params !== 'object') {
    return '';
  }
  return Object.keys(params)
    .map(key => {
      const value = params[key];
      if (value === undefined) {
        return '';
      }
      if (value === null) {
        return encodeURIComponent(key);
      }
      if (Array.isArray(value)) {
        return value.map(v => `${encodeURIComponent(key)}[]=${encodeURIComponent(v)}`).join('&');
      }
      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    })
    .filter(Boolean)
    .join('&');
}

/**
 * Converts a URL query string to an object.
 * @param {string} queryString The URL query string to convert (can include the leading '?').
 * @returns {object} The resulting object.
 */
export function queryStringToObject(queryString) {
  if (!queryString || typeof queryString !== 'string') {
    return {};
  }

  const params = {};
  const str = queryString.startsWith('?') ? queryString.substring(1) : queryString;

  if (!str) {
    return {};
  }

  str.split('&').forEach(part => {
    const [key, val] = part.split('=');
    const decodedKey = decodeURIComponent(key);
    const decodedVal = val !== undefined ? decodeURIComponent(val) : null;

    if (decodedKey.endsWith('[]')) {
      const baseKey = decodedKey.slice(0, -2);
      if (!params[baseKey]) {
        params[baseKey] = [];
      }
      params[baseKey].push(decodedVal);
    } else {
      params[decodedKey] = decodedVal;
    }
  });

  return params;
}
