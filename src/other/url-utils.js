/**
 * Returns an object containing the query string parameters of a URL.
 *
 * @param {string} url The URL to parse.
 * @returns {Object} An object containing the query string parameters.
 */
export const getURLParameters = (url) => {
  const params = {};
  // Use a dummy base URL if the URL is relative
  const fullUrl = new URL(url, 'https://dummybase.com');
  for (const [key, value] of fullUrl.searchParams.entries()) {
    params[key] = value;
  }
  return params;
};

/**
 * Converts an object to a URL query string.
 *
 * @param {Object} obj The object to convert.
 * @returns {string} The URL query string.
 */
export const objectToQueryString = (obj) => {
  return Object.keys(obj)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
    .join('&');
};
