/**
 * Gets the parameters of a URL.
 * @param {string} url The URL to parse.
 * @returns {Object} Returns an object with the URL parameters.
 */
const getURLParameters = (url) => {
  const params = {};
  const searchParams = new URL(url).searchParams;
  for (const [key, value] of searchParams.entries()) {
    params[key] = value;
  }
  return params;
};

/**
 * Checks if a URL is absolute.
 * @param {string} url The URL to check.
 * @returns {boolean} Returns `true` if the URL is absolute, else `false`.
 */
const isAbsoluteURL = (url) => {
  return /^[a-z][a-z0-9+.-]*:/.test(url);
};

/**
 * Combines a base URL and a relative URL.
 * @param {string} baseURL The base URL.
 * @param {string} relativeURL The relative URL.
 * @returns {string} The combined URL.
 */
const combineURLs = (baseURL, relativeURL) => {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};

module.exports = { getURLParameters, isAbsoluteURL, combineURLs };
