// src/other/url-utils.js

/**
 * Parses the query parameters from a URL string and returns them as an object.
 *
 * @param {string} url The URL string to parse.
 * @returns {Object} An object containing the query parameters.
 */
const getQueryParams = (url) => {
  if (typeof url !== 'string') {
    return {};
  }

  const queryString = url.split('?')[1];
  if (!queryString) {
    return {};
  }

  const params = {};
  queryString.split('&').forEach(pair => {
    const [key, value] = pair.split('=').map(decodeURIComponent);
    if (key) {
      params[key] = value || '';
    }
  });

  return params;
};

module.exports = {
  getQueryParams,
};
