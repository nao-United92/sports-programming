/**
 * Converts an object to a URL query string.
 * @param {object} params The object to convert.
 * @returns {string} The URL query string.
 */
export const objectToQueryString = (params) => {
  return Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&');
};

/**
 * Converts a URL query string to an object.
 * @param {string} queryString The URL query string to convert.
 * @returns {object} The resulting object.
 */
export const queryStringToObject = (queryString) => {
  const params = new URLSearchParams(queryString);
  const obj = {};
  for (const [key, value] of params.entries()) {
    obj[key] = value;
  }
  return obj;
};