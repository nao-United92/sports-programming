/**
 * Parses the query parameters from a URL string and returns them as an object.
 * @param {string} url The URL string to parse. If not provided, uses window.location.search.
 * @returns {object} An object containing the parsed query parameters.
 */
export function parseQueryParams(url) {
  const queryString = url ? url.split('?')[1] : '';
  const params = {};
  if (queryString) {
    queryString.split('&').forEach(pair => {
      const [key, value] = pair.split('=').map(decodeURIComponent);
      params[key] = value || '';
    });
  }
  return params;
}
