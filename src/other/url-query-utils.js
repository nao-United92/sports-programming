
/**
 * Parses the query parameters from a given URL string or the current window location.
 * @param {string} [url=window.location.search] The URL string to parse. Defaults to current window's search part.
 * @returns {object} An object containing the parsed query parameters.
 */
export function getQueryParams(url = window.location.search) {
  const params = {};
  let queryString = '';
  const queryStartIndex = url.indexOf('?');
  if (queryStartIndex !== -1) {
    queryString = url.substring(queryStartIndex + 1);
  } else if (!url.includes('=') && !url.includes('&')) { // If no '?' and no key-value pairs, assume it's not a query string
    return {};
  } else {
    queryString = url;
  }

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

/**
 * Checks if a URL has a specific query parameter.
 * @param {string} url The URL string.
 * @param {string} paramName The name of the query parameter to check.
 * @returns {boolean} True if the URL has the parameter, false otherwise.
 */
export function hasQueryParam(url, paramName) {
  const params = getQueryParams(url);
  return Object.prototype.hasOwnProperty.call(params, paramName);
}

/**
 * Gets the value of a specific query parameter from a URL.
 * @param {string} url The URL string.
 * @param {string} paramName The name of the query parameter to get.
 * @returns {string|null} The value of the parameter, or null if not found.
 */
export function getQueryParamValue(url, paramName) {
  const params = getQueryParams(url);
  return Object.prototype.hasOwnProperty.call(params, paramName) ? params[paramName] : null;
}

/**
 * Builds a query string from an object of parameters.
 * @param {object} params The object containing parameters.
 * @returns {string} The constructed query string (e.g., 'key1=value1&key2=value2').
 */
export function buildQueryString(params) {
  if (typeof params !== 'object' || params === null) {
    return '';
  }
  return Object.keys(params)
    .map(key => {
      const value = params[key];
      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    })
    .join('&');
}

/**
 * Updates a single query parameter in a URL.
 * @param {string} url The original URL.
 * @param {string} paramName The name of the parameter to update.
 * @param {string} paramValue The new value for the parameter.
 * @returns {string} The updated URL.
 */
export function updateQueryParam(url, paramName, paramValue) {
  const [baseUrl, queryString] = url.split('?');
  const existingParams = getQueryParams(queryString || '');
  existingParams[paramName] = paramValue;
  const newQueryString = buildQueryString(existingParams);
  return newQueryString ? `${baseUrl}?${newQueryString}` : baseUrl;
}
