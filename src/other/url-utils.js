/**
 * Gets a specific query parameter from a URL.
 *
 * @param url The URL string.
 * @param paramName The name of the query parameter to get.
 * @returns The value of the query parameter, or null if not found.
 */
export function getQueryParam(url, paramName) {
    const urlParams = new URLSearchParams(new URL(url).search);
    return urlParams.get(paramName);
}

/**
 * Adds or updates a query parameter in a URL.
 *
 * @param url The original URL string.
 * @param paramName The name of the query parameter to add or update.
 * @param paramValue The value of the query parameter.
 * @returns The new URL string with the updated query parameter.
 */
export function setQueryParam(url, paramName, paramValue) {
    const urlObj = new URL(url);
    urlObj.searchParams.set(paramName, paramValue);
    return urlObj.toString();
}

/**
 * Removes a specific query parameter from a URL.
 *
 * @param url The original URL string.
 * @param paramName The name of the query parameter to remove.
 * @returns The new URL string with the query parameter removed.
 */
export function removeQueryParam(url, paramName) {
    const urlObj = new URL(url);
    urlObj.searchParams.delete(paramName);
    return urlObj.toString();
}

/**
 * Checks if a URL is an absolute URL.
 *
 * @param url The URL string to check.
 * @returns True if the URL is absolute, false otherwise.
 */
export function isAbsoluteUrl(url) {
    try {
        return new URL(url).origin !== 'null';
    } catch (e) {
        return false;
    }
}

/**
 * Adds multiple query parameters to a URL.
 * @param {string} url The original URL string.
 * @param {object} params An object of query parameter key-value pairs.
 * @returns {string} The new URL string with the added query parameters.
 */
export function addQueryParams(url, params) {
  const urlObj = new URL(url);
  for (const key in params) {
    if (Object.prototype.hasOwnProperty.call(params, key)) {
      urlObj.searchParams.append(key, params[key]);
    }
  }
  return urlObj.toString();
}

/**
 * Combines a base URL and a relative URL into a single URL.
 * @param {string} baseURL The base URL.
 * @param {string} relativeURL The relative URL.
 * @returns {string} The combined URL.
 */
export function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
}
