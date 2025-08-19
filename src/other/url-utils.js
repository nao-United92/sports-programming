/**
 * Parses a URL and returns all its query parameters as an object.
 * @param {string} url The URL string. If not provided, uses current window.location.href.
 * @returns {Object<string, string>} An object containing all query parameters.
 */
function getQueryParams(url = window.location.href) {
  const params = {};
  const queryString = url.split('?')[1];
  if (queryString) {
    queryString.split('&').forEach(pair => {
      const [key, value] = pair.split('=').map(decodeURIComponent);
      params[key] = value || '';
    });
  }
  return params;
}

/**
 * Gets the value of a specific query parameter from a URL.
 * @param {string} url The URL string. If not provided, uses current window.location.href.
 * @param {string} param The name of the query parameter to get.
 * @returns {string|null} The value of the parameter, or null if not found.
 */
function getQueryParam(url = window.location.href, param) {
  const params = getQueryParams(url);
  return Object.prototype.hasOwnProperty.call(params, param) ? params[param] : null;
}

/**
 * Adds or updates a query parameter in a URL.
 * @param {string} url The original URL string.
 * @param {string} param The name of the query parameter to add/update.
 * @param {string} value The value of the query parameter.
 * @returns {string} The new URL with the updated query parameter.
 */
function addQueryParam(url, param, value) {
  const [baseUrl, queryString] = url.split('?');
  const params = getQueryParams(url);
  params[param] = value;

  const newQueryString = Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&');

  return `${baseUrl}?${newQueryString}`;
}

/**
 * Removes a query parameter from a URL.
 * @param {string} url The original URL string.
 * @param {string} param The name of the query parameter to remove.
 * @returns {string} The new URL with the query parameter removed.
 */
function removeQueryParam(url, param) {
  const [baseUrl, queryString] = url.split('?');
  const params = getQueryParams(url);
  delete params[param];

  const newQueryString = Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&');

  return newQueryString ? `${baseUrl}?${newQueryString}` : baseUrl;
}

module.exports = {
  getQueryParams,
  getQueryParam,
  addQueryParam,
  removeQueryParam
};
