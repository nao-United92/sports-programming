
/**
 * Parses the query parameters from a given URL string or the current window location.
 * @param {string} [url=window.location.search] The URL string to parse. Defaults to current window's search part.
 * @returns {object} An object containing the parsed query parameters.
 */
export function getQueryParams(url = window.location.search) {
  const params = {};
  const queryString = url.startsWith('?') ? url.substring(1) : url;
  queryString.split('&').forEach(pair => {
    const [key, value] = pair.split('=').map(decodeURIComponent);
    if (key) {
      params[key] = value || '';
    }
  });
  return params;
}

/**
 * Adds or updates query parameters in a given URL.
 * @param {string} url The base URL.
 * @param {object} params An object containing the parameters to add or update.
 * @returns {string} The URL with updated query parameters.
 */
export function addQueryParams(url, params) {
  const [baseUrl, queryString] = url.split('?');
  const existingParams = getQueryParams(queryString || '');
  const newParams = { ...existingParams, ...params };

  const newQueryString = Object.keys(newParams)
    .map(key => {
      const value = newParams[key];
      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    })
    .join('&');

  return newQueryString ? `${baseUrl}?${newQueryString}` : baseUrl;
}

/**
 * Removes specified query parameters from a given URL.
 * @param {string} url The base URL.
 * @param {string[]} paramsToRemove An array of parameter names to remove.
 * @returns {string} The URL with specified query parameters removed.
 */
export function removeQueryParams(url, paramsToRemove) {
  const [baseUrl, queryString] = url.split('?');
  const existingParams = getQueryParams(queryString || '');

  paramsToRemove.forEach(param => {
    delete existingParams[param];
  });

  const newQueryString = Object.keys(existingParams)
    .map(key => {
      const value = existingParams[key];
      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    })
    .join('&');

  return newQueryString ? `${baseUrl}?${newQueryString}` : baseUrl;
}
