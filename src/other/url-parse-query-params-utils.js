/**
 * Parses query parameters from a URL string or a query string.
 *
 * @param {string} urlString The URL string or query string to parse.
 * @returns {Object} An object containing the parsed query parameters.
 */
export const parseQueryParams = (urlString) => {
  const queryString = urlString.includes('?') ? urlString.split('?')[1] : urlString;
  const params = {};

  if (!queryString) {
    return params;
  }

  queryString.split('&').forEach(param => {
    const parts = param.split('=');
    const key = decodeURIComponent(parts[0]);
    const value = parts.length > 1 ? decodeURIComponent(parts.slice(1).join('=')) : '';
    params[key] = value;
  });

  return params;
};
