/**
 * Gets the query parameters from a URL as an object.
 *
 * @param {string} url The URL to parse.
 * @returns {object} Returns an object containing the query parameters.
 */
export const getURLParams = (url) => {
  const params = {};
  const urlParts = url.split('?');
  if (urlParts.length < 2) {
    return params;
  }

  const queryString = urlParts[1];
  const pairs = queryString.split('&');

  for (const pair of pairs) {
    const [key, value] = pair.split('=');
    if (key) {
      params[decodeURIComponent(key)] = decodeURIComponent(value || '');
    }
  }

  return params;
};
