
/**
 * Parses a URL query string into an object.
 * @param {string} urlString The URL string with a query.
 * @returns {object} An object representing the query parameters.
 */
export const parseQueryString = (urlString) => {
  const params = {};
  const queryString = urlString.includes('?') ? urlString.split('?')[1] : urlString;
  if (!queryString) {
    return params;
  }

  const pairs = queryString.split('&');
  for (const pair of pairs) {
    const [key, value] = pair.split('=');
    if (key) {
      params[decodeURIComponent(key)] = value ? decodeURIComponent(value) : '';
    }
  }
  return params;
};
